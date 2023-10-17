const nameBande = 


const getSearchHome = async function () {
    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=')
        if (response.ok) {
            const data = await response.json()
            console.log(data)
        } else {
            throw new Error('Errore nel contattare il server')
        }
    } catch (error) {
        console.log('Si è verificato un errore:', error)
    }
}

getSearchHome()

const renderAlbumHome = function () {

}