import React from 'react'
import { Link } from 'react-router-dom'
import TwitterImg from '../../Public/twitter.png'
import FacebookImg from '../../Public/facebook.png'
import DiscordImg from '../../Public/discord.png'

const Footer = () => {
  return (

    <div className='grid w-full h-72 divide-x-2 overflow-hidden bg-sky-800'>
      <div className='sp-10 gap-10 text-center'>
        <h1 className='text-[64px] font-serif'>Get in touch</h1>
        <div className='inline-flex text-2xl gap-10 my-10'>
          <Link to=''><img className='h-24 w-24' src={FacebookImg} alt={FacebookImg}></img></Link>
          <Link to=''><img className='h-24 w-24' src={TwitterImg} alt={TwitterImg}></img></Link>
          <Link to=''><img className='h-24 w-24' src={DiscordImg} alt={DiscordImg}></img></Link>
        </div>
      </div>  

      <div className='p-10 text-center'>
        <h1 className='text-4xl font-serif'>About-Us</h1>
      </div>


    </div>






  )
}

export default Footer;