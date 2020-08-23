var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("myChart").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://api.coingecko.com/api/v3/coins/cardano/market_chart?vs_currency=eur&days=30");

xhr.send();




let myChart = document.getElementById('myChart').getContext('2d');

        let cardano = new Chart(myChart, {
            type:'line',
            data:{
                labels:['Price'],
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