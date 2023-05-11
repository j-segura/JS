window.addEventListener('load', () =>{

    let formRegister = document.querySelector('#form-register');
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let passwordConfirm = document.getElementById('passwordConfirm');

    formRegister.addEventListener('submit', (e) => {

        e.preventDefault();
        validationFormRegister();

    });

    const validationFormRegister = () => {

        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const passwordConfirmValue = passwordConfirm.value.trim();


        if(!nameValue || /^\s+$/.test(nameValue)) {

            console.log('Name field is empty');
            fail(name, 'Name field is empty');

        }

        if(!emailValue) {

            console.log('E-mail field is empty');
            fail(email, 'E-mail field is empty');

        } else if(!(/\S+@\S+\.\S+/.test(email))) {

            console.log('Invalid e-mail address');
            fail(email, 'Invalid e-mail address');

        }

        if(!passwordValue || /^\s+$/.test(passwordValue)) {

            console.log('Password field is empty');
            fail(password, 'Password field is empty');

        } else if (passwordValue.length < 8) {

            console.log('Password needs minimum 8 characters');
            fail(password, 'Password needs minimum 8 characters');

        }

        if(!passwordConfirmValue) {

            console.log('Confirm password');
            fail(passwordConfirm, 'Confirm password');

        } else if (passwordConfirmValue !== passwordValue) {

            console.log('Passwords do not match');
            fail(passwordConfirm, 'Passwords do not match');

        }


    }

    const fail = (input, msg) => {

        const form = input.parentElement;
        const notf = form.querySelector('small')
        notf.innerText = msg;
        notf.className = 'form-fail';
        input.className = 'imput-fail';

    }

})