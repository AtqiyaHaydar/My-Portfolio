import React from 'react'

const Blackhole = () => {
  return (
    <video
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-[-310px]  h-full w-full left-0 -z-20 object-cover "
    >
      <source src="/blackhole.webm" type="video/webm" />
    </video>
  )
}

export default Blackhole