// export const boxOfficeMovies = [
//     { title: '범죄도시 4', year: 2024, rating: '15', imgSrc: '/img/범죄도시4.jpg' },
//     { title: '그녀가 죽었다', year: 2023, rating: '15', imgSrc: 'img/그녀가 죽었다.jpg' },
//     { title: '혹성탈출: 새로운 시대', year: 2024, rating: '15', imgSrc: 'img/혹성탈출.jpg' },
//     { title: '극장판 하이큐!! 쓰레기장의 결전', year: 2024, rating: '전체 이용가', imgSrc: 'img/하이큐.jpg' },
//     { title: '설계자', year: 2023, rating: '15', imgSrc: 'img/설계자.jpg' },
//     { title: '이프: 상상의 친구', year: 2023, rating: '15', imgSrc: 'img/이프.jpg' },
//     { title: '가필드 더 무비', year: 2023, rating: '15', imgSrc: 'img/가필드 더 무비.jpg' },
//     { title: '악마와의 토크쇼', year: 2023, rating: '15', imgSrc: 'img/악마와의 토크쇼.jpg' },
//     { title: '청춘 18X2: 너에게로 이어지는 길', year: 2023, rating: '15', imgSrc: 'img/청춘.jpg' },
//     { title: '퓨리오사: 매드맥스 사가', year: 2023, rating: '15', imgSrc: 'img/퓨리오사.jpg' },
//   ];
export const boxOfficeMovies = [
  {
    id: 1,
    title: '범죄도시 4',
    year: 2024,
    rating: '15',
    imgSrc: '/img/범죄도시4.jpg',
    genre: '액션',
    country: '한국',
    duration: '120분',
    reservationRate: '6%',
    audience: '180만명',
    posterUrl: '/img/범죄도시4.jpg',
    stars: '☆☆☆☆☆',
    expectedScore: '4.0',
    averageScore: '4.3',
    cast: [
      { name: '드니 빌뇌브', image: 'path/to/cast1.jpg' },
      { name: '젠데이아', image: 'path/to/cast2.jpg' }
    ],
    reviews: [
      {
        username: '사용자1',
        userImage: 'path/to/user1.jpg',
        rating: 4.0,
        content: '영화를 보면서 이렇게 재미있었던 적은 처음이었다.',
        likes: 1000
      },
      {
        username: '사용자2',
        userImage: 'path/to/user2.jpg',
        rating: 2.0,
        content: '그저 그랬다...',
        likes: 500
      }
    ],
    stills: [
      'path/to/still1.jpg',
      'path/to/still2.jpg'
    ],
    trailers: [
      '트레일러 1',
      '트레일러 2'
    ],
    reviewVideos: [
      '리뷰 영상'
    ]
  },
  { id: 2, title: '그녀가 죽었다', year: 2023, rating: '15', imgSrc: 'img/그녀가 죽었다.jpg' },
{ id: 3, title: '혹성탈출: 새로운 시대', year: 2024, rating: '12', imgSrc: 'img/혹성탈출.jpg' },
{ id: 4, title: '극장판 하이큐!! 쓰레기장의 결전', year: 2024, rating: 'all', imgSrc: 'img/하이큐.jpg' },
{ id: 5, title: '설계자', year: 2023, rating: '15', imgSrc: 'img/설계자.jpg' },
{ id: 6, title: '이프: 상상의 친구', year: 2023, rating: '15', imgSrc: 'img/이프.jpg' },
{ id: 7, title: '가필드 더 무비', year: 2023, rating: '15', imgSrc: 'img/가필드 더 무비.jpg' },
{ id: 8, title: '악마와의 토크쇼', year: 2023, rating: '15', imgSrc: 'img/악마와의 토크쇼.jpg' },
{ id: 9, title: '청춘 18X2: 너에게로 이어지는 길', year: 2023, rating: '15', imgSrc: 'img/청춘.jpg' },
{ id: 10, title: '퓨리오사: 매드맥스 사가', year: 2023, rating: '15', imgSrc: 'img/퓨리오사.jpg' },
];

  export const netflixTop10Movies = [
    { title: '더 이퀄라이저 3', year: 2024, rating: '18', imgSrc: '/넷플릭스1.jpg' },
    { title: '기생수 파트 1', year: 2024, rating: '18', imgSrc: 'path/to/movie4.jpg' },
    { title: '기생수 파트 1', year: 2024, rating: '18', imgSrc: 'path/to/movie4.jpg' },
    { title: '기생수 파트 1', year: 2024, rating: '18', imgSrc: 'path/to/movie4.jpg' },
    { title: '기생수 파트 1', year: 2024, rating: '18', imgSrc: 'path/to/movie4.jpg' },
    { title: '기생수 파트 1', year: 2024, rating: '18', imgSrc: 'path/to/movie4.jpg' },
    { title: '기생수 파트 1', year: 2024, rating: '18', imgSrc: 'path/to/movie4.jpg' },
    { title: '기생수 파트 1', year: 2024, rating: '18', imgSrc: 'path/to/movie4.jpg' },
    { title: '기생수 파트 1', year: 2024, rating: '18', imgSrc: 'path/to/movie4.jpg' },
    { title: '기생수 파트 1', year: 2024, rating: '18', imgSrc: 'path/to/movie4.jpg' }
  ];
  
  export const highRatedMovies = [
    { title: '오펜하이머', year: 2023, rating: '18', imgSrc: 'path/to/movie5.jpg' },
    { title: '엘리멘탈', year: 2023, rating: 'All', imgSrc: 'path/to/movie6.jpg' }
  ];
  
  export const recommendedMovies = [
    { title: '윙카', year: 2024, rating: 'All', imgSrc: 'path/to/movie7.jpg' },
    { title: '크리에이터', year: 2023, rating: '15', imgSrc: 'path/to/movie8.jpg' }
  ];
  