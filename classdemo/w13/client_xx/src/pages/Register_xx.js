import { useState, useEffect } from 'react';
import { Logo_xx, FormRow_xx } from '../components';
import Wrapper from '../assets/wrappers/Register_xx';

import { useAppContext } from '../context/appContext_xx';
import Alert_xx from '../components/Alert_xx';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

const Register_xx = () => {
  const [values, setValues] = useState(initialState);

  const { showAlert, displayAlert} = useAppContext();

  const handleChange = (e) => {
    console.log('e.target', e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('e.target', e.target);
   const { email, password } = values;
   if(!email || !password) {
     displayAlert();
     return;
   }
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={onSubmit}>
        <Logo_xx />
        <h3>Register</h3>
        {showAlert && <Alert_xx /> }
        {/* name input */}
        <FormRow_xx
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
          className='form-input'
        />
        {/* email input */}
        <FormRow_xx
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          className='form-input'
        />

        {/* password input */}
        <FormRow_xx
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          className='form-input'
        />

        <button className='btn btn-block' type='submit'>
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register_xx;
