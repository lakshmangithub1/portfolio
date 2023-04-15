import './index.css'
import Fade from 'react-reveal/Fade';

const MainHead = () => {
  return (
    <div className='mainhead-card'> 
      <Fade top>
        <p className='first-line'>Hello, I'm</p>
        <h1 className='second-line'>Lakshman Dasyam</h1> 
        <p className='third-line'>AND THIS IS MY POTFOLIO</p>
      </Fade>
    </div>
  )
}

export default MainHead
