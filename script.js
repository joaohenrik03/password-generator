let slider = document.querySelector('#size-value')
let button = document.querySelector('#btn-generate-password')

let sizePassword = document.querySelector('#value')
let password = document.querySelector('#generated-password')

const containerPassword = document.querySelector('#generated-password-container')

const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFghijklmnopqrstuvwxyz0123456789!@$#"
let newPass = ""

sizePassword.innerHTML = slider.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function createPassword() {
    let pass = ""
    
    for(let i = 0, n = charset.length; i < slider.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }

    password.innerHTML = pass
    containerPassword.classList.remove('hide')
    newPass = pass
}

function copyPassword() {
    navigator.clipboard.writeText(newPass)
    window.alert('Senha copiada com sucesso!')
}