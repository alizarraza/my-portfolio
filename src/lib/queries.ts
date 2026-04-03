import { client } from './sanity'
import type { Project, Experience, Skill } from '@/types'

// ─── Projects ────────────────────────────────────────────────────────────────

export const projectsQuery = `*[_type == "project"] | order(order asc) {
  _id, title, slug, order, year, category,
  description, longDesc, tags, coverImage, images,
  videoUrl, liveUrl, githubUrl, featured
}`

export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(order asc) {
  _id, title, slug, order, year, category,
  description, tags, coverImage, liveUrl, githubUrl
}`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id, title, slug, order, year, category,
  description, longDesc, tags, coverImage, images,
  videoUrl, liveUrl, githubUrl, featured
}`

// ─── Experience ───────────────────────────────────────────────────────────────

export const experienceQuery = `*[_type == "experience"] | order(order asc) {
  _id, role, company, period, current, desc, tags
}`

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skillsQuery = `*[_type == "skill"] | order(order asc) {
  _id, name, category
}`

// ─── Fetchers ────────────────────────────────────────────────────────────────

export async function getProjects(): Promise<Project[]> {
  return client.fetch(projectsQuery, {}, { next: { revalidate: 60 } })
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return client.fetch(featuredProjectsQuery, {}, { next: { revalidate: 60 } })
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(projectBySlugQuery, { slug }, { next: { revalidate: 60 } })
}

export async function getExperience(): Promise<Experience[]> {
  return client.fetch(experienceQuery, {}, { next: { revalidate: 3600 } })
}

export async function getSkills(): Promise<Skill[]> {
  return client.fetch(skillsQuery, {}, { next: { revalidate: 3600 } })
}
