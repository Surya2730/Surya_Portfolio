/**
 * Home.jsx — Main Landing Page
 *
 * Responsibilities:
 *   - Serves as the index page rendered inside MainLayout's <Outlet />
 *   - Orchestrates all portfolio sections in logical progression:
 *       1. Hero (Interactive 3D + CTA)
 *       2. About (Education, CGPA, engineering approach)
 *       3. Skills (Categorized technical toolkit)
 *       4. Projects (Interactive cards + system architecture deep dives)
 *       5. Experience & Education Timeline
 *       6. Achievements & Honors
 *       7. Contact (Direct channels + MongoDB Atlas-backed contact dispatch)
 */

import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import SkillsSection from '../sections/SkillsSection'
import ProjectsSection from '../sections/ProjectsSection'
import ExperienceSection from '../sections/ExperienceSection'
import AchievementsSection from '../sections/AchievementsSection'
import ContactSection from '../sections/ContactSection'

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  )
}

