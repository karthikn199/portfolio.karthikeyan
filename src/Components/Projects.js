import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import ElevateImage from '../images/elevate.png';
import WigglesImage from '../images/WigglesImage.png';
import TeckCrackImage from '../images/techcrack.png'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Stealthcam" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Efit-WMS" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Efit-Ebooks" />
        <ProjectBox projectPhoto={ElevateImage} projectName="elEVAte" />
        <ProjectBox projectPhoto={TeckCrackImage} projectName="TechCrack" />
      </div>

    </div>
  )
}

export default Projects