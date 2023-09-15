let inp=document.querySelector('.input')
let btn=document.querySelector('.btn')
let ol=document.querySelector('.ul')
let arr=[]

btn.addEventListener('click',()=>{

    let val=inp.value
    let arrvalue={
        name:val,
        fav:false
    }
    arr.push(arrvalue)
   
    let del=document.createElement('button')
    del.innerText="delete"
    let fav=document.createElement('button')
    fav.innerText="fav"
    
    del.className="delete"
    fav.className="fav"
    let p=document.createElement('p')
    let li=document.createElement('li')
    
    li.className="dot"
    p.innerText=val

    li.appendChild(p)
    li.appendChild(del)
    li.appendChild(fav)
    ol.appendChild(li)
    
    inp.value=''
      
    fav.onclick=()=>{

        for(i in arr){
            if(p.innerText==arr[i].name){
                if(arr[i].fav==false){
                    arr[i].fav=true
               fav.innerText="🧡"
               console.log(arr);
               console.log("my");
                }
            else{
                arr[i].fav=false
                fav.innerText="fav"
            }
        
        }}
    }
    del.onclick=()=>{
        for (i in arr){
            console.log(i)
         if(p.innerText==arr[i].name)
            {
                if(arr[i].fav==true)
                alert("favourit text can't be delted")
                else
                {
                    delete arr[i]
                    li.remove()
                    console.log(arr);
                    console.log("ravi");
                }   
           
            }
            
        }
        // console.log(arr);
        // li.remove()
        console.log(arr);
        }
})