import React from 'react';
import { Overlay, UserModalContainer } from './UserModal.styled';
import { default as x } from '../../assets/images/x.svg';

interface UserModalProps {
  isUser: boolean;
  toggleUser: () => void;
}
const UserModal: React.FC<UserModalProps> = ({ isUser, toggleUser }) => {
  return (
    <>
      <Overlay />
      <UserModalContainer>
        <div className="nav-icon">
          <img src={x} alt="x" onClick={toggleUser} />
        </div>
        <div className="auth-header">
          <h1>Sign in</h1>
          <h3>To continue the order, please sign in</h3>
        </div>
        <form>
          <label>Email adress</label>
          <input type="email" placeholder="name@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button className="login-btn">Login</button>
          <p>Forget password?</p>

          <div className="separator">
            <div className="lines"></div>
            <h1>or</h1>
            <div className="lines"></div>
          </div>
          <button className="signup-btn">Sign up</button>
        </form>
      </UserModalContainer>
    </>
  );
};

export default UserModal;
