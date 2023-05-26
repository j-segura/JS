const URL = 'https://fakestoreapi.com/products';
const response = document.querySelector('#items');

document.addEventListener('DOMContentLoaded', callAPI);

// async await

async function callAPI() {

    const reponse = await fetch(URL);
    const data = await reponse.json();
    showData(data);

}

const showData = (data) => {

    data.forEach(element => {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="img">
                <img src="${element.image}">
            </div>
            <div class="info">
                <h3>${element.title}</h3>
                <div class="buy">
                    <span>$${element.price}</span>
                    <button>Buy</button>
                </div>
            </div>
            <div class="des">${element.description}</div>
        `

        response.appendChild(card);
    });

}

/* ${element.description} */