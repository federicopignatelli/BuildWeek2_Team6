const navbar = document.getElementById("navbar")
const nameAlbum = document.getElementById("nameAlbum")
const cardContainer = document.getElementById("card-container")




// const addressBarContent = new URLSearchParams(location.search)
// const albumId = addressBarContent.get("albumId")
const albumId = "75621062"

const songs = (obj1) => {

    // const albumNavbar = `<span class="position-relative" style="left:35vw" id="nameAlbum">Album</span>`
    // navbar.appendChild(albumNavbar)

    const header = document.getElementById("header")

    header.innerHTML = `
    <div class="d-flex justify-content-center">
    <img src="${obj1.cover_medium}" alt="album-image" class="w-50" id="main-album-img">
</div>

<div class="my-2">

    <h2 class="mt-4">${obj1.title}</h2>

    <div class="">
        <img class="rounded-circle" style="width:30px" src="${obj1.artist.picture_small}" alt="artist-icon">
        <span class="ms-1">${obj1.artist.name}</span>
        <p class="my-3" style="font-size:14px">Album · <span id="anno-album">${obj1.release_date}</span></p>
    </div>

</div>
`

    obj1.tracks.data.forEach((objData) => {

        const cardSong = document.createElement("div")
        cardSong.classList.add("d-flex", "justify-content-between")
        cardSong.innerHTML = `
        <div>
        <h5 class="fw-bold">${objData.title}</h5>
        <p>${objData.artist.name}</p>

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
        navbar.style.boxShadow = "5px 5px 20px black"
        nameAlbum.style.opacity = "1"
    } else {
        navbar.style.boxShadow = ""
        navbar.style.backgroundColor = "rgba(156, 111, 34, 0)"
        nameAlbum.style.opacity = "0"
    }
})