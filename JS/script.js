let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');


}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');


}
/* 
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');

} */

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}


/* function registration() {
    let myName,email,pwd;
    myName=document.getElementById("name").value;
    email=document.getElementById("email").value;
    pwd=document.getElementById("pwd").value;

localStorage.setItem("name",myName)
localStorage.setItem("email",email)
localStorage.setItem("password",pwd)
}




function loginForm()
{
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;

    var email1=localStorage.setItem("email1")
    var pass1=localStorage.setItem("pass1");

    if (email==email1 && pass==pass1)
    {
        window.location.href="index.html"
    }
    else{
        alert ("Email and password is incorrect")
    }
}

let x=document.getElementById("login");
    let y=document.getElementById("register")
    let z=document.getElementById("btn");

    function register()
    {
        x.style.left="-400px";
        y.style.left="50px";
        z.style.left="110px";
    }


    function login()
    {
        x.style.left="50px";
        y.style.left="450px";
        z.style.left="0";
    } */
    

    const list=document.getElementById("list-container");
    const productList = [
        {
            id: 1,
            src:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qwokyvfzdond2snolvzw',
            hotelName:'PK Biryani House',
            description:'Biryani,Maharashtrian',
            rating:'4.1',
            time:'20Min',
            amt: 'Rs.350',
            offer:'50% Off| use WELCOME50',
        
        },
    
        {
            id: 2,
            src:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qwokyvfzdond2snolvzw',
            hotelName:'PK Biryani House',
            description:'Biryani,Maharashtrian',
            rating:'4.1',
            time:'20Min',
            amt: 'Rs.350',
            offer:'50% Off| use WELCOME50',
        
       },
    
       {
        id: 3,
        src:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qwokyvfzdond2snolvzw',
        hotelName:'PK Biryani House',
        description:'Biryani,Maharashtrian',
        rating:'4.1',
        time:'20Min',
        amt: 'Rs.350',
        offer:'50% Off| use WELCOME50',
    
       },
    
       {
        id: 4,
        src:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qwokyvfzdond2snolvzw',
        hotelName:'PK Biryani House',
        description:'Biryani,Maharashtrian',
        rating:'4.1',
        time:'20Min',
        amt: 'Rs.350',
        offer:'50% Off| use WELCOME50',
    
    },
    
    {
        id: 5,
        src:'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qwokyvfzdond2snolvzw',
        hotelName:'PK Biryani House',
        description:'Biryani,Maharashtrian',
        rating:'4.1',
        time:'20Min',
        amt: 'Rs.350',
        offer:'50% Off| use WELCOME50',
    
    },
    
    ]
    console.log(typeof(id));
    
     for(let item=0;item<productList.length;item++)
     {
         const{src,hotelName,description,rating,time,amt,offer}= productList[item]
    
         const vidDiv= document.createElement('div')
         //carddiv.className = 'list-container'
    
         vidDiv.innerHTML=`<div class="vid-list">
         <a href="video.html">
             <img src="${src}" class="img-class" alt=""
             /></a>
         <div class="flex-div">
           <div class="vid-info">
             <a href="">${hotelName}</a>
             <p>${description}</p>
             <p>Mughlai,Desserts,Beverages</p>
             <div class="btns flex-div">
                 <div class="rating">${rating}</div> 
                 <div class="time">${time}</div> 
                 <div class="amt">${amt}</div>
             </div>
             <div class="offers">
             <p>${offer}</p>
         </div>
           </div>
         </div>
       </div>`
    
         list.appendChild(vidDiv)
     }
     
    
    
     
    
    