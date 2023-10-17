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
            renderMusic(music)
        })

        .catch(err => {
            console.log('err', err)
        })
}

getMusicByArtist()

const renderMusic = function () {

}