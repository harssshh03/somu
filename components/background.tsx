import React from 'react'

const Background = () => {
  return (
    <div className="-z-20  h-full w-full bg-white fixed ">
    <div
        className="absolute inset-0 z-0"
        style={{
        backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
        `,
        backgroundSize: "100% 100%",
        }}
        />  
        
 </div>
  )
}

export default Background