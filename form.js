function validate(){
    var first = document.getElementById('first').value;
    var last = document.getElementById('last').value;
    var email = document.getElementById('email').value;
    var cont = document.getElementById('cont').value;
    var pass = document.getElementById('pass').value;  
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    var Submit = true;
    if (first == ""){
        document.getElementById('fname').innerHTML="Please enter first name";
        Submit = false;
    }
    if (last == ""){
        document.getElementById('lname').innerHTML="Please enter last name";
        Submit = false;
    }
    if (email == ""){
        document.getElementById('em').innerHTML="Please enter email";
        Submit = false;
    }
    else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length){
        document.getElementById('em').innerHTML="Please enter  valid email";
        Submit = false; 
    }
    if (cont == ""){
        document.getElementById('con').innerHTML="Please enter contact";
        Submit = false;
    }
    else if(isNaN(cont)){  
            document.getElementById("con").innerHTML="Enter Numeric value only";  
            Submit = false;  
    }
    
    if (pass == ""){
        document.getElementById('pas').innerHTML="Please enter password";
        Submit = false;
    }
    else if (pass.length < 8) {
        document.getElementById('pas').innerHTML="Your password must be at least 8 characters"; 
        Submit = false;
    }
    else if (pass.search(/[a-z]/) < 0) {
        document.getElementById('pas').innerHTML= "Your password must contain at least one lowercase  character."
        Submit = false;
    }
    else if (pass.search(/[A-Z]/) < 0) {
        document.getElementById('pas').innerHTML= "Your password must contain at least one uppercase character."
        Submit = false;
    }
    else if (p.search(/[0-9]/) < 0) {
        document.getElementById('pas').innerHTML="Your password must contain at least one digit.";
        Submit = false; 
    }
    return Submit;
}