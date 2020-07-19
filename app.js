const reviews = [
    {
        name: 'Ali Bravo',
        avatar: '/images/avatar-ali.png',
        desc: ` “We have been able to cancel so many other subscriptions since using 
        Manage. There is no more cross-channel confusion and everyone is much 
        more focused.”`
    },
    {
        name: 'Anisha Li',
        avatar: '/images/avatar-anisha.png',
        desc: `“Manage has supercharged our team’s workflow. The ability to maintain 
        visibility on larger milestones at all times keeps everyone motivated.”`
    },
    {
        name: 'Richard Watts',
        avatar: '/images/avatar-richard.png',
        desc: `“Manage allows us to provide structure and process. It keeps us organized 
        and focused. I can’t stop recommending them to everyone I talk to!”`
    },
    {
        name: 'Shanai Gough',
        avatar: '/images/avatar-shanai.png',
        desc: `“Their software allows us to track, manage and collaborate on our projects 
        from anywhere. It keeps the whole team in-sync without being intrusive.”`
    },
]

const form = document.querySelector('.footer__form')
const input = document.querySelector('#email');
const container = document.querySelector('.reviews__container');
const toggle = document.querySelector('.header__hamb');
const bg = document.querySelector('#background');
const nav = document.querySelector('nav')

toggle.addEventListener('click', () =>{
    bg.classList.toggle('background');
    nav.classList.toggle('show-nav')
})

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    if(!input.value) {
        alert('enter valid e-mail')
    }
})
    
let counter = 0;
    
const render = () =>{
     
    container.innerHTML = 
     ` <img src=${reviews[counter].avatar} alt="">
    <h3>${reviews[counter].name}</h3>
    <p> ${reviews[counter].desc}</p>`
   counter++
   if(counter > reviews.length -1) {
    counter = 0
}
    
}


// const getTime = () =>{
//     counter++
    
// }
setInterval(render, 3000)
render()