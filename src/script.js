let reviewCounter = 1

let currentIndex = 0

const reviews = [
{
    id: reviewCounter++,
    image: 'https://beta.ems.ladbiblegroup.com/s3/content/46a801d259f3a609af8bc524c05ef4e8.jpg',
    authors: 'Vin Diesel',
    city: 'California',
    reviews: 'If you do not see opportunities to realize your idea, you need to create such opportunities yourself.',
    year: '18 июля 1967г.'
},
{
    id: reviewCounter++,
    image: 'https://popularnetworth.com/wp-content/uploads/2021/07/Johnny-Depp-Amber.jpg',
    authors: 'Johnny Depp',
    city: 'Owensboro',
    reviews: 'One day the people who didn,t believe in you will tell everyone how they met you',
    year: '9 июня 1963г.'
},
{
    id: reviewCounter++,
    image: 'https://incnews.ru/data/inc/upload/2021-04/27/image-5192-1619505766.jpg',
    authors: 'Leonardo DiCaprio',
    city: 'California',
    reviews: 'The joy of fame passes rather quickly and you realize that the main reward is not that every mole suddenly began to recognize you on the street, but that your films will remain after your death',
    year: '11 ноября 1974г.'
},
{
    id: reviewCounter++,
    image: 'https://vremax.com/wp-content/uploads/2021/02/img_6025501a3ef41.jpg',
    authors: 'Keanu Reeves',
    city: 'Beirut',
    reviews: 'Difficulties shape personality. A person needs to be grateful for all the difficult situations that life has presented him. They are the ones that build character.',
    year: '2 сентября 1964г.'
},
{
    id: reviewCounter++,
    image: 'https://almode.ru/uploads/posts/2021-04/1618122189_53-p-silvestr-stallone-56.jpg',
    authors: 'Sylvester Stallone',
    city: 'California',
    reviews: 'Remember, the mind is your best muscle. Big hands can move rocks, but big words can move mountains... Ride the brain train to success.',
    year: '6 июля 1946г.'
}
]

// Находим все элементы
const containerReviews = document.getElementById('containerReviews');//находим контейнер
const back = document.getElementById('back');//кнопка назад
const forward = document.getElementById('forward');//кнопка вперед


forward.addEventListener('click', () => {
    currentIndex++
    if (currentIndex >= reviews){
        currentIndex = 0
    }
    reviews =reviews[currentIndex];
});


//функция показать отзывы
function showReviews(){
   
    reviews.forEach ((review) => {//проходимся по каждому элементу
        `<div class="review">
        <div class="review_image"><img src="${review.image}"></div>
        <div class="review_authors">${review.authors}</div>
        <div class="review_city">${review.city}</div>
        <div class="review_reviews">${review.reviews}</div>
        <div class="review_year">${review.year}</div>
        </div>
        `
    })
}