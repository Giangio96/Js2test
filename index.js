/* Crea uno script che recuperi i dati dalla seguente API: https://api.covid19api.com/summary. 
Da questa:
1. Ritorna i Total Confirmed
2.Ritorna la lista di tutte le country, con name countrycode e totalconfirmed
3. Ritrona solo il più alto per i Total Confirmed e i Toltal confirmed più basso*/




let totalConfirmed  

async function recDati(){
    let inRec = await fetch('https://api.covid19api.com/summary')
    let datiRec = await inRec.json();
    console.log(datiRec);
    
    let ulist = document.getElementById('list');
    let ilist = document.createElement('li')
    
    let totalConfirmed = datiRec.Global.TotalConfirmed
    ilist.appendChild(document.createTextNode(totalConfirmed));
    ulist.appendChild(ilist);

    let country = datiRec.Countries[name];
    for ( let i=0; i < country; i++){

    }
   
    console.log(totalConfirmed); 
    console.log(country);
   


} recDati();



