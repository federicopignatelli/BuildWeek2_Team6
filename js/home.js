const getBanner = async function () {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=blues"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      renderBanner(data);
    } else {
      throw new Error("Errore nel contattare il server");
    }
  } catch (error) {
    console.log("Si è verificato un errore:", error);
  }
};

getBanner();

const renderBanner = function (obj) {
  const row = document.getElementById("banner-row");
  for (let i = 0; i < 1; i++) {
    const randomNum = Math.round(Math.random() * 25);
    row.innerHTML = `  <div class="col-md-3">
        <a href="artist.html?artistid=${obj.data[randomNum].artist.id}" class="text-decoration-none">
    <img src=${obj.data[randomNum].artist.picture_medium} class="w-100" id="img" onload="start()" crossorigin="anonymous"  />
    </a>
      </div>
      <div class="col-md-5">
        <p class="text-white">ALBUM</p>

        <a href="album.html?albumId=${obj.data[randomNum].album.id}" class="text-decoration-none">
        <h1 class="text-white">${obj.data[randomNum].album.title}</h1>
        </a>

        <a class="text-decoration-none" href="artist.html?artistid=${obj.data[randomNum].artist.id}">
        <p class="text-white">${obj.data[randomNum].artist.name}</p>
        </a>

        <p class="text-white">Ascolta il nuovo singolo di <a class="text-decoration-none text-white" href="artist.html?artistid=${obj.data[randomNum].artist.id}">
        ${obj.data[randomNum].artist.name}
        </a>
        </p>
        <div class="col d-flex align-items-center">
          <button
            type="button"
            class="btn rounded-5 text-black px-3"
            style="background-color: rgb(54, 220, 49)"
          >
            Play
          </button>
          <button
            type="button"
            class="btn btn-black text-white border-1 border-white rounded-5 ms-3"
          >
            Salva
          </button>
          <i class="bi bi-three-dots fs-3 text-white-50 ms-3"></i>
        </div>
      </div>
      <div class="col-md-4 p-0 d-flex align-items-start justify-content-end">
        <button
          class="btn bg-black-50 text-white-50 w-50 px-0"
          style="font-size: 12px"
        >
          NASCONDI ANNUNCI
        </button>
      </div>`;
  }
};

const getSearchHome = async function () {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=blues"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      renderAlbumHome(data);
    } else {
      throw new Error("Errore nel contattare il server");
    }
  } catch (error) {
    console.log("Si è verificato un errore:", error);
  }
};

getSearchHome();

// const randomBand = () => {
//   randomNum = Math.round(Math.random() *100000000)
//   const url = "https://striveschool-api.herokuapp.com/api/deezer/"
//   return urlComplete = url + randomNum
// }
// console.log(randomBand())

const renderAlbumHome = function (obj) {
  const row = document.getElementById("firstRowCard");
  for (let i = 0; i < 6; i++) {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-md-4");
    const randomNum = Math.round(Math.random() * 25);
    col.innerHTML = `
    <div class="card mb-3 bg-dark bg-gradient-50 rounded-1">
    <div class="row g-0 d-flex align-items-center" id="hover">
    <div class=" col-3 rounded-1" style="width: 70px">
    <a class="text-decoration-none" href="album.html?albumId=${obj.data[randomNum].album.id}">
    <img
    src= "${obj.data[randomNum].album.cover_medium}"
    class="img-fluid rounded-1"
    alt="..."
    style="height: 70px; width: 65px"/>
    </a>
    </div>
    <div class="col-6">
    <div
    class="card-body m-0 p-0 ps-1 pt-2 d-flex align-items-center justify-content-between"
    >
    <p class="card-text text-white text-truncate overflow-hidden text-nowrap">
    <a class="text-decoration-none text-white" href="album.html?albumId=${obj.data[randomNum].album.id}">
    ${obj.data[randomNum].album.title}
    </a>
    </p>
    <div class="col-3" style="position: relative;">
    <figure class="effect-sadie">
    <figcaption>
    <a href="#"
    ><i
    class="bi bi-play-circle-fill fs-3 ps-2"
    style="color: rgb(54, 220, 49)"
    ></i
    ></a>
    </figcaption>
    </figure>
    </div>
    </div>
    </div>
    </div>
    </div>
    `;

    row.appendChild(col);
  }
};

console.log(renderAlbumHome)
//   qui creiamo seconde card
const getSearchHome2 = async function () {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=rock"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      render2(data);
    } else {
      throw new Error("Errore nel contattare il server");
    }
  } catch (error) {
    console.log("Si è verificato un errore:", error);
  }
};

getSearchHome2();

const render2 = function (obj) {
  const row = document.getElementById("second-row");
  for (let i = 0; i < 4; i++) {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-lg-3", "col-md-4");

    const randomNum = Math.round(Math.random() * 25);
    col.innerHTML = ` <div class="card sfondo-bottom text-white my-2">
    <a class="text-decoration-none" href="artist.html?artistid=${obj.data[randomNum].artist.id}">
    <img
      src="${obj.data[randomNum].artist.picture_medium}"
      class="card-img-top  p-3"
      alt="..."
    />
    </a>
    <div class="card-body">
    <a class="text-decoration-none text-white" href="album.html?albumId=${obj.data[randomNum].album.id}">
      <h5 class="card-title text-truncate overflow-hidden text-nowrap">${obj.data[randomNum].album.title}</h5>
      </a>

      <a href="artist.html?artistid=${obj.data[randomNum].artist.id}" style="text-decoration: none; color: #fff;">
      <p class="card-text text-truncate overflow-hidden">${obj.data[randomNum].artist.name}</p>
      </a>
    </div>
  </div>`;
    row.appendChild(col);
  }
};

const getSearchHome3 = async function () {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=trap"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      render3(data);
    } else {
      throw new Error("Errore nel contattare il server");
    }
  } catch (error) {
    console.log("Si è verificato un errore:", error);
  }
};

getSearchHome3();

const render3 = function (obj) {
  const row = document.getElementById("third-row");
  for (let i = 0; i < 4; i++) {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-lg-3", "col-md-4");
    const randomNum = Math.round(Math.random() * 25);
    col.innerHTML = ` <div class="card sfondo-bottom text-white my-2">
    <a class="text-decoration-none" href="album.html?albumId=${obj.data[randomNum].album.id}">
    <img
      src="${obj.data[randomNum].album.cover_medium}"
      class="card-img-top  p-3"
      alt="..."
    />
    </a>
    <div class="card-body">

      <a href="album.html?albumId=${obj.data[randomNum].album.id}" style="text-decoration: none; color: #fff;">
      <h5 class="card-title text-truncate overflow-hidden text-nowrap">${obj.data[randomNum].album.title}</h5>
      </a>

      <a href="artist.html?artistid=${obj.data[randomNum].artist.id}" style="text-decoration: none; color: #fff;">
     <p class="card-text text-truncate overflow-hidden text-nowrap">${obj.data[randomNum].artist.name}</p>
     </a>

    </div>
  </div>`;
    row.appendChild(col);
  }
};

const getSearchHome4 = async function () {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=classical"
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      render4(data);
    } else {
      throw new Error("Errore nel contattare il server");
    }
  } catch (error) {
    console.log("Si è verificato un errore:", error);
  }
};

getSearchHome4();

const render4 = function (obj) {
  const row = document.getElementById("fourth-row");
  for (let i = 0; i < 4; i++) {
    const col = document.createElement("div");
    col.classList.add("col-6", "col-lg-3", "col-md-4");
    const randomNum = Math.round(Math.random() * 25);
    col.innerHTML = ` <div class="card sfondo-bottom text-white my-2" >
    <a class="text-decoration-none" href="artist.html?artistid=${obj.data[randomNum].artist.id}">
    <img
      src="${obj.data[randomNum].artist.picture_medium}"
      class="card-img-top p-3"
      alt="..."
    />
    </a>
    <div class="card-body">
    <a class="text-decoration-none text-white" href="album.html?albumId=${obj.data[randomNum].album.id}">
      <h5 class="card-title text-truncate overflow-hidden text-nowrap">${obj.data[randomNum].album.title}</h5>
      <a href="artist.html?artistid=${obj.data[randomNum].artist.id}" style="text-decoration: none; color: #fff;">

      </a>
      <a href="artist.html?artistid=${obj.data[i].artist.id}" style="text-decoration: none; color: #fff;">

      <p class="card-text text-truncate overflow-hidden text-nowrap">${obj.data[randomNum].artist.name}</p>
      </a>
    </div>
  </div>`;
    row.appendChild(col);
  }
};

// -------------------------------------------------------------------------------------generatore colore

// crea un canvas con l'immagine e ne ritorno il context 2d
const draw = function (img) {
  let canvas = document.createElement('canvas')
  let c = canvas.getContext('2d')
  c.width = canvas.width = img.clientWidth
  c.height = canvas.height = img.clientHeight
  c.clearRect(0, 0, c.width, c.height)
  c.drawImage(img, 0, 0, img.clientWidth, img.clientHeight)
  return c
}

// scompone pixel per pixel e ritorna un oggetto con una mappa della loro frequenza nell'immagine
const getColors = function (c) {
  let col,
      colors = {}
  let pixels, r, g, b, a
  r = g = b = a = 0
  pixels = c.getImageData(0, 0, c.width, c.height)
  for (let i = 0, data = pixels.data; i < data.length; i += 4) {
      r = data[i]
      g = data[i + 1]
      b = data[i + 2]
      a = data[i + 3]
      if (a < 255 / 2) continue
      col = rgbToHex(r, g, b)
      if (!colors[col]) colors[col] = 0
      colors[col]++
  }
  return colors
}

// trova il colore più ricorrente data una mappa di frequenza dei colori
const findMostRecurrentColor = function (colorMap) {
  let highestValue = 0
  let mostRecurrent = null
  for (const hexColor in colorMap) {
      if (colorMap[hexColor] > highestValue) {
          mostRecurrent = hexColor
          highestValue = colorMap[hexColor]
      }
  }
  return mostRecurrent
}

// converte un valore in rgb a un valore esadecimale
const rgbToHex = function (r, g, b) {
  if (r > 255 || g > 255 || b > 255) {
      throw 'Invalid color component'
  } else {
      return ((r << 16) | (g << 8) | b).toString(16)
  }
}

// inserisce degli '0' se necessario davanti al colore in esadecimale per renderlo di 6 caratteri
const pad = function (hex) {
  return ('000000' + hex).slice(-6)
}

const colorCentralSection = document.querySelector(".central-sections")
const start = function () {
  // prendo il riferimento all'immagine del dom
  let imgReference = document.querySelector('#img')

  // creo il context 2d dell'immagine selezionata
  let context = draw(imgReference)

  // creo la mappa dei colori più ricorrenti nell'immagine
  let allColors = getColors(context)

  // trovo colore più ricorrente in esadecimale
  let mostRecurrent = findMostRecurrentColor(allColors)

  // se necessario, aggiunge degli '0' per rendere il risultato un valido colore esadecimale
  let mostRecurrentHex = pad(mostRecurrent)
  // console.log del risultato
  console.log(mostRecurrentHex)
  colorCentralSection.style.background = `linear-gradient(180deg, #${mostRecurrentHex} 0%, rgba(0, 0, 0, 1) 67%)`;
  colorCentralSection.style.backgroundAttachment = "fixed";
}