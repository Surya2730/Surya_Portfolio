/**
 * ContactSection.jsx — Interactive Contact Form & Direct Inquiries
 *
 * Requirements implemented:
 *   - Fields: Name, Email, Subject, Message
 *   - Client-side input validation matching backend constraints
 *   - Duplicate submission prevention during network flight
 *   - Loading state, verified success state, and error message banners
 *   - Submits directly to backend via sendContactMessage (Axios)
 *   - Only displays success after MongoDB Atlas write returns 201 Created
 */

import { useState } from 'react'
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react'
import { Github, Linkedin, Leetcode } from '../components/ui/Icons'
import { sendContactMessage } from '../services/api'
import { PERSONAL_INFO } from '../data/portfolioData'
import './ContactSection.css'

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)
  const [validationErrors, setValidationErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverFeedback, setServerFeedback] = useState({
    type: null, // 'success' | 'error' | null
    message: '',
  })

  // Client-side validation
  const validateForm = () => {
    const errors = {}

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters'
    } else if (formData.name.trim().length > 100) {
      errors.name = 'Name must not exceed 100 characters'
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!formData.email.trim()) {
      errors.email = 'Email address is required'
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address'
    }

    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters'
    } else if (formData.subject.trim().length > 200) {
      errors.subject = 'Subject must not exceed 200 characters'
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters'
    } else if (formData.message.trim().length > 5000) {
      errors.message = 'Message must not exceed 5000 characters'
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear specific field validation error when user types
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }

    // Clear general server feedback banner when user modifies form
    if (serverFeedback.type) {
      setServerFeedback({ type: null, message: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Prevent duplicate submission if already processing
    if (isSubmitting) return

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setServerFeedback({ type: null, message: '' })

    try {
      // POST to backend API (Express + MongoDB Atlas)
      const result = await sendContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      })

      // Database write confirmed!
      setServerFeedback({
        type: 'success',
        message:
          result.message ||
          'Message transmitted successfully and saved to MongoDB Atlas! I will reply shortly.',
      })

      // Reset form fields
      setFormData(INITIAL_FORM_STATE)
      setValidationErrors({})
    } catch (error) {
      setServerFeedback({
        type: 'error',
        message:
          error.message ||
          'Failed to transmit message. Please verify network or try reaching out directly via email.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section contact-section" aria-label="Contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">06. Dispatch</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind, an internship opportunity, or want to connect? Send a direct dispatch below.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info & Channels */}
          <div className="contact-info-panel glass-card">
            <h3 className="contact-panel-title">Direct Channels</h3>
            <p className="contact-panel-desc">
              Messages submitted here are securely stored in a cloud MongoDB Atlas database and delivered directly to my inbox.
            </p>

            <div className="contact-channels-list">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-channel-item">
                <div className="contact-channel-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-channel-label">Email</span>
                  <span className="contact-channel-value">{PERSONAL_INFO.email}</span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="contact-channel-icon">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="contact-channel-label">LinkedIn</span>
                  <span className="contact-channel-value">suryakumardev</span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="contact-channel-icon">
                  <Github size={20} />
                </div>
                <div>
                  <span className="contact-channel-label">GitHub</span>
                  <span className="contact-channel-value">Surya2730</span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="contact-channel-icon">
                  <Leetcode size={20} />
                </div>
                <div>
                  <span className="contact-channel-label">LeetCode</span>
                  <span className="contact-channel-value">400+ Problems Solved</span>
                </div>
              </a>

              <div className="contact-channel-item static-item">
                <div className="contact-channel-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-channel-label">Location</span>
                  <span className="contact-channel-value">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="contact-form-panel glass-card">
            {/* Status Feedback Banners */}
            {serverFeedback.type === 'success' && (
              <div className="feedback-banner banner-success" role="alert">
                <CheckCircle2 size={18} />
                <span>{serverFeedback.message}</span>
              </div>
            )}

            {serverFeedback.type === 'error' && (
              <div className="feedback-banner banner-error" role="alert">
                <AlertCircle size={18} />
                <span>{serverFeedback.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="form-row">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Karthikeyan T"
                    disabled={isSubmitting}
                    className={`form-input ${validationErrors.name ? 'input-error' : ''}`}
                    aria-invalid={Boolean(validationErrors.name)}
                    aria-describedby={validationErrors.name ? 'name-error' : undefined}
                    required
                  />
                  {validationErrors.name && (
                    <span id="name-error" className="field-error-text">
                      {validationErrors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span className="required-star">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="karthi@company.com"
                    disabled={isSubmitting}
                    className={`form-input ${validationErrors.email ? 'input-error' : ''}`}
                    aria-invalid={Boolean(validationErrors.email)}
                    aria-describedby={validationErrors.email ? 'email-error' : undefined}
                    required
                  />
                  {validationErrors.email && (
                    <span id="email-error" className="field-error-text">
                      {validationErrors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject <span className="required-star">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity / Project Inquiry"
                  disabled={isSubmitting}
                  className={`form-input ${validationErrors.subject ? 'input-error' : ''}`}
                  aria-invalid={Boolean(validationErrors.subject)}
                  aria-describedby={validationErrors.subject ? 'subject-error' : undefined}
                  required
                />
                {validationErrors.subject && (
                  <span id="subject-error" className="field-error-text">
                    {validationErrors.subject}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Surya, I reviewed your portfolio projects and would love to discuss an opportunity..."
                  disabled={isSubmitting}
                  className={`form-textarea ${validationErrors.message ? 'input-error' : ''}`}
                  aria-invalid={Boolean(validationErrors.message)}
                  aria-describedby={validationErrors.message ? 'message-error' : undefined}
                  required
                />
                {validationErrors.message && (
                  <span id="message-error" className="field-error-text">
                    {validationErrors.message}
                  </span>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg contact-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="spin-loader" />
                    <span>Transmitting to Cloud...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
