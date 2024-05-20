import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MovieSection from './MovieSection';
import FilterSection from './FilterSection';
import MovieDetail from './MovieDetail';
import MyPage from './MyPage';
import { boxOfficeMovies, netflixTop10Movies, highRatedMovies, recommendedMovies } from './MovieData';

function Dashboard() {
  const [birthYearOptions, setBirthYearOptions] = useState([]);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedBirthYear, setSelectedBirthYear] = useState(null);
  const [filterVisible, setFilterVisible] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(recommendedMovies);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const years = [];
    for (let year = currentYear; year >= startYear; year--) {
      years.push(year);
    }
    setBirthYearOptions(years);
  }, []);

  useEffect(() => {
    updateScrollButtons('netflix-top10');
    updateScrollButtons('box-office');
  }, []);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const applyFilter = () => {
    const filtered = recommendedMovies.filter(movie => {
      if (selectedGender && selectedBirthYear) {
        return true;
      }
      return true;
    });
    setFilteredMovies(filtered);
    console.log(`Selected Gender: ${selectedGender}, Birth Year: ${selectedBirthYear}`);
  };

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

  return (
    <div className="dashboard">
      <header>
        <div className="logo">
          <h1>commode ami</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="검색어를 입력하세요" />
        </div>
        <div className="profile-pic">
            <Link to="/mypage">
              <button className="profile-button">
                <img src="/profile-pic.png" alt="Profile Picture" />
              </button>
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
            <MovieSection title="평균 별점이 높은 영화" movies={highRatedMovies} />
            <section className="movie-section">
              <h2>
                성별 및 연령 별 영화 추천
                <button className="filter-button" onClick={toggleFilter}>필터</button>
              </h2>
              {filterVisible && (
                <FilterSection 
                  birthYearOptions={birthYearOptions} 
                  selectedGender={selectedGender} 
                  setSelectedGender={setSelectedGender}
                  setSelectedBirthYear={setSelectedBirthYear}
                  applyFilter={applyFilter}
                />
              )}
              <div className="movie-list" id="recommendations">
                {filteredMovies.map((movie, index) => (
                  <div className="movie-card" key={index}>
                    <img src={movie.imgSrc} alt={movie.title} />
                    <p>{movie.title} ({movie.year})</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        } />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
