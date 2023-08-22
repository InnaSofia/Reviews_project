

const reviews = [
{
//ИНДЕКС 0
    image: 'https://beta.ems.ladbiblegroup.com/s3/content/46a801d259f3a609af8bc524c05ef4e8.jpg',
    authors: 'Vin Diesel',
    city: 'California',
    text: 'If you do not see opportunities to realize your idea, you need to create such opportunities yourself.',
    year: '18 июля 1967г.'
},
{
    //ИНДЕКС 1
    image: 'https://popularnetworth.com/wp-content/uploads/2021/07/Johnny-Depp-Amber.jpg',
    authors: 'Johnny Depp',
    city: 'Owensboro',
    text: 'One day the people who didn,t believe in you will tell everyone how they met you',
    year: '9 июня 1963г.'
},
{
   //ИНДЕКС 2
    image: 'https://incnews.ru/data/inc/upload/2021-04/27/image-5192-1619505766.jpg',
    authors: 'Leonardo DiCaprio',
    city: 'California',
    text: 'The joy of fame passes rather quickly and you realize that the main reward is not that every mole suddenly began to recognize you on the street, but that your films will remain after your death',
    year: '11 ноября 1974г.'
},
{
    //ИНДЕКС 3
    image: 'https://vremax.com/wp-content/uploads/2021/02/img_6025501a3ef41.jpg',
    authors: 'Keanu Reeves',
    city: 'Beirut',
    text: 'Difficulties shape personality. A person needs to be grateful for all the difficult situations that life has presented him. They are the ones that build character.',
    year: '2 сентября 1964г.'
},
{
   //ИНДЕКС 4
    image: 'https://almode.ru/uploads/posts/2021-04/1618122189_53-p-silvestr-stallone-56.jpg',
    authors: 'Sylvester Stallone',
    city: 'California',
    text: 'Remember, the mind is your best muscle. Big hands can move rocks,= but big words can move mountains... Ride the brain train to success.',
    year: '6 июля 1946г.'
}
]

// Находим все элементы
const containerReviews = document.getElementById('containerReviews');//находим контейнер
const back = document.getElementById('back');//кнопка назад
const forward = document.getElementById('forward');//кнопка вперед



//let reviewCounter = 1

let currentReviewIndex = 0 //текущий отзыв, который будет в моменте(номер по массиву)


//функция показать отзывы
function showReviews(){


    let review = reviews[currentReviewIndex]
//наши отзывы
    containerReviews.innerHTML =`
        <div class="review">
        <div class="review_container-image">
        <img class="review_image" src="${review.image}"/>
        </div>
        <div class="review_authors">${review.authors}</div>
        <div class="review_city">${review.city}</div>
        <div class="review_text">${review.text}</div>
        <div class="review_year">${review.year}</div>
        </div>
        `
    }

//назад
    back.addEventListener('click', showBack)
function showBack(){
// от 0 переходим к 4 (длинна массива lenght)
    if(currentReviewIndex === 0 ){
        currentReviewIndex = reviews.length - 1
        
    }else{
        currentReviewIndex = currentReviewIndex - 1
    }
    showReviews()
}
  


    
    //вперед
   /* forward.addEventListener('click', showForward)

    function showForward(){
        if(currentReviewIndex === ){
            currentReviewIndex = reviews.length + 1
        }else{
            currentReviewIndex = currentReviewIndex + 1 
        }
        showReviews()
        
    }
    showReviews() */ 