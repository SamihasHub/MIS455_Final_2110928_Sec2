function search() {
    var searchTerm = document.getElementById("searchInput").value.trim();

    var url = `https://restcountries.com/v3.1/name/${searchTerm}`;

    fetch(url)
        .then(res => res.json())
        .then(data => process(data))
}

function process(data) {
    var oldContent = document.getElementById("results");
    oldContent.textContent = "";
        
        for (var a = 0; a < data.length; a++) {
            var country = data[a];
    
       
            let currency = "N/A";
            if (country.currencies) {
                const currencyKey = Object.keys(country.currencies)[0];
                currency = `${country.currencies[currencyKey].name} (${country.currencies[currencyKey].symbol || ""})`;
            }

        }
    }
