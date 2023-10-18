const address = new URLSearchParams(location.search)
const artistId = address.get('id')
console.log(artistId)


const getMusicByArtist = function () {
    //fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId)
    fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/2')
        .then((res) => {
            console.log('ok', res)
            if (res.ok) {
                return res.json()
            }
            else {
                throw new Error('ce un errore')
            }
        })
        .then(music => {
            console.log('music', music)
            renderCover(music)
        })

        .catch(err => {
            console.log('err', err)
        })
}
getMusicByArtist()

const renderCover = function (data) {
    const rowcover = document.getElementById('header-artist')
    rowcover.innerHTML = `
    <div class="col col-12 p-0 m-0" style="position: relative; max-height: 60vh;">
                <img src="${data.picture_xl}" alt="imgartist"
                    style="opacity: 0.6; width: 100%; max-width: 100%; max-height: 100%;">
                <div class="col col-11" style="position: absolute; bottom: 10px; left: 25px;">
                    <h1 class="text-white fs-1">${data.name}</h1>
                    <p class="text-white">${data.nb_fan} ascoltatori mensili</p>
                </div>
            </div>`
}



