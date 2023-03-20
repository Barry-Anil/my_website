"use client"
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

function ContactMe() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    window.location.href = `mailto:annenex.11@gmail?subject=${form.subject}&body=Hi, my name is ${form.name}. ${form.message} ${form.email}`
  }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Contact
      </h3>
      <div className="flex flex-col space-y-5  mt-14">
        <h4 className="text-4xl font-semibold text-center mb-8">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>

        <div>
          <div className="flex items-center space-x-5 justify-center mb-4">
            <PhoneIcon className="text-[#f7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123456789</p>
          </div>

          <div className="flex items-center space-x-5 justify-center mb-4">
            <EnvelopeIcon className="text-[#f7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">react.team@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5 justify-center mb-4">
            <MapPinIcon className="text-[#f7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123 Dev Lane</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
              <input {...register('name')} placeholder="Name" className="contactInput" type='text'/>
              <input {...register('email')} placeholder="Email" className="contactInput" type='email'/>
            </div>
            <input {...register('subject')} placeholder="Subject" className="contactInput" type='text'/>
            <textarea {...register('message')} placeholder="message"  className="contactInput" type='text'/>
            <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
