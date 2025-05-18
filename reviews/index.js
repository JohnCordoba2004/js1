//Local revies data
const reviews = [
  {
    id: 1,
    name: 'Ryan Gosling',
    job: 'Web Developer',
    img: './assets/cool-anime-pfp-25.jpg',
    text: 'Esse laboris et ullamco ea irure tempor proident. Excepteur ad reprehenderit aliqua laboris exercitation. Excepteur pariatur velit et officia duis esse aliqua elit eiusmod. Enim eu id excepteur dolor enim reprehenderit fugiat. Ad exercitation veniam minim est voluptate do adipisicing pariatur consectetur qui. Veniam amet ipsum sint aliquip esse.'
  },
  {
    id: 2,
    name: 'Azumi Kyoto',
    job: 'Web Developer',
    img: './assets/female_woman_avatar_people_person_white_tone_icon_159370.png',
    text: 'Esse laboris et ullamco ea irure tempor proident. Excepteur ad reprehenderit aliqua laboris exercitation. Excepteur pariatur velit et officia duis esse aliqua elit eiusmod. Enim eu id excepteur dolor enim reprehenderit fugiat. Ad exercitation veniam minim est voluptate do adipisicing pariatur consectetur qui. Veniam amet ipsum sint aliquip esse.'
  },
  {
    id: 3,
    name: 'Fernando Pantoja',
    job: 'Web Developer',
    img: './assets/male_man_boy_person_avatar_people_white_tone_icon_159357.png',
    text: 'Esse laboris et ullamco ea irure tempor proident. Excepteur ad reprehenderit aliqua laboris exercitation. Excepteur pariatur velit et officia duis esse aliqua elit eiusmod. Enim eu id excepteur dolor enim reprehenderit fugiat. Ad exercitation veniam minim est voluptate do adipisicing pariatur consectetur qui. Veniam amet ipsum sint aliquip esse.'
  },
  {
    id: 4,
    name: 'Gustavo Rioja',
    job: 'Web Developer',
    img: './assets/male_man_boy_person_avatar_people_white_tone_icon_159357.png',
    text: 'Esse laboris et ullamco ea irure tempor proident. Excepteur ad reprehenderit aliqua laboris exercitation. Excepteur pariatur velit et officia duis esse aliqua elit eiusmod. Enim eu id excepteur dolor enim reprehenderit fugiat. Ad exercitation veniam minim est voluptate do adipisicing pariatur consectetur qui. Veniam amet ipsum sint aliquip esse.'
  },
  {
    id: 5,
    name: 'Pedro Fernandez',
    job: 'Web Developer',
    img: './assets/male_man_boy_person_avatar_people_white_tone_icon_159357.png',
    text: 'Esse laboris et ullamco ea irure tempor proident. Excepteur ad reprehenderit aliqua laboris exercitation. Excepteur pariatur velit et officia duis esse aliqua elit eiusmod. Enim eu id excepteur dolor enim reprehenderit fugiat. Ad exercitation veniam minim est voluptate do adipisicing pariatur consectetur qui. Veniam amet ipsum sint aliquip esse.'
  },
]

// Select ittem

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.btn--prev')
const nextBtn = document.querySelector('.btn--next')
const randomBtn = document.querySelector('.btn--surprise')


//set
let currenItem = 0

//load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson()

})


//show person base on item
function showPerson() {
  const item = reviews[currenItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}


//show next person
nextBtn.addEventListener('click', function () {
  currenItem++
  if (currenItem > reviews.length - 1) {
    currenItem = 0
  }
  showPerson()
})

//show prev person
prevBtn.addEventListener('click', function () {
  currenItem--
  if (currenItem < 0) {
    currenItem = reviews.length - 1
  }
  showPerson()
})


//show ramdnom person
randomBtn.addEventListener('click', function () {
  currenItem = Math.floor(Math.random() * reviews.length)
  showPerson()
})