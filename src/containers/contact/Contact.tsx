import React from 'react';
import { useForm } from 'react-hook-form';

const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => console.log(data);
console.log(errors);

const Contact = () => (
  <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <textarea {...register("Message", {required: true, maxLength: 500})} />

      <input type="submit" />
    </form>
    </>
);

export default Contact;