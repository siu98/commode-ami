import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MovieSection from './MovieSection';
import { boxOfficeMovies, netflixTop10Movies } from './MovieData';
import Dashboard from './DashBoard';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import MovieDetail from './MovieDetail';

function App() {
  const scrollLeft = (sectionId) => {
    const container = document.getElementById(sectionId).parentElement;
    container.scrollLeft -= 300;
    updateScrollButtons(sectionId);
  };

  const scrollRight = (sectionId) => {
    const container = document.getElementById(sectionId).parentElement;
    container.scrollLeft += 300;
    updateScrollButtons(sectionId);
  };

  const updateScrollButtons = (sectionId) => {
    const container = document.getElementById(sectionId).parentElement;
    const leftButton = container.querySelector('.scroll-button.left');
    const rightButton = container.querySelector('.scroll-button.right');

    if (leftButton) {
        leftButton.style.display = container.scrollLeft > 0 ? 'block' : 'none';
    }

    if (rightButton) {
        rightButton.style.display = container.scrollLeft + container.clientWidth < container.scrollWidth ? 'block' : 'none';
    }
  };

  const handleScroll = (sectionId) => {
    updateScrollButtons(sectionId);
  };

  // const handleLogin = async (id, password) => {
  //   // Mocking a backend response
  //   if (id === 'testuser' && password === 'testpassword') {
  //     console.log('로그인 성공');
  //     setIsLoggedIn(true);
  //   } else {
  //     console.log('로그인 실패: 아이디 또는 비밀번호가 올바르지 않습니다.');
  //   }
  // };

  return (
    <Router>
      <div className="app">
        <header>
          <div className="logo">
            <h1>commode ami</h1>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="검색어를 입력하세요"></input>
          </div>
          <div className="auth-buttons">
            <Link to="/login">
              <button>로그인</button>
            </Link>
            <Link to="/signup">
              <button>회원가입</button>
            </Link>
          </div>
        </header>
        <Routes>
          <Route path="/" element={
            <>
              <MovieSection 
                title="박스오피스 순위" 
                movies={boxOfficeMovies} 
                scrollable 
                sectionId="box-office"
                scrollLeft={scrollLeft}
                scrollRight={scrollRight}
                handleScroll={handleScroll}
              />
              <MovieSection 
                title="넷플릭스 영화 top10" 
                movies={netflixTop10Movies}
                scrollable
                sectionId="netflix-top10"
                scrollLeft={scrollLeft}
                scrollRight={scrollRight}
                handleScroll={handleScroll}
              />
            </>
          } />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          {/* <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} /> */}
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
