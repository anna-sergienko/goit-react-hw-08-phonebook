import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operationsAuth';
import { LoginFormWrap, LoginFormLabel, LoginFormButton, LoginFormInput } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormWrap onSubmit={handleSubmit} autoComplete="off">
      <LoginFormLabel>
        Email
        <LoginFormInput type="email" name="email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required/> 
      </LoginFormLabel>

      <LoginFormLabel>
        Password
        <LoginFormInput type="password" name="password" pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$" required/>
      </LoginFormLabel>
      <LoginFormButton type="submit">Log In</LoginFormButton>
    </LoginFormWrap>
  );
};
