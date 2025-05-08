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
            
        var newDiv = document.createElement("div");
        newDiv.classList.add("innerStyle");

        newDiv.innerHTML = `
            <h2>${country.name.common}</h2>
            <img src="${country.flags.png}" alt="Flag" width="150"><br><br>
            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Currency:</strong> ${currency}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Subregion:</strong> ${country.subregion || "N/A"}</p>
        `;

        oldContent.appendChild(newDiv);
    }
}