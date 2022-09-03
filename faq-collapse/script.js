const toggles = document.querySelectorAll('.faq-toggle')
// const faq = document.querySelector('.faq ')

toggles.forEach(toggle => {
     toggle.addEventListener('click', () => {
      // it will work on each node
        toggle.parentNode.classList.toggle('active')
     })

   // if we write like this using parent class then it will only open and close the 1st one either you click on firstone 
   // or in anyone it will only open-close the firstone so that's why we use here parentnode
   //   toggle.addEventListener('click', () => {
   //      faq.classList.toggle('active')
   //   })

})