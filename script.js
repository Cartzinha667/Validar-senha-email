let email = document.getElementById('email')
let password = document.getElementById('Senha')
function erro(){
    password.style.border='solid 10px #ff2d00'
}
function certo(){
    password.style.border = 'solid 3px #008000'
}
function erroemail(){
    email.style.border = 'solid 10px #ff2d00'
}
function certoemail(){
email.style.border = 'solid 3px #008000'
}
document.getElementById('btn-login').addEventListener('click', function verificarSenha(){

    if (password.value.length < 8||
        !password.value.match(/[a-z]/)||
        !password.value.match(/[a-z]/)||
        !password.value.match(/[0-9]/)||
        !password.value.match(/[^9-zA-Z0-9]/)

    ){
        // mensagem.innerHTML = 'Senha Invalida"
        erro()
    } else{
       // mensagem.innerHTML = 'Senha Valida"
       certo()
    }
    }
)
    document.getElementById("btn-login").addEventListener('click', function verificarEmail(){
    if(email.value=='eduardajeremias3@gmail.com'){
       certoemail()
    } else{
       erroemail()
    }
})