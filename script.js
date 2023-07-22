
function calculToken() {

    // =================================================================

    const api_url = 'https://api.currencyapi.com/v3/latest?apikey=MfOa1HbuheiijK0Ulfo7FFuZuqt6ZfLZXOcEFuKq&currencies=RON';


async function getISS(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);

    const unu = JSON.stringify(data.data.RON.value);
    const doi = JSON.stringify(data.meta.last_updated_at);

    document.getElementById('afisare2').textContent = unu;
    let dolar = unu;

    console.log(doi);

    //Pe date de 20.02.2023 am lasat USD la pretul de = 4.600128 RON
    //Pe date de 20.02.2023 am lasat USD la pretul de = 4.602406 RON
    // ==================================================================
  
    let divAfisare = document.getElementById("valToken");
    let divAfisare2 = document.getElementById("afisare2");
    let token = document.getElementById("input").value;

    const patt = /[a-z]/g;
    if(token.match(patt)){
        return alert("Trebuie sa introduci doar numere!");
    }else{
    if(token == ""){
        return alert("Nu ai introdus tokensi!");
 
          }else{
      
    let rezultat =  token * 0.2;
    let rotund = Math.round(rezultat)/10;
    
    function calcul(rotund, dolar){
    return rotund * dolar;
    }

    divAfisare.innerText = token + " tokensi valoreaza " + rotund + "$";
    divAfisare2.innerText = (Math.round(calcul(rotund, dolar) * 100) / 100) + " RON";
  
}}}

getISS();

}




