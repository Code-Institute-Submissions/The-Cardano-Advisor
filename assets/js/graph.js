
/* This calls the API through the async function which calls the price of ADA hourly over 7days*/
let api = 'https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=eur&days=7'
async function getPrice () {
    const response = await fetch(api);
    const data = await response.json();
    createDashboard(data.prices);
};
/* This calls the API through the async function which calls the price of ADA hourly over 7days*/

/* This creates a dashboard and pushes the JSON price data in variables */
function createDashboard(prices) {
    let labelSet = [];
    let dataSet = [];

    for (let i = 0; i < prices.length; i++) {
        labelSet.push(prices[i][0]);
        dataSet.push(prices[i][1]);
    }
/* This creates a dashboard and pushes the JSON price data in variables */

/* This finds the myChart ID in HTML and plots the previous variables onto a chart */
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
/* This finds the myChart ID in HTML and plots the previous variables onto a chart */

/* Idea basic idea for code to chart API came from this source https://www.youtube.com/watch?v=5-ptp9tRApM&t=491s */