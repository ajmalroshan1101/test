let cont=document.querySelector(".cont"); 

let count=0;

function incre(){
    count++;
    cont.innerText =  count;
    

}
function decre(){

    count--;
    cont.innerHTML = count;
}

