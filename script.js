var validEmail = /^[^]+@[^]+\.[a-z]{2,3}$/ ;

function validation() {

var userEmail = document.getElementById('user-email').value;
var text = document.getElementById('text')

if (validEmail.test(userEmail)){
 
    text.innerHTML= 'your email address is valid';
    text.style.color = 'green';
    document.getElementById('error-icon').style.visibility = 'hidden' ;
    document.getElementById('user-email').style.border = '1px solid green';
   
}
else {
   
    text.innerHTML= 'please provide a valid email ';
    text.style.color = 'red'
   document.getElementById('error-icon').style.visibility = 'visible' ;
   document.getElementById('user-email').style.border = '1px solid red';
   
}
if(userEmail === ''){
   
    text.innerHTML = '';
}
}

