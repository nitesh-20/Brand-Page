import React from 'react'

const Hero = () => {
  return (
        <main className='hero container'>
            <div className='hero-content'>
               <h1>YOUR FEET DESERVE THE BEST</h1> 
               <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
                SHPOES. YOUT FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
               </p>
               <div className='hero-btn'>
                <button className='btn'>Shop Now</button>
                <button className='btn'>Category</button>
               </div>
               <div className='shooping'>
                {/* <p>Also Available On</p> */}
                <div className="brand-icons">
                    <img src="/shop.png" alt="" />
                </div>
               </div>
            </div>
            <div className='hero-image'>
                <img src="https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718064000&semt=ais_user" alt="" />
            </div>
        </main>
  )
}

export default Hero