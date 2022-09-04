var check = document.querySelector('#checkbox')
var password = document.querySelectorAll('#password')
console.log(password)
check.addEventListener('click',function(e){
    if(check.checked){
        for (let index = 0; index < password.length; index++) {
            password[index].type='text'
        }
    }else{
        for (let index = 0; index < password.length; index++) {
            password[index].type='password'
        }
    }
})