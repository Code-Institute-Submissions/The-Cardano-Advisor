
let api = 'https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=eur&days=7'
async function getPrice () {
    const response = await fetch(api);
    const data = await response.json();
    createDashboard(data.prices);
};

function createDashboard(prices) {
    console.log(prices);
    let labelSet = [];
    let dataSet = [];

    for (let i = 0; i < prices.length; i++) {
        labelSet.push(prices[i][0]);
        dataSet.push(prices[i][1]);
    }

    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelSet,
            datasets: [{
                label: 'Cardano Price (EUR)',
                data: dataSet,
                backgroundColor: [
                'rgba(0, 255, 0, 0.5)',
            ],
            showLine:true,
            steppedLine: true,
            }]
        },
        options: {
            scales: {
                yAxes: [{
                }]
            }
        }
    });
}

getPrice();