import React, {useState, useEffect} from 'react';
import './MyPage.css';

const moviesData = [
    { title: '로보 드림', evaluation: 1, rating: 4.0, imgSrc: '/image1.jpg' },
  { title: '범죄도시 4', evaluation: 2, rating: 3.5, imgSrc: '/image2.jpg' },
  // 더 많은 영화 데이터를 추가하세요
];

const MyPage = () => {
    const [currentSection, setCurrentSection] = useState('evaluation');
    const [sortedMovies, setSortedMovies] = useState([]);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = () => {
        setSortedMovies(moviesData);
    };
    
    const showSection = (section) => {
        setCurrentSection(section);
    };
    
    const sortMovies = (criteria) => {
        const sorted = [...sortedMovies].sort((a, b) => {
            if (criteria === 'evaluation') {
                return a.evaluation - b.evaluation;
          } else if (criteria === 'rating') {
            return b.rating - a.rating;
          }
          return 0;
        });
        setSortedMovies(sorted);
    };
    return (
        <div className="profile-dashboard">
          <div className="profile-header">
            <img src="/profile-pic.png" alt="Profile Picture" className="profile-pic" />
            <div className="profile-info">
              <p>이름 : 김짱구</p>
              <p>닉네임 : 짱구 처돌이</p>
              <p>아이디 : zzanggu</p>
            </div>
            <div className="profile-settings-icon">
              <img src="/settings-icon.png" alt="Settings" />
            </div>
          </div>
          <div className="profile-stats">
            <button className="profile-stat-item" onClick={() => showSection('evaluation')}>
              <p>평가</p>
              <p>700</p>
            </button>
            <button className="profile-stat-item" onClick={() => showSection('reviews')}>
              <p>리뷰</p>
              <p>10</p>
            </button>
            <button className="profile-stat-item" onClick={() => showSection('likes')}>
              <p>좋아요</p>
              <p>5</p>
            </button>
          </div>
          <div className="profile-content">
            {currentSection === 'evaluation' && (
              <div id="evaluation-section" className="profile-content-section">
                <h3>평가한 영화</h3>
                <div className="profile-sort-buttons">
                  <button onClick={() => sortMovies('evaluation')}>평가순</button>
                  <button onClick={() => sortMovies('rating')}>별점순</button>
                </div>
                <div id="movie-list" className="profile-movie-list">
                  {sortedMovies.map((movie, index) => (
                    <div key={index} className="profile-movie-item" data-evaluation={movie.evaluation} data-rating={movie.rating}>
                      <img src={movie.imgSrc} alt={movie.title} />
                      <p>{`${movie.title} - 별점: ${movie.rating}`}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {currentSection === 'reviews' && (
              <div id="reviews-section" className="profile-content-section">
                <p>리뷰 섹션</p>
              </div>
            )}
            {currentSection === 'likes' && (
              <div id="likes-section" className="profile-content-section">
                <p>좋아요 섹션</p>
              </div>
            )}
          </div>
          <div className="profile-analysis">
            <div className="profile-analysis-item">
              <h3>별점 분석</h3>
              <img src="/rating-analysis.png" alt="Rating Analysis" />
            </div>
            <div className="profile-analysis-item">
              <h3>취향 분석</h3>
              <div className="profile-preference-analysis"></div>
            </div>
          </div>
        </div>
      );
    };
    
export default MyPage;