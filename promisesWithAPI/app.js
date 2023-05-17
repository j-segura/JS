const URL = 'https://jsonplaceholder.typicode.com/users';
const response = document.querySelector('#response');

document.addEventListener('DOMContentLoaded', callAPI);

// then catch

/* function callAPI() {
    fetch(URL)
    .then(resp => resp.json())
    .then((data) => {
        console.log(data);
    })
} */

// async await

async function callAPI() {

    const reponse = await fetch(URL);
    const data = await reponse.json();
    showData(data);

}

const showData = (data) => {

    data.forEach(element => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${element.name}</td>
            <td>${element.username}</td>
            <td>${element.email}</td>
            <td>${element.website}</td>
        `

        response.appendChild(row);
    });

}