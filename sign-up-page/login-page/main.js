let form=document.querySelector("form");

form.addEventListener("submit",login);

function login(event){

    event.preventDefault()
    let mail=document.getElementById("mail").value;
    console.log(mail);
    let password=document.getElementById("Password").value;
   console.log(password);

   let gmail=localStorage.getItem("si_mail")
   let gpassword=localStorage.getItem("si_password")
   console.log(gmail,gpassword);

   if((mail==gmail)&&(password==gpassword)){
    location.href="home-page/index.html"
   }
   else{
    alert("enter correct")
   }
}
