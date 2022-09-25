import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm"
import './auth.css'


export const AuthPage = () => {
  return (
    <div className='container login-container'>
      <div className='row'>
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
};
