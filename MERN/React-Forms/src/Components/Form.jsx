import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const delay = (d)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },d*2000)
    })
  }
  const onSubmit = async (data) => {
    try {
      console.log("Form data:", data); // Log form data before sending request
      let res = await fetch('http://localhost:3000/', { 
        method: "POST", 
        headers: {
          'Content-Type': 'application/json' // Ensure correct content type
        },
        body: JSON.stringify(data) 
      });
      if (!res.ok) {
        throw new Error('Failed to submit form');
      }
      let response = await res.text();
      console.log("Response:", response); // Log server response
    } catch (error) {
      console.error('An error occurred:', error);
      // Handle error feedback to the user, e.g., display an error message
    }
  }
  
  
  return (
    <>
        {/* {isSubmitting && <div>Loading...</div>} */}
      <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="username"
          {...register("username", {
            required: { value: true, message: "This field is required" },
            minLength: { value: 3, message: "Minimum Length is 3" },
            maxLength: { value: 8, message: "Maximum value is 8" },
          })}
          type="text"
        />
        {errors.username && <div>{errors.username.message}</div>}
        <br />
        {/* <input type="email" name="" id="" /> */}
        <input
          placeholder="password"
          {...register("password")}
          type="password"
        />
        <br />
        <input disabled={isSubmitting} type="submit" value="Submit" />
      </form>
    </div>
    </>
  );
};

export default Form;
