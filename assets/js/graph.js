
function chatIt () {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Cardano Weekly Price',
                data: [12, 19, 3, 5, 2, 3],
                
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

let api = 'https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=eur&days=7'
async function getPrice () {
    const response = await fetch(api);
    const data =await response.json();

    console.log(data.prices);
};

getPrice()