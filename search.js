
const address = new URLSearchParams(location.search)
// const formulazione = addressBarContent.get('searchId')






const search=function (query) {
    fetch(" https://striveschool-api.herokuapp.com/api/deezer/search?q="+query)

    .then((response)=>{
      if (response.ok) {
        console.log("ecco la response",response)
        return response.json()
      }else{
        throw new Error("errore nel Get")
      }
    })

    .then((data)=>{
       console.log("ecco l'oggetto",data)

       const row=document.getElementById("contenitore")
       row.innerHTML=""
       for (let i = 0; i < 25; i++) {
        const col = document.createElement("div");
        col.classList.add("col-6", "col-lg-3", "col-md-4");
    
        const randomNum = Math.round(Math.random() * 25);
        col.innerHTML = `<div class="card bg-black text-white my-2">
        <img
          src="${data.data[randomNum].artist.picture_medium}"
          class="card-img-top  p-3"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title text-truncate overflow-hidden text-nowrap">${data.data[randomNum].album.title}</h5>
          <p class="card-text text-truncate overflow-hidden">${data.data[randomNum].artist.name}</p>
        </div>
      </div>;` 
        row.appendChild(col);
      }
      
        
    })


    .catch((error)=>{
        console.log("errore",error)
    })
}



const formSearch = document.getElementById('ricerca2')
formSearch.addEventListener('submit', function (e) {
  e.preventDefault()
  const bar = document.getElementById('inputField')
  const calcolo = bar.value
  search(calcolo)})




  
  
  
  
const sidebar = document.getElementById("side-bar");
const middle = document.getElementById("col-middle");
  
const funz = function () {
    sidebar.classList.toggle("d-md-none");
    middle.classList.toggle("col-lg-9");
};