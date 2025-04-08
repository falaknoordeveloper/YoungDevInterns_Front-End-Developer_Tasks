let Navmenu=document.getElementById('sidebar');
function toggleMenu(){

    Navmenu.classList.toggle("show")
}

// testimonial 
let testimonialData=[
    {
      image:"./imgs/sliderimg1.jpg",
      name:"Sophia",
      role:"Software Engineer",
      description:"Bringing plants into my space has been a game-changer! Their lush greenery creates a refreshing atmosphere, purifies the air, and adds a touch of natural beauty. Truly, plants are more than just decoration—they bring life, positivity, and a calming presence to any environment!",



    },
    {
        image:"./imgs/sliderimg2.jpg",
        name:"John Devis",
        role:"Project Manager",
        description:'Fantastic experience! Everything was smooth and exceeded my expectations."Truly, plants are more than just decoration—they bring life, positivity, and a calming presence to any environment!"',
  
  
  
      },

      {
        image:"./imgs/sliderimg3.jpg",
        name:"James Smith",
        role:"Mechanical Engineer",
        description:"Superb service and support. Will definitely use again! Truly, plants are more than just decoration—they bring life, positivity, and a calming presence to any environment!",
      }

]
let testimoninalcard=document.getElementById("Testimonial-card");
let Node=testimoninalcard.childNodes;
let indexNo=0;


function Previous(){
  --indexNo;
  if(indexNo<0){
    indexNo=testimonialData.length-1;
  }
 
    Node[1].src=testimonialData[indexNo].image
    Node[3].innerHTML=testimonialData[indexNo].name
    Node[5].innerHTML=testimonialData[indexNo].role
    Node[7].innerHTML=testimonialData[indexNo].description

  



}


console.log(Node);

function Next(){
++indexNo;
if(indexNo>=testimonialData.length){
  indexNo=0;
}

  Node[1].src=testimonialData[indexNo].image
  Node[3].innerHTML=testimonialData[indexNo].name
  Node[5].innerHTML=testimonialData[indexNo].role
  Node[7].innerHTML=testimonialData[indexNo].description



}