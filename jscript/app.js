
let navHome = document.querySelector('#nav-home');
let navAbout= document.querySelector('#nav-about');
let navWork= document.querySelector('#nav-work');
let navContact= document.querySelector('#nav-contact');
let logo=document.querySelector('#logo');

let navElm= document.querySelectorAll('#navbar ul li a');

    navHome.addEventListener('click',changeCurrentHome);
    logo.addEventListener('click',changeCurrentHome);
    navAbout.addEventListener('click',changeCurrentAbout);
    navWork.addEventListener('click',changeCurrentWork);
    navContact.addEventListener('click',changeCurrentContact);
    document.getElementById('email').addEventListener('blur',validateEmail);

let trashBtn= document.querySelector('#clear-form i');

trashBtn.addEventListener('click',clearForm);

function changeCurrentHome()
{
    navElm.forEach((nav)=>
    {
        nav.className='';
    });
      
            navHome.className="current";
  
}

function changeCurrentAbout()
{
    navElm.forEach((nav)=>
    {
        nav.className='';
    });
      
            navAbout.className="current";
  
}
function changeCurrentWork()
{
    navElm.forEach((nav)=>
    {
        nav.className='';
    });
      
            navWork.className="current";
}

function changeCurrentContact()
{
    navElm.forEach((nav)=>
    {
        nav.className='';
    });
      
            navContact.className="current";
  
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