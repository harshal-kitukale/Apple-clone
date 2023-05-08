import React from 'react'
import "./Styles/bottomNav.css"
export const BottomNav = ({data}) => {
    console.log(data.iPhone)
  return (
    <div id='flexGrp'>
        {data.Watch.map(el=>
     <div key={el.title} className='card'>
      <img src={el.img} alt=""/>
      <p>{el.title}</p>
     </div>
)
 } 

    </div>
  )
}
