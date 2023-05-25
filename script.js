function validateform(){
    console.log("btnn clicked");  
    var name=document.getElementById('name').value;  
    var password=document.getElementById('password').value;  

    var errors = [];
      
    if (!name || !password){  
       alert("Please fill all the details");
       return;
    }

    if(name.length < 6){
        errors.push("Name should be atleast 6 characters");
    }

    if(!((/^(?=.*[A-Z]).*$/).test(name))){
        errors.push("Please enter the valid name");
    }

    if(password.length<6){  
      errors.push("Password must be at least 6 characters long.");  
    }  

    if(errors.length > 0) {
        var error = errors.join("\n");
        alert(error);
    }
    else{
        alert("Successfully login");
    }

} 