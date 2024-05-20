import React from 'react';
import './style.css'

function LoginForm({ toggleForm, toggleRecoveryID, toggleRecoveryPW, handleLogin }) {
  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div id="sign-in-container">
      <h3>Welcome Back</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="id">아이디</label>
        <input type="text" name="id" id="id" placeholder="아이디" />
        
        <label htmlFor="password">비밀번호</label>
        <input type="password" name="password" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
        
        <div id="form-controls">
          <button type="submit">로그인</button>
          <button type="button" onClick={toggleForm}>회원가입</button>
        </div>
        
        <div id="recovery">
          <button type="button" onClick={toggleRecoveryID}>아이디 찾기</button>
          <button type="button" onClick={toggleRecoveryPW}>비밀번호 찾기</button>
        </div>
        
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">
          I agree to the <a href="#" className="termsLink">Terms of service</a> and <a href="#" className="termsLink">Privacy Policy</a>.
        </label>
      </form>
    </div>
  );
}

export default LoginForm;
