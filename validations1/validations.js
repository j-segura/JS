function validation() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let passwordConfirm = document.getElementById('passwordConfirm').value;

    errors = []

    if(name == '' || name.length == 0 || /^\s+$/.test(name)){

        alert("Nombre no puede estar vacio");
        return false;

    }

    if(email == '' || name.length == 0 ){

        alert("Email no puede estar vacio");
        return false;

    } else if(!(/\S+@\S+\.\S+/.test(email))) {

        alert("Email tiene que ser un email valido");
        return false;

    }

    if(password == '' || password.length == 0 ){

        alert("La contraseña no puede estar vacio");
        return false;

    }

    if(passwordConfirm == '' || passwordConfirm.length == 0 ){

        alert("Tienes que confirmar la contraseña");
        return false;

    } else if(passwordConfirm !== password) {

        alert("las contraseñas no conciden");
        return false;

    }


}