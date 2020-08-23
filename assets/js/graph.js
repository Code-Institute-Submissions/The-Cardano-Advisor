
let api = 'https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=eur&days=30'
async function getPrice () {
    let response = await fetch(api);
    let data =await response.json();
    console.log(data);
};

getPrice();


/*
let myChart = document.getElementById('myChart').getContext('2d');

        let cardano = new Chart(myChart, {
            type:'line',
            data:{
                labels:['Price', 'hour'],
                datasets:[{
                    label:'Pop',
                    data:[
                        18927,
                        23589,
                        12312,
                        23423,
                        23454,
                    ]
                }]
            },
            options:{}
        })
*/