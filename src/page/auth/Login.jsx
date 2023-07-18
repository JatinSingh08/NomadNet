import React from 'react'
import { LoginForm } from '../../components'

const Login = () => {
  const bgUrl = 'https://res.cloudinary.com/ddldfhcup/video/upload/v1689624643/video_1080p_3_lryvdp.mp4';
  
  return (
    <div className='absolute top-0 left-0 w-[100%] h-[100%] overflow-hidden'>
      <video
      className='object-cover w-[100%] h-[100%] z-[-100]'
      autoPlay
      loop
      muted
      playsInline
      >
        <source src={bgUrl} type='video/mp4' />
      </video>
      <div
      style={{
        position: 'absolute',
        top: '50%',
        right: '50%',
        transform: 'translate(-50%, -50%)'
      }}
      >
        <LoginForm />
        <div>
          NomadNet Website
        </div>

      </div>
    </div>
  )
}

export default Login
