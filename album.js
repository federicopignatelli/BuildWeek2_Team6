const navbar = document.getElementById("navbar")
const nameAlbum = document.getElementById("nameAlbum")
const cardContainer = document.getElementById("card-container")
const albumNavbar = document.createElement("span")



// const addressBarContent = new URLSearchParams(location.search)
// const albumId = addressBarContent.get("albumId")
const albumId = "75621062"

const header = (obj1) => {

    const header = document.getElementById("header")
    const iconBar = document.getElementById("icon-bar")


    header.innerHTML = `
    <div class="d-none d-md-flex mt-3 mx-2">

    <div class="col-3 col-xl-2">
    <img src="${obj1.cover_xl}" alt="album-image" class="w-100" id="main-album-img">
    </div>

    <div class="col-9 d-flex flex-column justify-content-end ms-4">

    <span class="fw-bold" style="font-size:10px;">ALBUM</span>
    <h1 class="" style="font-size:40px; font-weight:900">${obj1.title}</h1>

    <p class="align-middle mb-0 fw-normal" style="font-size:14px">

    <img class="rounded-circle" style="width:30px" src="${obj1.artist.picture_small}" alt="artist-icon">
    <a class="btn border-0 text-light ps-1 fw-bold pe-0 fw-bold" style="font-size:14px">${obj1.artist.name}</a>
    <span class="align-middle" style="font-size:14px" id="anno-album">· ${obj1.release_date.slice(0,4)} · </span>
    <span class="">${obj1.nb_tracks} brani,</span>
    <span class="opacity-50">${Math.round(obj1.duration/60)} min</span>
    <span class="opacity-50">${obj1.duration%60} sec.</span>

    </p>

    </div>

    </div>
    <div class="d-flex d-md-none justify-content-center">
    <img src="${obj1.cover_xl}" alt="album-image" class="w-50 mt-4" id="main-album-img">
    </div>
    
    <div class="my-2 d-md-none">
    
    <h2 class="mt-4">${obj1.title}</h2>
    
    <div class="">
        <img class="rounded-circle" style="width:30px" src="${obj1.artist.picture_small}" alt="artist-icon">
        <a class="btn border-0 text-light ps-1 fw-bold" style="font-size:14px">${obj1.artist.name}</a>
        <p class="my-3" style="font-size:12px">Album · <span id="anno-album">${obj1.release_date.slice(0,4)}</span></p>
    </div>
    
    </div>
    `
    iconBar.innerHTML = `
    <div class="">
    <a class="text-light border-0 btn fs-5"><i class="bi bi-heart"></i></a>
    <a class="text-light border-0 btn fs-5"><i class="bi bi-arrow-down-circle"></i></a>
    <a class="text-light border-0 btn fs-5"><i class="bi bi-three-dots-vertical"></i></a>
    </div>

    <div>
    <a class="text-light border-0 btn fs-5"><i class="bi bi-shuffle"></i></a>
    <a class="text-light border-0 btn bg-success rounded-circle py-2 px-2"
        style="font-size: 25px;"><i class="bi bi-play-fill d-flex"></i></a>
    </div>
    `
}

const hideSpinner = function () {
    const spinner = document.getElementById('spinner')
    spinner.classList.add('d-none')
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

        <a class="text-light btn fs-5 border-0" href=""><i class="bi bi-three-dots-vertical"></i></a>

        </div>
        `
        cardContainer.appendChild(cardSong)
    })
}



fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId)

    .then((response) => {
        hideSpinner()
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
        navbar.style.backgroundColor = "rgb(135, 111, 34)"
        navbar.style.boxShadow = "0px 0px 60px black"
        albumNavbar.style.opacity = "1"
    } else {
        navbar.style.boxShadow = ""
        navbar.style.backgroundColor = "rgba(156, 111, 34, 0)"
        albumNavbar.style.opacity = "0"
    }
})