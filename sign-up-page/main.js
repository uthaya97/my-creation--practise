let form=document.querySelector("form");
console.log(form);
form.addEventListener("submit",sign)

function sign(e){
    e.preventDefault()
    let mail=document.getElementById("mail").value
    console.log(mail);
    let password=document.getElementById("password").value
    console.log(password);

    localStorage.setItem("si_mail",mail)
    localStorage.setItem("si_password",password)

    let faname=document.getElementById("fname").value
    let laname=document.getElementById("lname").value
    let date=document.getElementById("date").value
    let month=document.getElementById("month").value
    let year=document.getElementById("year").value


    if((faname=="")||(laname=="")||(date=="")||(month=="")||(year=="")||(mail=="")||(password=="")){
        alert("please fill correct details")
    }
    else{
        location.href="login-page/index.html"
    }

    
}