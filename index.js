// project .....................................................
// project slider when we click button
const firstProject= document.querySelector('.first-project');
const secondProject= document.querySelector('.second-project');
const thirdProject= document.querySelector('.third-project');
const fourthProject= document.querySelector('.fourth-project');

const btn_1= document.querySelector('.btn-1').style.display='none';
const btn_2= document.querySelector('.btn-2');

const btn_11= document.querySelector('.btn-11');
const btn_22= document.querySelector('.btn-22');

const btn_111= document.querySelector('.btn-111');
const btn_222= document.querySelector('.btn-222');

const btn_1111= document.querySelector('.btn-1111');
const btn_2222= document.querySelector('.btn-2222').style.display='none';

btn_2.addEventListener('click',()=>{
   firstProject.style.display='none';
   secondProject.style.display='flex';
});

btn_11.addEventListener('click',()=>{
   firstProject.style.display='flex';
   secondProject.style.display='none';
});

btn_22.addEventListener('click',()=>{
   secondProject.style.display='none';
   thirdProject.style.display='flex';
});

btn_111.addEventListener('click',()=>{
   secondProject.style.display='flex';
   thirdProject.style.display='none';
});

btn_222.addEventListener('click',()=>{
   thirdProject.style.display='none';
   fourthProject.style.display='flex';
});

btn_1111.addEventListener('click',()=>{
   fourthProject.style.display='none';
   thirdProject.style.display='flex';
});
// project ending.....................................

// hamburger...........................................
const hamburger= document.querySelector('.hamburger');
const hamburgerCross= document.querySelectorAll('.hamburger span');
const navList= document.querySelector('.nav-list');
const open= document.querySelector('.open');

let isactive=false;
hamburger.addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      navList.style.left='0rem';
      hamburgerCross[0].style.transform="rotate(42deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-42deg)";
      isactive=true;
   }
   else{
      navList.style.left='-60rem';
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});
// hamburger ending...........................................

// click hamburger menu bar and closed it..........................
const home1= document.querySelector('#home1');
const about1= document.querySelector('#about1');
const project1= document.querySelector('#project1');
const contact1= document.querySelector('#contact1');

home1.addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      navList.style.left='0rem';
      hamburgerCross[0].style.transform="rotate(42deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-42deg)";
      isactive=true;
   }
   else{
      navList.style.left='-60rem';
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});

about1.addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      navList.style.left='0rem';
      hamburgerCross[0].style.transform="rotate(42deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-42deg)";
      isactive=true;
   }
   else{
      navList.style.left='-60rem';
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});

project1.addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      navList.style.left='0rem';
      hamburgerCross[0].style.transform="rotate(42deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-42deg)";
      isactive=true;
   }
   else{
      navList.style.left='-60rem';
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});

contact1.addEventListener('click',()=>{
   navList.classList.toggle('open');
   if(!isactive){
      navList.style.left='0rem';
      hamburgerCross[0].style.transform="rotate(42deg)";
      hamburgerCross[1].style.opacity="0";
      hamburgerCross[2].style.transform="rotate(-42deg)";
      isactive=true;
   }
   else{
      navList.style.left='-60rem';
      hamburgerCross[0].style.transform="rotate(0deg)";
      hamburgerCross[1].style.opacity="1";
      hamburgerCross[2].style.transform="rotate(0deg)";
      isactive=false;
   }
});

// click hamburger menu bar and closed it ending......................

// scroll effect in header section..................
const container= document.querySelector('.container');
window.addEventListener('scroll',()=>{
   container.classList.toggle('sticky',window.scrollY>0);
});
// scroll effect in header section ending..................

// form validation................
const myform= document.querySelector('#form');
const username= document.querySelector('#username');
const email= document.querySelector('#email');
const subject= document.querySelector('#subject');
const message= document.querySelector('#message');

   myform.addEventListener('submit',(event)=>{
      event.preventDefault();
      validate();
   });

   // extra email validation
   const isEmail= (emailValue)=>{
      var atSymbol= emailValue.indexOf('@');
      if(atSymbol<1) return false;
      var dot= emailValue.lastIndexOf('.');
      if(dot<=atSymbol+2) return false;
      if(dot===emailValue.length-1) return false;
      return true;
   }

   const validate= ()=>{
      const usernameValue= username.value.trim();
      const emailValue= email.value.trim();
      const subjectValue= subject.value.trim();
      const messageValue= message.value.trim();

      // username
      if(usernameValue===""){
         setErrorMessage(username, 'username cannot be blank');
      }
      else if(usernameValue.length <=2){
         setErrorMessage(username,'username minimum 3 character');
      }
      else{
         setSuccessMsg(username);
      }

      // email
      if(emailValue===""){
         setErrorMessage(email, 'email cannot be blank');
      }
      else if(!isEmail(emailValue)){
         setErrorMessage(email,'not a valid email');
      }
      else{
         setSuccessMsg(email);
      }

      // subject
      if(subjectValue===""){
         setErrorMessage(subject, 'subject cannot be blank');
      }
      else if(subjectValue.length <=2){
         setErrorMessage(subject,'subject minimum 3 character');
      }
      else{
         setSuccessMsg(subject);
      }

      // message
      if(messageValue===""){
         setErrorMessage(message, 'message cannot be blank**');
      }
      else if(messageValue.length <=5){
         setErrorMessage(message,'message minimum 6 character**');
      }
      else{
         setSuccessMsg(message);
      }
   }
   function setErrorMessage(input, errormsgs){
      const formControl= input.parentElement;
      // formControl.className= 'form-control error';
      formControl.classList.add("error");

      const small= formControl.querySelector('small');
      small.innerText= errormsgs;
   }
   function setSuccessMsg(input){
      const formControl= input.parentElement;
      formControl.className= 'form-control success';

      // form send in google sheet


   }
// form validation ending............

// form send in google sheet
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxMF0DP4eB4DsdMgwkyavE466wtodNePWPpbs7TThhLSuk8NpBtv3S-ZNqpRcFxF8Ax/exec'

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzTllAIr4FXxXW_WQ8wWKkxE7wjisdUGi4fIK3wmymJUmsLMx95pPvEBvax-xMmc4Zk/exec'
//             const form = document.forms['google-sheet']

//             form.addEventListener('submit', e => {
//               e.preventDefault()
//               fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//                 .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//                 .catch(error => console.error('Error!', error.message))
//             })
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzTllAIr4FXxXW_WQ8wWKkxE7wjisdUGi4fIK3wmymJUmsLMx95pPvEBvax-xMmc4Zk/exec';

// const form = document.forms['google-sheet'];
// form.addEventListener('submit', e => {
//    e.preventDefault()
//    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//    .catch(error => console.error('Error!', error.message))
// });