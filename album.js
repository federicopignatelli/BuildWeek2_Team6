const navbar = document.getElementById("navbar")
const nameAlbum = document.getElementById("nameAlbum")
const cardContainer = document.getElementById("card-container")
const albumNavbar = document.createElement("span")



// const addressBarContent = new URLSearchParams(location.search)
// const albumId = addressBarContent.get("albumId")
const albumId = "75621062"

const header = (obj1) => {

    const header = document.getElementById("header")

    header.innerHTML = `
    <div class="d-flex justify-content-center">
    <img src="${obj1.cover_medium}" alt="album-image" class="w-50 mt-3" id="main-album-img">
    </div>
    
    <div class="my-2">
    
    <h2 class="mt-4">${obj1.title}</h2>
    
    <div class="">
        <img class="rounded-circle" style="width:30px" src="${obj1.artist.picture_small}" alt="artist-icon">
        <a class="btn border-0 text-light ps-1 fw-bold" style="font-size:14px">${obj1.artist.name}</a>
        <p class="my-3" style="font-size:12px">Album · <span id="anno-album">${obj1.release_date.slice(0,4)}</span></p>
    </div>
    
    </div>
    `
}

const songs = (obj1) => {

    albumNavbar.innerHTML = `${obj1.title}`
    albumNavbar.style.fontSize = "12px"
    albumNavbar.style.opacity = "0"
    albumNavbar.classList.add("ms-3")
    navbar.appendChild(albumNavbar)

    header(obj1)

    obj1.tracks.data.forEach((objData) => {

        const cardSong = document.createElement("div")
        cardSong.classList.add("d-flex", "justify-content-between")
        cardSong.innerHTML = `
        <div>
        <a class="btn text-start p-0 text-light border-0" href=""><h6 class="fw-bold mb-0">${objData.title}</h6></a>
        <p class="" style="font-size:12px">${objData.artist.name}</p>

        </div>

        <div>

        <a class="text-light btn fs-5"><i class="bi bi-three-dots-vertical"></i></a>

        </div>
        `
        cardContainer.appendChild(cardSong)
    })
}



fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId)

    .then((response) => {

        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Errore")
        }
    })
    .then((obj) => {
        console.log(obj)
        songs(obj)
    })
    .catch((err) => {
        console.log(err)
    })





window.addEventListener("scroll", () => {
    if (window.scrollY > 160) {
        navbar.style.backgroundColor = "rgb(156, 111, 34)"
        navbar.style.boxShadow = "0px 0px 60px black"
        albumNavbar.style.opacity = "1"
    } else {
        navbar.style.boxShadow = ""
        navbar.style.backgroundColor = "rgba(156, 111, 34, 0)"
        albumNavbar.style.opacity = "0"
    }
})