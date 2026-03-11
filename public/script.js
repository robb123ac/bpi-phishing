function togglePassword(){

let password = document.getElementById("password")

if(password.type === "password"){
password.type = "text"
}
else{
password.type = "password"
}

}

document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault()

alert("Login button clicked!")

})