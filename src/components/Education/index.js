import EducationCard from '../EducationCard'
import './index.css'

const Education = () => {
  return (
    <div className="education-style">
      <h1 className="edu-head">My Education</h1> 
      <div className='main-edu'>
        <EducationCard/>
        <EducationCard/>
        <EducationCard/>
        <EducationCard/>
      </div>
      
    </div>
  )
}

export default Education
