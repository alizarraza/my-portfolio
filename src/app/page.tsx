import { HeroSection }       from '@/components/sections/HeroSection'
import { HorizontalScroll }  from '@/components/sections/HorizontalScroll'
import { AboutSection }      from '@/components/sections/AboutSection'
import { SkillsSection }     from '@/components/sections/SkillsSection'
import { ProjectsSection }   from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ContactSection }    from '@/components/sections/ContactSection'
import { getProjects, getSkills, getExperience } from '@/lib/queries'

export const revalidate = 60

export default async function HomePage() {
  // Fetch all data server-side — zero client waterfalls
  const [projects, skills, experience] = await Promise.all([
    getProjects(),
    getSkills(),
    getExperience(),
  ])

  return (
    <>
      <HeroSection />
      <HorizontalScroll>
        <AboutSection />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
      </HorizontalScroll>
      <ExperienceSection experience={experience} />
      <ContactSection />
    </>
  )
}
