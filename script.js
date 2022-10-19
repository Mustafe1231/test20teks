function getrandomnum (count, max)  {
    const  randomnum = [];
    //while med array med 10 nummer
    while(randomnum.length < count){
    // math random gör så att tal 1-100 slumpas fram
     const  random = Math.floor(Math.random() * max);
    // den här if satsen kollar om talet finns i array om finns inte så pushar ifen till arrayen
    if(randomnum.indexOf(random) === -1) {
    randomnum.push(random)
    }
     
    }
    return randomnum;
    

}


console.log(getrandomnum(10,100));

// functionen sorterar talen

function sortera (count, max)  {
    const  randomnum = [];
    //while med array med 10 nummer
    while(randomnum.length < count){
    // math random gör så att tal 1-100 slumpas fram
     const  random = Math.floor(Math.random() * max);
    // den här if satsen kollar om talet finns i array om finns inte så pushar ifen till arrayen
    if(randomnum.indexOf(random) === -1) {
    randomnum.push(random)
    }
     randomnum.sort();
    }
    return randomnum;
    

}
console.log(sortera(10,100).sort());
//Skapar en fuction som gör att användaren ska matcha lösenord
function matchpassword(){
//Hämtar båda lösenord id från html
 var password = document.getElementById("password");
 var verifypassword = document.getElementById("verifypassword");
//Om lösenorden matchar 
 if(password != verifypassword){
  // så ska denna alert ropas 
  alert("did not match");
//Annars denna 
 }else{
   alert("passoword created")

 }

if(password < 6){
 document.getElementById("message1").innerHTML = "**password atleast 6 characters"
return false;
}



}