window.addEventListener('load', () =>{

    let formRegister = document.querySelector('#form-register');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;

    formRegister.addEventListener('submit', (e) => {

        e.preventDefault();
        validationFormRegister();

    });

    const validationFormRegister = () => {

        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const passwordConfirmValue = passwordConfirm.value.trim();

        if(!nameValue) {

            console.log('campo nombre en blanco');
            fail(name, 'Campo nombre vacio');

        }

        if(!emailValue) {

            console.log('Campo email vacio');
            fail(email, 'Campo email vacio')

        }


    }

    const fail = (input, msg) => {

        const form = input.parentElement;
        const notf = form.querySelector('p')
        notf.innerText = msg;
        notf.className = 'form-fail'

    }

})