let data = [
    {
        id: 1,
        image: '/Assets/about/prince.jpg',
        name: 'Prince Effiong',
        role: 'frontend developer'
    },
    {
        id: 2,
        image: '/Assets/about/khayrah.jpg',
        name: 'Mogaji Khairat',
        role: 'frontend developer'
    },
    {
        id: 3,
        image: '/Assets/about/Uthman.jpg',
        name: 'Dantata Uthman',
        role: 'frontend developer'
    },
    {
        id: 4,
        image: '/Assets/about/motunrayo.jpg',
        name: 'Olorunshola Qudroh',
        role: 'frontend developer'
    },
    {
        id: 5,
        image: '/Assets/about/precious.jpg',
        name: 'Precious Bassey',
        role: 'frontend developer'
    },
    {
        id: 6,
        image: '/Assets/about/oluwakemi.jpg',
        name: 'Oluwakemi Atoyebi',
        role: 'frontend developer'
    },
    {
        id: 7,
        image: '/Assets/about/akinropo.jpg',
        name: 'akinropo oyebami',
        role: 'frontend developer'
    },
    {
        id: 8,
        image: '/Assets/about/nimota.jpg',
        name: 'adeniran nimota',
        role: 'frontend developer'
    },
    {
        id: 9,
        image: '/Assets/about/salem.jpg',
        name: 'Oluwaleke Salem',
        role: 'backend developer'
    },
    {
        id: 10,
        image: '/Assets/about/nurudeen.jpg',
        name: 'Nurudeen Tajudeen',
        role: 'backend developer'
    },
]

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;
const mainElement = document.querySelector('.profile-card');

function displayElement(i) {
    const currentIndex = i % data.length;
    const nextIndex = (i + 1) % data.length;
    const thirdIndex = (i + 2) % data.length;
    const dataElement = `<div class="team-card">
        <div class="team">
            <img src=${data[currentIndex].image} alt="" />
            <h2 class="fullname">${data[currentIndex].name}</h2>
            <p class="techrole">${data[currentIndex].role}</p>
        </div>
        <div class="team">
            <img src=${data[nextIndex].image} alt="" />
            <h2 class="fullname">${data[nextIndex].name}</h2>
            <p class="techrole">${data[nextIndex].role}</p>
        </div>
        <div class="team">
            <img src=${data[thirdIndex].image} alt="" />
            <h2 class="fullname">${data[thirdIndex].name}</h2>
            <p class="techrole">${data[thirdIndex].role}</p>
        </div>
    </div>`

    mainElement.innerHTML = dataElement;
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

function prev() {
    index = index <= 1 ? data.length - 1 : index - 2;
    displayElement(index);
}

function next() {
    index = (index + 2) % data.length;
    displayElement(index);
}

let reviewData = [
    {
        id: 1,
        text: "Thanks to TravelEase, I was able to discover some hidden gems during my trip that I wouldn't have found otherwise.",
        reviewer: 'https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        reviewerRole: 'business consultant',
        reviewerName: 'Adewale Adio'
    },
    {
        id: 2,
        text: "I highly recommend TravelEase application to anyone looking for a comprehensive and efficient way to plan their next trip.",
        reviewer: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZlbWFsZSUyMGJsYWNrJTIwZG9jdG9yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        reviewerRole: 'doctor',
        reviewerName: 'Asake Williams'
    },
    {
        id: 3,
        text: "With TravelEase, I was able to create the perfect itinerary and make the most of my time during my trip.",
        reviewer: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsYWNrJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        reviewerRole: 'Software developer',
        reviewerName: 'Abdul kadiri'
    },
    {
        id: 4,
        text: "I loved how intuitive and user-friendly TravelEase application was, it made my trip planning a breeze.",
        reviewer: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        reviewerRole: 'crypto trader',
        reviewerName: 'sandra ibeh'
    },
    {
        id: 5,
        text: "TravelEase is quite easy to navigate with an amazing and incredible customer care team.",
        reviewer: 'https://images.unsplash.com/photo-1517598024396-46c53fb391a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29ycG9yYXRlJTIwYmxhY2slMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        reviewerRole: 'venture capitalist',
        reviewerName: 'chinedu okoye'
    }  
]

let reviewIndex = 0;
const reviewElement = document.querySelector('.review-container');

function displayReview(i) {
  const currentIndex = i % reviewData.length;
  const nextIndex = (i + 1) % reviewData.length;
  const thirdIndex = (i + 2) % reviewData.length;
  const reviewInfo = 
  `<div class="review-card-container">
        <div class="reviewCard">
        <p>${reviewData[currentIndex].text}</p>
        <div class="review-content">
            <img src=${reviewData[currentIndex].reviewer} alt="" />
            <div class="reviewer">
            <h3>${reviewData[currentIndex].reviewerName}</h3>
            <p class="techrole">${reviewData[currentIndex].reviewerRole}</p>
            </div>
            </div>
        </div>
        <div class="reviewCard">
        <p>${reviewData[nextIndex].text}</p>
            <div class="review-content">
            <img src=${reviewData[nextIndex].reviewer} alt="" />
            <div class="reviewer">
            <h3>${reviewData[nextIndex].reviewerName}</h3>
            <p class="techrole">${reviewData[nextIndex].reviewerRole}</p>
            </div>
            </div>
        </div>
        <div class="reviewCard">
        <p>${reviewData[thirdIndex].text}</p>
            <div class="review-content">
            <img src=${reviewData[thirdIndex].reviewer} alt="" />
            <div class="reviewer">
            <h3>${reviewData[thirdIndex].reviewerName}</h3>
            <p class="techrole">${reviewData[thirdIndex].reviewerRole}</p>
            </div>
            </div>
        </div>
    </div>`

  reviewElement.innerHTML = reviewInfo;
}

let intervalId = setInterval(() => {
  reviewIndex = (reviewIndex + 2) % reviewData.length;
  displayReview(reviewIndex);
}, 4000); 

function stopInterval() {
  clearInterval(intervalId);
}

