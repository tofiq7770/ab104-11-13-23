

let row = document.querySelector(".movieCards")
let loadButton = document.getElementById("load")
let searchBox =  document.getElementById("searchbox")



const getMovies=()=>{

  fetch("https://api.tvmaze.com/shows")
  .then(response=>response.json())
  .then(datas=>{
    row.innerHTML=''
    for (let i = 0; i < 20; i++) {
      const element = datas[i];
      row.innerHTML+= `
      <a href="details.html?id=${element.id}" class="movieCard col-3">
      <div class="cardImg">
      <img src="${element.image.medium}" alt="">
      </div>
      <div class="overlay">
      <span>Detail</span>
      </div>
      <div class="cardContent">
      <div class="movieNameAndImdb">
      <h2>${element.name}</h2>
      <p>${element.rating.average}/10</p>
      </div>
      <div class="movieDateTime">
      <p class="date"><strong>Day:</strong> ${element.schedule.days}</p>
      <p class="date"><strong>Time:</strong> ${element.schedule.time}</p>
      </div>
      </div>
      </a>
      `
    }
    
  });
}


getMovies()

searchBox.addEventListener("input", (element) => {

    fetch("https://api.tvmaze.com/shows")
    .then((response)=> response.json())
    .then((data)=>{
      let foundArr = data.filter((item)=> item.name.toLowerCase().trim().includes(searchBox.value.trim().toLowerCase())
      );
      row.innerHTML= ""
      foundArr.forEach((item)=>{
        row.innerHTML += `
        <a href="details.html?id=${item.id}" class="movieCard col-3">
        <div class="cardImg">
        <img src="${item.image.medium}" alt="">
        </div>
        <div class="overlay">
        <span>Details...</span>
        </div>
        <div class="cardContent">
        <div class="movieNameAndImdb">
        <h2>${item.name}</h2>
        <p>${item.rating.average}/10</p>
        </div>
        <div class="movieDateTime">
        </div>
        </div>
        </a>
        `;
      })
    })
  })
  
  