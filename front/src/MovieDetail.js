
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import './MovieDetail.css';
// import { boxOfficeMovies, netflixTop10Movies, highRatedMovies, recommendedMovies } from './MovieData';

// function MovieDetail() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [showReviewPopup, setShowReviewPopup] = useState(false);
//   const [showDatePopup, setShowDatePopup] = useState(false);
//   const [showAllReviewsPopup, setShowAllReviewsPopup] = useState(false);
//   const [selectedDate, setSelectedDate] = useState('');
//   const [newReview, setNewReview] = useState('');
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const allMovies = [...boxOfficeMovies, ...netflixTop10Movies, ...highRatedMovies, ...recommendedMovies];
//     const movie = allMovies.find(movie => movie.id === parseInt(id));
//     if (movie) {
//       setMovie(movie);
//       setReviews(movie.reviews || []);
//     }
//   }, [id]);

//   const handleReviewClick = () => {
//     setShowReviewPopup(true);
//   };

//   const handleDateClick = () => {
//     setShowDatePopup(true);
//   };

//   const handleMoreReviewsClick = () => {
//     setShowAllReviewsPopup(true);
//   };

//   const handleSaveDate = () => {
//     if (selectedDate) {
//       alert(`선택한 날짜: ${selectedDate}`);
//       setShowDatePopup(false);
//     } else {
//       alert('날짜를 선택하세요.');
//     }
//   };

//   const handleReviewSubmit = () => {
//     if (newReview) {
//       const updatedReviews = [
//         ...reviews,
//         {
//           username: '새 사용자',
//           userImage: 'path/to/new-user.jpg',
//           rating: 5,
//           content: newReview,
//           likes: 0,
//         },
//       ];
//       setReviews(updatedReviews);
//       setShowReviewPopup(false);
//       setNewReview('');
//     } else {
//       alert('리뷰를 입력하세요.');
//     }
//   };

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="movie-detail">
//       <main>
//         <section className="movie-details">
//           <div className="movie-header">
//             <h1>{movie.title}</h1>
//             <p>{movie.year} {movie.genre} {movie.country}</p>
//             <p>{movie.duration} {movie.rating}</p>
//             <p>예매율 {movie.reservationRate} 누적 관객 {movie.audience}</p>
//           </div>
//           <div className="movie-poster">
//             <img src={movie.posterUrl} alt={movie.title} />
//           </div>
//           <div className="movie-rating">
//             <div className="stars">
//               {movie.stars}
//             </div>
//             <div className="rating-score">
//               <div className="score-item">
//                 <span className="expected-score">{movie.expectedScore}</span>
//                 <span className="score-label">예상 별점</span>
//               </div>
//               <div className="score-item">
//                 <span className="average-score">{movie.averageScore}</span>
//                 <span className="score-label">평균 별점</span>
//               </div>
//             </div>
//           </div>
//           <div className="movie-buttons">
//             <button onClick={handleReviewClick}>리뷰</button>
//             <button onClick={handleDateClick}>본 날짜 추가</button>
//           </div>
//         </section>

//         <section className="movie-cast">
//           <h2>제작/출연</h2>
//           <div className="cast-list">
//             {movie.cast.map(cast => (
//               <div className="cast-item" key={cast.name}>
//                 <img src={cast.image} alt={cast.name} />
//                 <p>{cast.name}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="movie-reviews">
//           <h2>리뷰 {reviews.length}</h2>
//           <div className="review-list">
//             {reviews.slice(0, 5).map(review => (
//               <div className="review-item" key={review.username}>
//                 <div className="review-header">
//                   <img src={review.userImage} alt={review.username} className="review-user-pic" />
//                   <span className="review-username">{review.username}</span>
//                   <span className="review-rating">⭐{review.rating}</span>
//                 </div>
//                 <p>{review.content}</p>
//                 <p className="review-likes">👍{review.likes}</p>
//               </div>
//             ))}
//           </div>
//           <button className="more-button" onClick={handleMoreReviewsClick}>더보기</button>
//         </section>

//         <section className="movie-stills">
//           <h2>스틸컷 {movie.stills.length}</h2>
//           <div className="still-list">
//             {movie.stills.map((still, index) => (
//               <img src={still} alt={`Still ${index + 1}`} key={index} />
//             ))}
//           </div>
//         </section>

//         <section className="movie-trailers">
//           <h2>트레일러 {movie.trailers.length}</h2>
//           <div className="trailer-list">
//             {movie.trailers.map((trailer, index) => (
//               <div className="trailer-item" key={index}>{trailer}</div>
//             ))}
//           </div>
//         </section>

//         <section className="movie-review-videos">
//           <h2>리뷰 영상 {movie.reviewVideos.length}</h2>
//           <div className="review-video-item">{movie.reviewVideos[0]}</div>
//         </section>

//         {showReviewPopup && (
//           <div id="review-popup" className="popup" style={{ display: 'flex' }}>
//             <div className="popup-content">
//               <h2>리뷰: {movie.title}</h2>
//               <textarea 
//                 placeholder="리뷰를 작성하세요."
//                 value={newReview}
//                 onChange={(e) => setNewReview(e.target.value)}
//               ></textarea>
//               <div className="popup-buttons">
//                 <button id="close-popup" onClick={() => setShowReviewPopup(false)}>취소</button>
//                 <button onClick={handleReviewSubmit}>저장</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {showDatePopup && (
//           <div id="date-popup" className="popup" style={{ display: 'flex' }}>
//             <div className="popup-content">
//               <h2>본 날짜 선택</h2>
//               <input 
//                 type="date" 
//                 id="watch-date" 
//                 value={selectedDate} 
//                 onChange={(e) => setSelectedDate(e.target.value)} 
//               />
             
//              <div className="popup-buttons">
//                 <button id="close-date-popup" onClick={() => setShowDatePopup(false)}>취소</button>
//                 <button id="save-date" onClick={handleSaveDate}>저장</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {showAllReviewsPopup && (
//           <div id="all-reviews-popup" className="popup" style={{ display: 'flex' }}>
//             <div className="popup-content">
//               <h2>전체 리뷰</h2>
//               <div className="all-reviews-list">
//                 {reviews.map(review => (
//                   <div className="review-item" key={review.username}>
//                     <div className="review-header">
//                       <img src={review.userImage} alt={review.username} className="review-user-pic" />
//                       <span className="review-username">{review.username}</span>
//                       <span className="review-rating">⭐{review.rating}</span>
//                     </div>
//                     <p>{review.content}</p>
//                     <p className="review-likes">👍{review.likes}</p>
//                   </div>
//                 ))}
//               </div>
//               <button id="close-all-reviews-popup" onClick={() => setShowAllReviewsPopup(false)}>닫기</button>
//             </div>
//           </div>
//         )}
//       </main>

//       <footer>
//         {/* <!-- Footer content here --> */}
//       </footer>
//     </div>
//   );
// }

// export default MovieDetail;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';
import { boxOfficeMovies, netflixTop10Movies, highRatedMovies, recommendedMovies } from './MovieData';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [showAllReviewsPopup, setShowAllReviewsPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [newReview, setNewReview] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const allMovies = [...boxOfficeMovies, ...netflixTop10Movies, ...highRatedMovies, ...recommendedMovies];
    const movie = allMovies.find(movie => movie.id === parseInt(id));
    if (movie) {
      setMovie(movie);
      setReviews(movie.reviews || []);
    }
  }, [id]);

  const handleReviewClick = () => {
    setShowReviewPopup(true);
  };

  const handleDateClick = () => {
    setShowDatePopup(true);
  };

  const handleMoreReviewsClick = () => {
    setShowAllReviewsPopup(true);
  };

  const handleSaveDate = () => {
    if (selectedDate) {
      alert(`선택한 날짜: ${selectedDate}`);
      setShowDatePopup(false);
    } else {
      alert('날짜를 선택하세요.');
    }
  };

  const handleReviewSubmit = () => {
    if (newReview) {
      const updatedReviews = [
        ...reviews,
        {
          username: '새 사용자',
          userImage: 'path/to/new-user.jpg',
          rating: 5,
          content: newReview,
          likes: 0,
        },
      ];
      setReviews(updatedReviews);
      setShowReviewPopup(false);
      setNewReview('');
    } else {
      alert('리뷰를 입력하세요.');
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-detail">
      <main>
        <section className="movie-details">
          <div className="movie-header">
            <h1>{movie.title}</h1>
            <p>{movie.year} {movie.genre} {movie.country}</p>
            <p>{movie.duration} {movie.rating}</p>
            <p>예매율 {movie.reservationRate} 누적 관객 {movie.audience}</p>
          </div>
          <div className="movie-poster">
            <img src={movie.posterUrl} alt={movie.title} />
          </div>
          <div className="movie-rating">
            <div className="stars">
              {movie.stars}
            </div>
            <div className="rating-score">
              <div className="score-item">
                <span className="expected-score">{movie.expectedScore}</span>
                <span className="score-label">예상 별점</span>
              </div>
              <div className="score-item">
                <span className="average-score">{movie.averageScore}</span>
                <span className="score-label">평균 별점</span>
              </div>
            </div>
          </div>
          <div className="movie-buttons">
            <button onClick={handleReviewClick}>리뷰</button>
            <button onClick={handleDateClick}>본 날짜 추가</button>
          </div>
        </section>

        <section className="movie-cast">
          <h2>제작/출연</h2>
          <div className="cast-list">
            {(movie.cast || []).map(cast => (
              <div className="cast-item" key={cast.name}>
                <img src={cast.image} alt={cast.name} />
                <p>{cast.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="movie-reviews">
          <h2>리뷰 {reviews.length}</h2>
          <div className="review-list">
            {reviews.slice(0, 5).map(review => (
              <div className="review-item" key={review.username}>
                <div className="review-header">
                  <img src={review.userImage} alt={review.username} className="review-user-pic" />
                  <span className="review-username">{review.username}</span>
                  <span className="review-rating">⭐{review.rating}</span>
                </div>
                <p>{review.content}</p>
                <p className="review-likes">👍{review.likes}</p>
              </div>
            ))}
          </div>
          <button className="more-button" onClick={handleMoreReviewsClick}>더보기</button>
        </section>

        <section className="movie-stills">
          <h2>스틸컷 {movie.stills?.length || 0}</h2>
          <div className="still-list">
            {(movie.stills || []).map((still, index) => (
              <img src={still} alt={`Still ${index + 1}`} key={index} />
            ))}
          </div>
        </section>

        <section className="movie-trailers">
          <h2>트레일러 {movie.trailers?.length || 0}</h2>
          <div className="trailer-list">
            {(movie.trailers || []).map((trailer, index) => (
              <div className="trailer-item" key={index}>{trailer}</div>
            ))}
          </div>
        </section>

        <section className="movie-review-videos">
          <h2>리뷰 영상 {movie.reviewVideos?.length || 0}</h2>
          <div className="review-video-item">{movie.reviewVideos?.[0]}</div>
        </section>

        {showReviewPopup && (
          <div id="review-popup" className="popup" style={{ display: 'flex' }}>
            <div className="popup-content">
              <h2>리뷰: {movie.title}</h2>
              <textarea 
                placeholder="리뷰를 작성하세요."
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
              ></textarea>
              <div className="popup-buttons">
                <button id="close-popup" onClick={() => setShowReviewPopup(false)}>취소</button>
                <button onClick={handleReviewSubmit}>저장</button>
              </div>
            </div>
          </div>
        )}

        {showDatePopup && (
          <div id="date-popup" className="popup" style={{ display: 'flex' }}>
            <div className="popup-content">
              <h2>본 날짜 선택</h2>
              <input 
                type="date" 
                id="watch-date" 
                value={selectedDate} 
                onChange={(e) => setSelectedDate(e.target.value)} 
              />
             
             <div className="popup-buttons">
                <button id="close-date-popup" onClick={() => setShowDatePopup(false)}>취소</button>
                <button id="save-date" onClick={handleSaveDate}>저장</button>
              </div>
            </div>
          </div>
        )}

        {showAllReviewsPopup && (
          <div id="all-reviews-popup" className="popup" style={{ display: 'flex' }}>
            <div className="popup-content">
              <h2>전체 리뷰</h2>
              <div className="all-reviews-list">
                {reviews.map(review => (
                  <div className="review-item" key={review.username}>
                    <div className="review-header">
                      <img src={review.userImage} alt={review.username} className="review-user-pic" />
                      <span className="review-username">{review.username}</span>
                      <span className="review-rating">⭐{review.rating}</span>
                    </div>
                    <p>{review.content}</p>
                    <p className="review-likes">👍{review.likes}</p>
                  </div>
                ))}
              </div>
              <button id="close-all-reviews-popup" onClick={() => setShowAllReviewsPopup(false)}>닫기</button>
            </div>
          </div>
        )}
      </main>

      <footer>
        {/* <!-- Footer content here --> */}
      </footer>
    </div>
  );
}

export default MovieDetail;
