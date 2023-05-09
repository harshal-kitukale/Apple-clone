import React from 'react'
import './Styles/bannerComp.css'
export const BannerComp = () => {
  // console.log(images.iPhone)
  return (
    <div id='bannerDiv'>
      <div id='macBanner'>
        <div className='headings'>
                  <h2 style={{color:"white"}}>MacBook Pro</h2>
        <h3 style={{color:"white"}}>Mover.Maker.Boundary breaker</h3>
        </div>

        <div className='banner_links'>
    <a href="" style={{color:"black"}}>Learn More</a>
    <a href="" style={{color:"black"}}>Buy Now</a>
</div>
      </div>
      <div id='iWatchBanner' style={{backgroundColor:"rgb(245, 245, 247)"}}>
        <div className='headings' style={{paddingTop:"10px"}}>
                  <h2 style={{color:"black"}}>Apple Watch Ultra </h2>
        <h3 style={{color:"black"}}>Adventure Awaits</h3>
        </div>

        <div className='banner_links'>
    <a href="" style={{color:"black"}}>Learn More</a>
    <a href="" style={{color:"black"}}>Buy Now</a>
</div>
      </div>
      <div id='iPhoneBanner' >
        <div className='headings'>
                  <h2 style={{color:"white"}}>iPhone 14 Pro</h2>
        <h3 style={{color:"white"}}>Pro.Beyond</h3>
        </div>

        <div className='banner_links'>
    <a href="" style={{color:"black"}}>Learn More</a>
    <a href="" style={{color:"black"}}>Buy Now</a>
</div>
      </div>

    
   
      <div id='iPadBanner'>
        <div className='headings'>
                  <h2 style={{color:"black",marginLeft:"50%",marginTop:"300px"}}>iPad Pro</h2>
        <h3 style={{color:"black",marginLeft:"50%"}}>Charged by M2 chipset</h3>
        </div>

        <div className='banner_links'style={{marginLeft:"50%"}}>
    <a href="" style={{color:"black"}}>Learn More</a>
    <a href="" style={{color:"black"}}>Buy Now</a>
</div>
      </div>
    </div>
  )
}


