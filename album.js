const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        navbar.style.background = "linear-gradient(180deg, rgba(196,141,43,1) 0%, rgba(0,200,0,1) 67%)"
    } else {
        // navbar.style.background = "linear-gradient(180deg, rgba(196, 140, 43, 0) 0%, rgba(0,0,0,1) 67%)"
        navbar.style.background = "rgba(196, 140, 43, 0)"
    }
})


const albumId = "75621062"

fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId)

.then( (response) => {
    if (response.ok) {
        response.json()
    } else {
        throw new Error("Errore")
    }
})
.then( (obj) => {
    console.log(obj)
})
.catch( (err) => {
    console.log(err)
})
