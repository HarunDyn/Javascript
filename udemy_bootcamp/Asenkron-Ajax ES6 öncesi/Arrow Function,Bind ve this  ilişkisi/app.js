// Arrow function -Bind ve This İlişkisi

const person={
    age:25,

    // tellage: function(){
    //     console.log(this.age);
    // }.bind(this) // burada windows objesini gösteren this bind ile fonk içindeki thislerin yerine geçmiş oldu

tellage:()=>{
    console.log(this);
    console.log(this.age);
} // Burada arrow func ile yazdığımız zaman this window objesini gösteriyor ve sanki bind ile bağlanmış gibi çalışıyor




// this=Window objemizi gösteriyor


};

person.tellage();
