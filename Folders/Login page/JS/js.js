let mail = document.querySelector("#mail");
let pass = document.querySelector("#pass");
let show = document.querySelector("#show");

let a = [];


function signup() {
    let d = false
    
    if (!mail.value || !pass.value) alert("please enter any value")
else{
if (a.length != 0) 
    {
         a.forEach((e) => 
         {
            if (e.mail == mail.value)
             {
                 alert('alredy exist')
                d = true
             }
        })
        if (!d) {
            a.push({
                mail: mail.value,
                pass: pass.value
            })
            show.innerHTML = "you have signed up enter the same email and password amd click login"
            console.log("lenght Not zero console --->", a)
        }
    } 
    else {
        a.push({
            mail: mail.value,
            pass: pass.value
        })
        show.innerHTML = "you have signed up enter the same email and password amd click login "
        console.log("lenght zero console --->", a)
    }
}
}
function login() {
  let d=false
 if(!mail.value||!pass.value)
 alert("Enter a value")
else{
    a.forEach((e)=>{
        if(e.mail==mail.value&&e.pass==pass.value)
        d=true
    })
    if(d){
        window.open("https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1VDKB_enIN994IN994&oq=goo&gs_lcrp=EgZjaHJvbWUqFQgDEC4YQxiDARjHARixAxjRAxiKBTIGCAAQRRg5MgYIARBFGDsyBggCEEUYOzIVCAMQLhhDGIMBGMcBGLEDGNEDGIoFMg8IBBAAGEMYgwEYsQMYigUyDwgFEAAYQxiDARixAxiKBTIPCAYQABhDGIMBGLEDGIoFMg8IBxAAGEMYgwEYsQMYigUyDwgIEAAYQxiDARixAxiKBTIPCAkQABhDGIMBGLEDGIoF0gEOMjY2NDg0NDI2ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8")
    }else{
        alert("incorrect email or password")
    }
}
}










