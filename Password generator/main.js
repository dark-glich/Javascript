const SpecialCharacters = '[@_!#$%^&*()?/|}{~:]'
const UppercaseChars = 'ABCDEFGHIJLMNOPQRSTUVWXYZ'
const LowercaseChars = UppercaseChars.toLowerCase()
const Numbers = '1234567890'

let password_lenght = document.getElementById('lenght')
let times = document.getElementById('times')
let symbol = document.getElementById('symbol')
let number = document.getElementById('number')
let lowercase = document.getElementById('lowercase')
let uppercase = document.getElementById('uppercase')
let error = document.getElementById('Error')
let password_holder = document.getElementById('holder')
const button = document.getElementById('generateBtn')

let password = '',index = '', copied = ''

password_lenght.onchange = () => {
     if (password_lenght.value > 70){
          ShowError('rgba(246, 69, 69, 0.836)', 'The Maximum Value for "Password Lenght" is <b>70</b>')
          setTimeout(() =>  error.style.display = 'none', 5000)
     }else if (password_lenght.value <= 0){
          ShowError('rgba(246, 69, 69, 0.836)', '"Password Lenght" cannot be negative')
          setTimeout(() =>  error.style.display = 'none', 5000)
     }
}

times.onchange = () =>{
     if (times.value > 8){
          ShowError('rgba(246, 69, 69, 0.836)', 'The Maximum Value for "Number of Passwords" is <b>8</b>')
          setTimeout(() =>  error.style.display = 'none', 5000)
     }else if (times.value <= 0){
          ShowError('rgba(246, 69, 69, 0.836)', '"Number of Passwords" cannot be negative')
          setTimeout(() =>  error.style.display = 'none', 5000)
     }
}



button.onclick = function () {
     if (password_lenght.value > 70 || password_lenght.value <= 0){
          ShowError('rgba(246, 69, 69, 0.836)', 'Please enter approriate value in <b>"Password Lenght"</b>')
          return setTimeout(() =>  error.style.display = 'none', 5000)
     }
     if (times.value > 8 || times.value <= 0){
          ShowError('rgba(246, 69, 69, 0.836)', 'Please enter approriate value in <b>"Number of Passwords"</b>')
          return setTimeout(() =>  error.style.display = 'none', 5000)
     }
     if(uppercase.checked == false && lowercase.checked == false && 
     number.checked == false && symbol.checked == false){
          ShowError('rgba(246, 69, 69, 0.836)', 'Please Select atleast one option')
          return setTimeout(() =>  error.style.display = 'none', 5000)
          }

     for (let i = 0; i < times.value; i++) {
          while (password.length < password_lenght.value) {

               if (uppercase.checked == true && password.length < password_lenght.value){
                    concatToPassword(UppercaseChars)
               }
               if (lowercase.checked == true && password.length < password_lenght.value){
                    concatToPassword(LowercaseChars)
               }
               if (number.checked == true && password.length < password_lenght.value){
                    concatToPassword(Numbers)
               }
               if (symbol.checked == true && password.length < password_lenght.value){
                    concatToPassword(SpecialCharacters)
               }

          }
          
          password_holder.style.color = 'rgb(44, 44, 44)'
          password_holder.style.fontSize = '0.7rem'
          
          if(i == 0){
               password_holder.innerHTML = `<div class="passwordText">${password}</div> <hr>`
          }else{
               password_holder.innerHTML += `<div class="passwordText">${password}</div> <hr>`
          }
          password = ''
     }
     copy_btn = document.getElementById('CopyBtn')
     copy_btn.style.display = 'inline-block'
     copy_btn.onclick = function () {
          password_text = document.querySelectorAll('.passwordText')
          for (let i = 0; i < password_text.length; i++) {
               let password_inner = password_text[i].innerText
               i == 0 ? copied = `${password_inner} ` : copied += `${password_inner} `
          }
          navigator.clipboard.writeText(copied);
          let n
          password_text.length == 1 ? n = 'Password' :  n = 'Passwords'
          ShowError('#00aeff9f', `${n} Copied`)
          setTimeout(() =>  error.style.display = 'none', 5000)
          
     }
     
}

function concatToPassword(char) {
     index = Math.floor(Math.random() * char.length); 
     password = password.concat(char[index])
}

function ShowError(color, message) {
     error.style.background = color
     error.style.display = 'block'
     error.innerHTML = message
}