 let number = document.querySelector("#num");
 let counter = 0;
 setInterval(() =>{
    if(counter == 60){
        clearInterval();
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
   
 },30);

