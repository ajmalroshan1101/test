var input=document.querySelector(".input");  
var output=document.querySelector(".output"); 
var vowels=document.querySelector(".vowels"); 
var pd=document.querySelector(".pd"); 
   var count;          
console.log(input.outerHTML)
var alph;
function key(alphebet){
    alph=alphebet
    console.log(input.innerText);
    input.innerText=input.innerText + alphebet;
    
}
function backspace(){
    input.innerText=input.innerText.slice(0,-1);
}
function enter(){
    input.innerHTML=input.innerHTML + "<br>";
}
function clearr(){
    input.innerText="";
}

function space(){
    input.innerHTML=input.innerHTML + "&nbsp"
}


function countSpace(){
 let toln=input.innerText.length;
 console.log(toln);
 let c=input.innerHTML.split('&nbsp;');
 console.log(c);
let sum=0;
for(let i=0;i<c.length;i++){

    sum=sum+c[i].length;
    console.log(sum);
}
console.log(toln-sum);
output.innerText=(`number of sapce ${toln-sum}`)
}
function countvowel(){

let has=input.innerText.split(''); 
    console.log(has);
     count=0;
    for(let i=0;i<has.length;i++){
        if(has[i]=='A'||has[i]=='E'||has[i]=='I'||has[i]=='O'||has[i]=='U'){
            count++;
        }
    }
    vowels.innerText=( `Number of vowels${count}`);
}
function poli(){
var palim=input.innerText;
let lan=palim.length;
 var res="it is palimdrome"
for(let i=0;i<=lan/2;i++){
    if(palim[i]!=palim[lan-1-i]){
        res="it is not palimdrome"
    }
}
pd.innerText=res;
}
function smalll(){
    let SM=alph.toLowerCase();
    console.log(SM);
    input.innerText=input.innerText + SM
}
function arm(){
    console.log(count);
}