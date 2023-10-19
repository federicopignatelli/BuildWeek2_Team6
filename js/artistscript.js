const address = new URLSearchParams(location.search)
const artistId = address.get('artistid')
console.log(artistId)



fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}/top?limit=50`)
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
        renderMusic(music)
        renderMusic2(music)
    })

    .catch(err => {
        console.log('err', err)
    })


const renderMusic = function (song) {
    const musicContainer = document.getElementById('PopularMusic')

    for (let i = 0; i < 5; i++) {
        const newRow = document.createElement('div')
        newRow.classList.add('row', 'mb-3')

        newRow.innerHTML = `<div class="col col-1">
        <p class="text-white ps-2 d-none d-md-flex" style="text-align: center; padding-top: 15px;">${i + 1}</p>
    </div>
    <div class="col col-3 col-md-3 col-lg-2 col-xxl-1">
        <img src="${song.data[i].album.cover_small}" alt="img" width="55px">
    </div>
    <div class="col col-7 col-md-7 col-lg-8 col-xxl-9 ps-xxl-4"
        style="line-height: 15px; padding-top: 12px; padding-left: 0px;">
      <div class="row flex-column flex-md-row">
          <div class="col col-6">
            <p class="text-white text-truncate overflow-hidden text-nowrap">${song.data[i].title}</p>
          </div>
          <div class="col col-3">
            <p class="text-white opacity-50" style="font-weight: 300; font-size: 14px;">${song.data[i].rank}</p>
          </div>
          <div class="col col-3 d-none d-md-flex ps-2">
            <p class="text-white opacity-50" style="font-weight: 300; font-size: 14px;">${Math.floor(song.data[i].duration / 60)}:${song.data[i].duration % 60}</p>
          </div>
      </div>
    </div>

    <div class="col col-1 pt-3 ps-1">
        <i class="bi bi-three-dots-vertical text-white"></i>
    </div>`

        musicContainer.appendChild(newRow)

    };
}


const renderMusic2 = function (song) {
    const musicContainer = document.getElementById('altro')

    for (let i = 5; i < 10; i++) {
        const newRow = document.createElement('div')
        newRow.classList.add('row', 'mb-3')

        newRow.innerHTML = `<div class="col col-1">
        <p class="text-white ps-2 d-none d-md-flex" style="text-align: center; padding-top: 15px;">${i + 1}</p>
    </div>
    <div class="col col-3 col-md-3 col-lg-2 col-xxl-1">
        <img src="${song.data[i].album.cover_small}" alt="img" width="55px">
    </div>
    <div class="col col-7 col-md-7 col-lg-8 col-xxl-9 ps-xxl-4"
        style="line-height: 15px; padding-top: 12px; padding-left: 0px;">
      <div class="row flex-column flex-md-row">
          <div class="col col-6">
            <p class="text-white text-truncate overflow-hidden text-nowrap">${song.data[i].title}</p>
          </div>
          <div class="col col-3">
            <p class="text-white opacity-50" style="font-weight: 300; font-size: 14px;">${song.data[i].rank}</p>
          </div>
          <div class="col col-3 d-none d-md-flex ps-2">
            <p class="text-white opacity-50" style="font-weight: 300; font-size: 14px;">${song.data[i].duration}</p>
          </div>
      </div>
    </div>

    <div class="col col-1 pt-3 ps-1">
        <i class="bi bi-three-dots-vertical text-white"></i>
    </div>`

        musicContainer.appendChild(newRow)

    };
}


const getInfoByArtist = function () { //qua capire come comporre il link
    // fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/2/top?limit=50' + artistId)
    //fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId + 'top')
    fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/' + artistId)
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
            renderIconLiked(music)

        })

        .catch(err => {
            console.log('err', err)
        })
}
getInfoByArtist()



const renderCover = function (music) {
    const rowcover = document.getElementById('header-artist')
    rowcover.innerHTML = `<div class="col col-12 p-0 m-0 d-flex justify-content-center bg-black" 
                     style="position: relative; height: 50vh;">

    <img src="${music.picture_xl}" alt="imgartist"
        style="opacity: 0.6; width: 100%; object-fit: cover; object-position: 0 -50px;">

    <div class="col col-11" style="position: absolute; bottom: 10px; left: 25px;">
        <h1 class="text-white fs-1">${music.name}</h1>
        <p class="text-white">${music.nb_fan} ascoltatori mensili</p>
    </div>
</div>`
}

const renderIconLiked = function (data) {
    const containerliked = document.getElementById('musicliked')
    containerliked.innerHTML = `
    <div class="row mt-4 mb-3 mt-md-4 d-none d-md-inline">
                <div class="col">
                    <h3 class="text-white">Brani che ti piacciono</h3>
                </div>
            </div>
            <div class="d-flex">
                    <div class="d-flex d-md-inline" style="
                    background-image: url('${data.picture_small}');
                    height: 68px;
                    width: 68px;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    border-radius: 100%;
                    position: relative;">

                        <div style="
                    position: absolute; 
                    top: 40px; 
                    right: 3px;
                    width: 25px;
                    height: 25px;
                    background-color: #8bd3a4;
                    border: 3px solid #fff;
                    border-radius: 100%;">
                            <div style="position: relative;">
                                <i class="bi bi-heart-fill text-black"
                                    style="font-size: 10px; position: absolute; top: 4px; left: 4px;"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="align-items-center d-md-flex" style="line-height: 8px;">
                    
                        <p class="text-white d-md-none">Brani che ti piacciono
                        </p>
                        <p class="text-white opacity-50 m-0 ms-2" style="font-weight: 300; font-size: 14px; line-height: 16px;">26 brani di ${data.name}
                        </p>
                    </div>
                    
                
            </div>`
}





// const followButton = function () {
//     const button = document.getElementById('followButton')
//     button.addEventListener('click', function (e) {
//         button.style.color = "#1DB954"
//     })
// }



