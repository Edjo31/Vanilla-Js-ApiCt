let iscreate=false


function datalistF() {
    const option = document.getElementById("ct");
    const fru=document.getElementById("country")
    const list = [];
  
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        const countries = data;
        const countryNames = countries.map(country => country.capital);
        list.push(...countryNames);
        list.forEach(element => {
          const op = document.createElement("option");
          const fr=document.createElement("option")
          fr.value=element;
          fr.textContent=element
          op.value= element;

          option.appendChild(op);
          fru.appendChild(fr)
        });
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }

function validarNumero(event) {
    const input = event.target;
    const value = input.value;
    const isValid = isNaN(value);


   const forms =document.getElementById("form")
    if(!iscreate){
      
            const h4 = document.createElement("h4");
            forms.appendChild(h4);
            iscreate = true;
    
    }
    const h4 = document.querySelector("h4");
    
 
    isValid ? (input.value = value.match(/\d+/g), (h4.textContent="Solo numeros"),(h4.classList.add("error")) ): ((input.value=value ), (h4.textContent=""),(h4.classList.remove("error")));
  }