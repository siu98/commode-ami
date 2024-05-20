import React from 'react';
import './style.css'

function SignupForm({ toggleForm }) {
  return (
    <div id="sign-up-container">
      <h3>회원 가입</h3>
      <h3>Commode Amy</h3>
      <form>
        <label htmlFor="name">이름</label>
        <input type="text" name="name" id="name" placeholder="홍길동" />
        
        <label htmlFor="birth">생년월일</label>
        <input type="text" name="birth" id="birth" placeholder="YYYYMMDD" />
        
        <label htmlFor="id">아이디</label>
        <input type="text" name="id" id="id" placeholder="아이디" />
        
        <label htmlFor="password">비밀번호</label>
        <input type="password" name="password" id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" />
        
        <label htmlFor="nickname">닉네임</label>
        <input type="text" name="nickname" id="nickname" placeholder="닉네임 입력" />
        
        <div id="form-controls">
          <button type="submit">회원 가입</button>
          <button type="button" onClick={toggleForm}>로그인</button>
        </div>
        
        <input type="checkbox" name="terms" id="terms" />
        <label htmlFor="terms">
          I agree to the <a href="#" className="termsLink">Terms of service</a> and <a href="#" className="termsLink">Privacy Policy</a>.
        </label>
      </form>
    </div>
  );
}

export default SignupForm;
