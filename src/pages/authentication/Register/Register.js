import React from 'react';
import { useForm } from 'react-hook-form';
import brand from '../../../images/logo/logo1.png'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {BsGoogle} from 'react-icons/bs'


const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className='login-main'>
      <div className="login text-start">
        <div className="brand-logo text-center d-flex align-items-center">
            <img width='84px' className='mb-4' src={brand} alt="" />
            <h2 className='text-uppercase fw-bold text-white'>Fitness-club</h2>
        </div>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className='my-3'>
          <input className={`input-field ${errors.Name && 'invalid'}`} placeholder='Name' 
          {...register("Name",
          {required:'Name is Require.'})}
          type='text'
          onKeyUp={()=>trigger('Name')}
           />
          {errors.Name && <small className='text-danger'>{errors.Name.message}</small>}
          </div>

          <div className='my-3'>
            <input className={`input-field ${errors.email && 'invalid'}`} placeholder='Email' {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"
                }
              })}
              type="email"
              onKeyUp={()=>trigger('email')}
              />
            {errors.email && <small className='text-danger'>{errors.email.message}</small>}
          </div>

          <div className='my-3'>
          <input className={`input-field ${errors.password && 'invalid'}`} {...register("password", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Min length is 5"
            }
          })}
          placeholder='Password'
          type="password"
          onKeyUp={()=>trigger('password')} 
          />
          {errors.password && <small className='text-danger'>{errors.password.message}</small>}
          </div>
         
          <div className='my-3'>
          <input className={`input-field ${errors.RePassword && 'invalid'}`} placeholder='Re-Password' {...register("RePassword", {
              required: "Please enter re-password",
              minLength: {
                value: 5,
                message: "Min length is 5"
              }
            })}
            type="password" 
            onKeyUp={()=>trigger('RePassword')}
            />
          {errors.RePassword && <small className='text-danger'>{errors.RePassword.message}</small>}
          </div>          
          <Button className='input-field-btn bg-danger' type="submit">Register</Button>
        </form>
        <Link className='text-white text-center' to='/signIn'>Alredy have an acount?</Link>

        <div className='text-white my-3'>
          <h2 className='text-center'>Or</h2>
          <span>Login with: </span>
          <Button className='ms-2 px-4' variant='danger'>
              <BsGoogle ></BsGoogle>
          </Button>
      </div>
      </div>
    </div>
  );
};

export default Register;