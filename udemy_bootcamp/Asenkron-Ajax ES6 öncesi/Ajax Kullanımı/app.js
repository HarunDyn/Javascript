// Http Status
// 200 : OK
// 403 :Forbidden
// 404 :Not Found
// 505 :Internal Server Error

// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById('btn').addEventListener('click',function(){
    // XMLHttpRequest

    const xhr=new XMLHttpRequest(); // Request= get,post,put,delete

    
    /////


    // xhr.onreadystatechange=function(){ // bu fonk.artık kullanılmıyor
        // console.log(this.readyState); Burada readystate'in 1,2,3,4 adımların gerçekleştiğini görebilmekteyiz
        // console.log(this.status); // 200-403-404-505
        
     //if(this.status==200 && this.readyState==4){
             // Response HAzır
    //         console.log(this.responseText);
    //     }

    // } 



    ////



    // xhr.onprogress=function(){
    //     // 3 durumunu gösterir ve processing request durumunda çalışır
    //     console.log('process işleniyor',this.readyState);
    // }



    xhr.onload=function(){
    // console.log(this.readyState); // 4 sonucunu verdi yani sadce response hazır olduğu durumda çalışacak ama burada response hata mesajıda olabilir!!
    if(this.status==200){
        document.getElementById('ajax').textContent=this.responseText;
        
    }

    }

    xhr.open('GET','example.txt',true); // True girerek asenkron olduğunu belirtiriz

    xhr.send();

});
