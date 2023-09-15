
let box1=document.querySelector('.box1')
let text=document.querySelector('.text') 
let text2=document.querySelector('.text2') 

let text3=document.querySelector('.text3') 

let array=[
    {
      id: 1,
      firstName: "rajesh",
      lastName: "pp",
      maidenName: "kumar",
      age: 50,
      gender: "male",
      email: "raju0@sohu.com",
      photo:"https://img.freepik.com/free-photo/portrait-young-happy-businessman-office_637285-10563.jpg"
    },
    {
      id: 2,
      firstName: "joson",
      lastName: "Quigley",
      maidenName: "Cole",
      age: 5,
      gender: "male",
      email: "Cole0@sohu.com",
      photo:"https://image.shutterstock.com/mosaic_250/301519563/640011838/stock-photo-handsome-unshaven-young-dark-skinned-male-laughing-out-loud-at-funny-meme-he-found-on-internet-640011838.jpg"
    },
    {
      id: 3,
      firstName: "Alison",
      lastName: "jack",
      maidenName: "Franecki",
      age: 20,
      gender: "female",
      email: "jtreleven5@nhs.uk",
      photo:"https://media.istockphoto.com/id/1263972293/photo/for-budding-bloggers-theres-wifi-on-the-house.jpg?s=612x612&w=0&k=20&c=LBZSR1vq_q5GAm_QQg0Tgq-v99Qcf_gQhnk0lTnB45g="
    },
    {
      id: 4,
      firstName: "Mavis",
      lastName: "Schultz",
      maidenName: "Yundt",
      age: 22,
      gender: "male",
      email: "kmeus4@upenn.edu",
      photo:"https://img.freepik.com/free-photo/people-lifestyle-concept-attractive-young-caucasian-male-good-mood-blue-long-sleeved-shirt-smiling-cheerfully-showing-perfect-white-teeth-happy-with-positive-news-keeping-arms-folded_176420-13280.jpg"

    },
    {
      id: 5,
      firstName: "Oleta",
      lastName: "Abbott",
      maidenName: "Wyman",
      age: 31,
      gender: "female",
      email: "dpettegre6@columbia.edu",
      photo:"https://media.istockphoto.com/id/1254296712/photo/head-shot-portrait-young-smiling-woman-showing-okey-gesture.jpg?s=612x612&w=0&k=20&c=Oxz0sq1NRV9DYd7ZjO6xyOJJYr2An2CWYIY7eAQqRbQ="

    },
    {
      id: 6,
      firstName: "Ell",
      lastName: "Mueller",
      maidenName: "Durgan",
      age: 18,
      gender: "female",
      email: "ggude7@chron.com",
      photo:"https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg"
    },
    {
      id: 7,
      firstName: "Alen",
      lastName: "Muel",
      maidenName: "Dur",
      age: 55,
      gender: "male",
      email: "ge7@chron.com",
      photo:"https://img.freepik.com/free-photo/young-businessman-happy-expression_1194-1624.jpg"

    },
    {
      id: 8,
      firstName: "mia",
      lastName: "mue",
      maidenName: "mind",
      age: 23,
      gender: "female",
      email: "mia@chron.com",
      photo:"https://infomedia.com/wp-content/uploads/shutterstock_1164352522.jpg"

    },
    {
      id: 9,
      firstName: "Anna",
      lastName: "loft",
      maidenName: "lofty",
      age: 38,
      gender: "female",
      email: "Anna@chron.com",
      photo:"https://thumbs.dreamstime.com/b/crazy-screaming-teacher-chalkboard-blackboard-background-75478662.jpg"

    },
    {
      id: 10,
      firstName: "Eric",
      lastName: "eller",
      maidenName: "Dope",
      age: 28,
      gender: "male",
      email: "Eric@chron.com",
      photo:"https://st4.depositphotos.com/3489481/21259/i/600/depositphotos_212598966-stock-photo-portrait-casual-woman-holding-finger.jpg"

    }];
  

console.log(array);
let frame=document.querySelector('.image')
array.forEach((e)=>{
    let buton =document.createElement('div')
    let image=document.createElement('img')
    buton.innerText=e.firstName
    image.src=e.photo
    buton.id="one"
    image.className="ball"
   buton.onclick=()=>{
    text.innerText=e.firstName+" "+e.maidenName+" "+e.lastName
    text2.innerText="age:"+e.age+" "+"Gender:"+e.gender
    frame.src= e.photo
    text3.innerText=e.email
   }

buton.appendChild(image)
  box1.appendChild(buton)
})