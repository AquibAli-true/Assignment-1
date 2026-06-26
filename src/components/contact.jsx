import React from 'react'
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    setError,    
    formState: { errors},
  } = useForm();

  const onSubmit=()=>{
    console.log("Form Submitted");
  }


  return (
    <div className='text-[#F8F9FA]  flex flex-col gap-3   sm:w-[50%] w-[75%] relative mt-20 mx-auto '>
      <div className='text-2xl'>Contact Us</div>
        <form action="" className='flex rounded-xl p-3 bg-zinc-800 flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>

          <div className='flex gap-4'>
            <span>Name:</span>
            <input className='focus:outline-none w-[90%]' placeholder='username' {...register("username", { required: {value: true, message: "This field is required"}, minLength: {value: 3, message: "Min length is 3"}, maxLength: {value: 15, message: "Max length is 15"} })} type="text"   />
          </div>
          {errors.username && <div className='text-red-500'>{errors.username.message}</div>}

          <div className='flex gap-5'>
            <span>Email:</span>
            <input className='focus:outline-none w-[90%]' placeholder='email'  {...register("email", {required: {value: true, message: "This field is required"},})} type="email"/>
          </div>
          {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
          <div className='flex gap-3'>
            <span>Subject:</span>
            <input className='focus:outline-none w-[90%]' placeholder='subject'  {...register("subject", {required: {value: true, message: "This field is required"},})} type="text"/>         
          </div>
          {errors.subject && <div className='text-red-500'>{errors.subject.message}</div>}
          <div className='flex gap-1'>
            <span>Message:</span>
            <input className='focus:outline-none w-[90%]' placeholder='message'  {...register("message", {required: {value: true, message: "This field is required"},})} type="text"/>
          </div>
          {errors.message && <div className='text-red-500'>{errors.email.message}</div>}
       
          
          <div className='flex justify-center '><button className='bg-green-400 w-[30%] sm:w-[20%] rounded-4xl cursor-pointer flex items-center justify-center font-semibold' onClick={onSubmit} type='submit'>Submit</button></div>

        </form>
    </div>
  )
}

export default Contact