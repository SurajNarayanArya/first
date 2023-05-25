function validateform(){
    var name=document.getElementById('name').value;
    var password=document.getElementById('password').value;
    
    var errors=[];

    if(!name || !password){
        alert('Please enter all the details');
        return;
    }

    if(name.length<6){
        errors.push('Name atleast of length 6');
    }

    if(password.length<6){
        errors.push('Password atleast of length 6');
    }
    if(errors.length>0){
        var error=errors.join("/n");
        alert(error);
    }
    else{
        alert('successfully registered');
    }
}