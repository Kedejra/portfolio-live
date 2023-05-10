
let navHome = document.querySelector('#nav-home');
let navAbout= document.querySelector('#nav-about');
let navWork= document.querySelector('#nav-work');
let navContact= document.querySelector('#nav-contact');
let logo=document.querySelector('#logo');
const sections = document.querySelectorAll("section");
let navElm= document.querySelectorAll('#navbar ul li a');
// const navLi= document.querySelectorAll('#navbar ul li');

    navHome.addEventListener('click',changeCurrentHome);
    logo.addEventListener('click',changeCurrentHome);
    navAbout.addEventListener('click',changeCurrentAbout);
    navWork.addEventListener('click',changeCurrentWork);
    navContact.addEventListener('click',changeCurrentContact);
    document.getElementById('email').addEventListener('blur',validateEmail);

let trashBtn= document.querySelector('#clear-form i');

trashBtn.addEventListener('click',clearForm);

// Implementing navlink highlight change on scroll
window.onscroll = () => {
    let currentSection = "";
    const offsetVal=67;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      console.log(sectionTop)
      if (scrollY >= sectionTop - offsetVal) {
        currentSection = section.getAttribute("id"); }
    });

    navElm.forEach((elm) => {
        elm.classList.remove("current");
        if (elm.classList.contains(currentSection) ) {
          elm.classList.add("current");
        }
      });
}



function changeCurrentHome()
{
    navElm.forEach((nav)=>
    {
        nav.classList.remove('current');
    });
      
            navHome.classList.add("current");
  
}

function changeCurrentAbout()
{
    navElm.forEach((nav)=>
    {
        nav.classList.remove('current');
    });
      
            navAbout.classList.add("current");
  
}
function changeCurrentWork()
{
    navElm.forEach((nav)=>
    {
        nav.classList.remove('current');
    });
      
            navWork.classList.add("current");
}

function changeCurrentContact()
{
    navElm.forEach((nav)=>
    {
        nav.classList.remove('current');
    });
      
            navContact.classList.add("current");
  
}
        
function clearForm()
{
    document.querySelector('#name').value='';
    document.querySelector('#email').value='';
    document.querySelector('#subject').value='';
    document.querySelector('#message').value='';
}

function validateEmail()
{
    const email= document.getElementById('email');
    const regexp= /([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)[.]([A-za-z]{2,6})$/;
    if(!regexp.test(email.value))
    {
        email.classList.add('is-invalid');
    }
    else
    {
        email.classList.remove('is-invalid');
    }
}