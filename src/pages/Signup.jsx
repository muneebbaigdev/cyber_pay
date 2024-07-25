import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


const Signup = () => {


  const navigate = useNavigate()
  const form = useRef();
  const [otp,setOtp] = useState(Math.round(Math.random()*10000))
  const [isOtpSent,setIsOtpSent] = useState(false)
  const [formData,setFormData] = useState({
    username:"",
    email:"",
    password:"",
    password2:""
  })
  const [cotp,setCotp] = useState("")
  const setOTP = (e)=>{
    e.preventDefault()
    setCotp(e.target.value)
  }
  const checkOtp = async (e)=>{
    e.preventDefault();
    if(cotp === otp.toString()){
      let {username,email,password} = formData
      let newUser = await fetch('http://localhost:8080/authentication/signup',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,email,password
        })
      })
      let response =await newUser.json()
      if(response.success){
        localStorage.setItem('token',response.token)
        alert(response.message)
        navigate('/')

      }else if(!response.success){
        alert(response.message)
        navigate('/signup')
      }
    }
  }
  const onChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const sendEmail = (e) => {
    e.preventDefault();
    if(formData.password === formData.password2){


    emailjs.sendForm('service_5tz32o5', 'template_aqwx4lk', form.current, {
        publicKey: 'MZxe0G_wOZ0iEgOhb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsOtpSent(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );


    }



  };

  return (
<>

{!isOtpSent ? (
    <form ref={form} onSubmit={sendEmail} className='h-3/5 w-3/4 border border-slate-200 shadow-lg text-center pt-20'>
    <img src="/logo.png" className="h-24 mx-auto -mt-10" alt="logo" />
    <input onChange={onChange} value={formData.username} className='w-3/5 p-3 m-3 border border-slate-200 shadow-md' placeholder='Your Name' type="text" name='username' />
    <input onChange={onChange} value={formData.email} className='w-3/5 p-3 m-3 border border-slate-200 shadow-md' placeholder='Your Email' type="email" name='email' />
    <input onChange={onChange} value={formData.password} className='w-3/5 p-3 m-3 border border-slate-200 shadow-md' placeholder='Password' type="password" name='password' />
    <input onChange={onChange} value={formData.password2} className='w-3/5 p-3 m-3 border border-slate-200 shadow-md' placeholder='Confirm Password' type="password" name='password2' />
    {formData.password === formData.password2 ? (<p className='text-green-400'>Password Match</p>):(<p className='text-red-500'>Password Don't Match</p>)}
    <input type="text" className='hidden' value={otp} onChange={onChange} name='otp' />
    <button className='w-3/5 p-3 m-3 border border-slate-200 shadow-md bg-yellow-500' type='submit'>Sign Up</button>
    </form>
    ):(
      <form onSubmit={checkOtp} className='h-3/5 w-3/4 border border-slate-200 shadow-lg text-center pt-20'>
      <img src="/logo.png" className="h-24 mx-auto -mt-10" alt="logo" />
      <input value={cotp} onChange={setOTP} className='w-3/5 p-3 m-3 border border-slate-200 shadow-md' placeholder='Type OTP Here' type="text" name='cotp' />
      <button className='w-3/5 p-3 m-3 border border-slate-200 shadow-md bg-yellow-500' type='submit'>Verify</button>
      </form>
    )}

  </>
  )
}

export default Signup
