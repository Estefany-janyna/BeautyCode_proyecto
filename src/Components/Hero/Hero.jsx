import React from 'react'
import './Hero.css'
import img1 from '../../assets/clapping_13106954.png'
import img2 from '../../assets/right-arrow_10024749.png'
import img3 from '../../assets/img1-1.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-hand-icon">
            <p>new</p>
            <img src={img1} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-lastest-btn">
          <div> Latest Collection</div>
          <img src={img2} alt="" width='20px'/>
        </div>
      </div>
      <div className="hero-right">
        <img src={img3} alt=""  />
        <p></p>
      </div>
    </div>
  )
}

export default Hero