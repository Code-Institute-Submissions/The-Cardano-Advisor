var xhr = new XMLHttpRequest();
var api = 'cc3979ad-14ef-4c85-af59-fb239031f8d8'
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=" + api);

xhr.send();