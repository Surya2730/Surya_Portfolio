/**
 * api.js — Centralized Axios HTTP Client
 *
 * Why this file exists:
 *   - Keeps all network requests in one place instead of scattering fetch/axios calls.
 *   - Reads VITE_API_BASE_URL from frontend environment.
 *   - Automatically handles timeouts and standardized error formatting.
 */

import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Health check endpoint: GET /api/health
 */
export const checkApiHealth = async () => {
  try {
    const response = await apiClient.get('/health')
    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Backend server is currently unreachable.'
    )
  }
}

/**
 * Submit contact form: POST /api/contact
 * @param {Object} data - { name, email, subject, message }
 */
export const sendContactMessage = async (data) => {
  try {
    const response = await apiClient.post('/contact', data)
    return response.data
  } catch (error) {
    if (error.response?.data?.errors?.length) {
      // express-validator field error list
      const firstError = error.response.data.errors[0]?.message
      throw new Error(firstError || error.response.data.message)
    }
    throw new Error(
      error.response?.data?.message ||
        'Failed to deliver message. Please verify network connectivity.'
    )
  }
}

export default apiClient

