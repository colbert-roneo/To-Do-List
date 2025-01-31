function adminvalidate(){
    n=document.getElementById("username");
    p=document.getElementById("password");
    if(n.value=="admin"||p.value=="admin"){
        alert("Welcome Administrator!");
        return true;
    }
    else{
        alert("Incorrect Username or Password")
        return false;
    }
}


function teachervalidate(){
    n=document.getElementById("facultyid");
    p=document.getElementById("password");
    if(n.value=="faculty"||p.value=="faculty"){
        alert("Welcome Faculty!");
        return true;
    }
    else{
        alert("Incorrect Username or Password")
        return false;
    }
}


function studentvalidate(){
    n=document.getElementById("regNumber");
    p=document.getElementById("password");
    if(n.value=="student"||p.value=="student"){
        alert("Welcome Student!");
        return true;
    }
    else{
        alert("Incorrect Username or Password")
        return false;
    }
}