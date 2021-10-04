// Dışardan bir rest api veri alışverişi -ajax


document.getElementById('change').addEventListener('click',change);

function change(){

    const  xhr= new XMLHttpRequest();
    
    xhr.open('GET','https://api.exchangerate.host/latest'); // bağlantıyı açıp uzaktaki bir rest api (servera ) bağlanacağız

    xhr.send(); // request gönderilecek - Get request olduğu için stringsiz gönderilecek



    xhr.onload=function(){
        if(this.status){
            // console.log(this.responseText); // String olarak verdi öncelikle json array çevirmeliyiz
            const response=JSON.parse(this.responseText);

            // console.log(response.rates.TRY); 

            const rate=response.rates.TRY;
            const amount=Number(document.getElementById('amount').value);

            document.getElementById('tl').value=amount*rate;

            
        }

    };




};
