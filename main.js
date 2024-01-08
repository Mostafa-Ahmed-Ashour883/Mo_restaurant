let emailInput = document.getElementById('emailInput');
let signUpBtn = document.querySelector('.bg-555');
let signInBtn = document.getElementById('signInBtn');
let headLine = document.getElementById('head');
let closeBtn = document.getElementById('close');
let myDiv = document.getElementById('show');
let passError = document.getElementById('passError');
let emailError = document.getElementById('emailError'); 
let gear = document.getElementById('gear');
let themsBox = document.getElementById('thems');
let firstTheme = document.getElementById('firstTheme');
let secondTheme = document.getElementById('secondTheme');
let thirdTheme = document.getElementById('thirdTheme');
let fourthTheme = document.getElementById('fourthTheme');
let fifthTheme = document.getElementById('fifthTheme');
let sixthTheme = document.getElementById('sixthTheme');
let aboutHearder = document.getElementById('aboutHearder');
let nav = document.querySelectorAll('nav ul li a');
let socialLinks = document.querySelectorAll('.inner ');
let foodDesc = document.querySelectorAll('#foodDesc ');
let drinks = document.getElementById('drinks');
let food =document.getElementById('food');
let showMoreBtn =document.getElementById('showMoreBtn');
let telNo = document.querySelectorAll('#telNo li');
let followInSocilal = document.querySelectorAll('#followInSocilal li a');
let follow = document.getElementById('follow');
let themsClose = document.getElementById('closetheme');
let userNameInput = document.getElementById('userNameInput');












var account;

$("#gear").click(()=>{

    $("#thems" ).toggle(500);
    $(".themsHeder" ).toggle(500);

})


secondTheme.addEventListener('click',function () {

    for(i=0;nav.length,socialLinks.length,foodDesc.length,telNo.length,followInSocilal.length;i++){

        nav[i].style.color='var(--second-color)';
        socialLinks[i].style.borderColor='var(--second-color)';
        foodDesc[i].style.color='var(--second-color)';
        aboutHearder.style.color='var(--second-color)';
        food.style.color='var(--second-color)';
        drinks.style.color='var(--second-color)';
        showMoreBtn.style.color ='var(--second-color)';
        telNo[i].style.color ='var(--second-color)';
        telNo[4].style.color='var(--second-color)';
        followInSocilal[i].style.color='var(--second-color)';
        follow.style.color ='var(--second-color)';



        
   
    }

    

    
})

firstTheme.addEventListener('click',function () {

    for(i=0;nav.length,socialLinks.length,foodDesc.length,telNo.length;i++){

        nav[i].style.color='var(--main-color)';
        socialLinks[i].style.borderColor='var(--main-color)';
        foodDesc[i].style.color='var(--main-color)';
        aboutHearder.style.color='var(--main-color)';
        food.style.color='var(--main-color)';
        drinks.style.color='var(--main-color)';
        showMoreBtn.style.color ='var(--main-color)';
        telNo[i].style.color='var(--main-color)';
        telNo[4].style.color='var(--main-color)';
        followInSocilal[i].style.color='var(--main-color)';
        follow.style.color ='var(--main-color)';



        
    }
    
})

thirdTheme.addEventListener('click',function () {

    for(i=0;nav.length,socialLinks.length,foodDesc.length,telNo.length,followInSocilal.length;i++){

        nav[i].style.color='var(--third-color)';
        socialLinks[i].style.borderColor='var(--third-color)';
        foodDesc[i].style.color='var(--third-color)';
        aboutHearder.style.color='var(--third-color)';
        food.style.color='var(--third-color)';
        drinks.style.color='var(--third-color)';
        showMoreBtn.style.color ='var(--third-color)';
        telNo[i].style.color ='var(--third-color)';
        telNo[4].style.color='var(--third-color)';
        followInSocilal[i].style.color='var(--third-color)';
        follow.style.color ='var(--third-color)';



        
   
    }

    

    
})

fourthTheme.addEventListener('click',function () {

    for(i=0;nav.length,socialLinks.length,foodDesc.length,telNo.length,followInSocilal.length;i++){

        nav[i].style.color='var(--fourth-color)';
        socialLinks[i].style.borderColor='var(--fourth-color)';
        foodDesc[i].style.color='var(--fourth-color)';
        aboutHearder.style.color='var(--fourth-color)';
        food.style.color='var(--fourth-color)';
        drinks.style.color='var(--fourth-color)';
        showMoreBtn.style.color ='var(--fourth-color)';
        telNo[i].style.color ='var(--fourth-color)';
        telNo[4].style.color='var(--fourth-color)';
        followInSocilal[i].style.color='var(--fourth-color)';
        follow.style.color ='var(--fourth-color)';

    }

    

    
})

fifthTheme.addEventListener('click',function () {

    for(i=0;nav.length,socialLinks.length,foodDesc.length,telNo.length,followInSocilal.length;i++){

        nav[i].style.color='var(--fifth-color)';
        socialLinks[i].style.borderColor='var(--fifth-color)';
        foodDesc[i].style.color='var(--fifth-color)';
        aboutHearder.style.color='var(--fifth-color)';
        food.style.color='var(--fifth-color)';
        drinks.style.color='var(--fifth-color)';
        showMoreBtn.style.color ='var(--fifth-color)';
        telNo[i].style.color ='var(--fifth-color)';
        telNo[4].style.color='var(--fifth-color)';
        followInSocilal[i].style.color='var(--fifth-color)';
        follow.style.color ='var(--fifth-color)';



        
   
    }

    

    
})

sixthTheme.addEventListener('click',function () {

    for(i=0;nav.length,socialLinks.length,foodDesc.length,telNo.length,followInSocilal.length;i++){

        nav[i].style.color='var(--sixth-color)';
        socialLinks[i].style.borderColor='var(--sixth-color)';
        foodDesc[i].style.color='var(--sixth-color)';
        aboutHearder.style.color='var(--sixth-color)';
        food.style.color='var(--sixth-color)';
        drinks.style.color='var(--sixth-color)';
        showMoreBtn.style.color ='var(--sixth-color)';
        telNo[i].style.color ='var(--sixth-color)';
        telNo[4].style.color='var(--sixth-color)';
        followInSocilal[i].style.color='var(--sixth-color)';
        follow.style.color ='var(--sixth-color)';



        
   
    }

    

    
})


closeBtn.addEventListener('click',function(){
   signUp('none');
})

signUpBtn.addEventListener('click',function(){
    signUp('block');

    
})

signInBtn.addEventListener('click',function(){

    signUp("none")
})







 
function testEmail(){

    var regex = /^[a-zA-z_.1-90-90-9]{3,30}@(yahoo|gmail|outlook|hotmail)(.com|.sa)$/
    if(regex.test(emailInput.value)==true){
        return true;
    }

    else{
        return false;
    }
}

function passwardTest(){
    var regexPass =/^[a-z_a-z]{6,20}[1-9]{1,20}$/;
    if(regexPass.test(passwardInput.value)==true)
    {
        return true;
    }
    else{
        return false;
    }
}


