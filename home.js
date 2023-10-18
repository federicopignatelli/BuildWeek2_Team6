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
    row.innerHTML = `  <div class="col-lg-3">
        <img src=${obj.data[randomNum].artist.picture_medium} class="w-100" />
      </div>
      <div class="col-lg-5">
        <p class="text-white">ALBUM</p>
        <h1 class="text-white">${obj.data[randomNum].album.title}</h1>
        <p class="text-white">${obj.data[randomNum].artist.name}</p>
        <p class="text-white">Ascolta il nuovo singolo di ${obj.data[randomNum].artist.name}</p>
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
      <div class="col-4 p-0 d-flex align-items-start justify-content-end">
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
    <div class="card mb-3 bg-black rounded-1">
    <div class="row g-0 d-flex align-items-center" id="hover">
    <div class="col-md-4 rounded-1" style="width: 70px">
    <img
    src= "${obj.data[randomNum].artist.picture_medium}"
    class="img-fluid rounded-1"
    alt="..."
    style="height: 70px; width: 65px"/>
    </div>
    <div class="col">
    <div
    class="card-body p-0 ps-2 pt-3 d-flex align-items-center justify-content-between"
    >
    <p class="card-text text-white">
    ${obj.data[randomNum].album.title}
    </p>
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
    `;

    row.appendChild(col);
  }
};

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
    col.innerHTML = ` <div class="card bg-black text-white my-2">
    <img
      src="${obj.data[randomNum].artist.picture_medium}"
      class="card-img-top  p-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-truncate overflow-hidden text-nowrap">${obj.data[randomNum].album.title}</h5>
      <p class="card-text text-truncate overflow-hidden">${obj.data[randomNum].artist.name}</p>
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
    col.innerHTML = ` <div class="card bg-black text-white my-2">
    <img
      src="${obj.data[randomNum].artist.picture_medium}"
      class="card-img-top  p-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-truncate overflow-hidden text-nowrap">${obj.data[randomNum].album.title}</h5>
      <p class="card-text text-truncate overflow-hidden text-nowrap">${obj.data[randomNum].artist.name}</p>
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
    col.innerHTML = ` <div class="card bg-black text-white my-2" >
    <img
      src="${obj.data[randomNum].artist.picture_medium}"
      class="card-img-top p-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-truncate overflow-hidden text-nowrap">${obj.data[randomNum].album.title}</h5>
      <p class="card-text text-truncate overflow-hidden text-nowrap">${obj.data[randomNum].artist.name}</p>
    </div>
  </div>`;
    row.appendChild(col);
  }
};
