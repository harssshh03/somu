import BackNavbar from '@/components/back-navbar'
import ProjectsList from '@/components/projects-comp'
import ProjectsFooter from '@/components/projects-footer'
import React from 'react'

const Projects = () => {
  return (
    <div>
        <BackNavbar/>
        <ProjectsList/>
        <ProjectsFooter/>
    </div>
  )
}

export default Projects