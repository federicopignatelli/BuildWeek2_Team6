const getSearchHome = async function () {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica"
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

const renderAlbumHome = function (obj) {
  const row = document.getElementById("firstRowCard");
  obj.data.forEach((dataArray) => {
    // const col = document.createElement("div");
    // col.classList.add("col-4");
    row.innerHTML = `<div class= "col-4">
    <div class="card mb-3 bg-black rounded-1">
    <div class="row g-0 d-flex align-items-center" id="hover">
      <div class="col-md-4 rounded-1" style="width: 70px">
        <img
          src= "${dataArray.artist.picture_medium}"
          class="img-fluid rounded-1"
          alt="..."
          style="height: 70px; width: 65px"
        />
      </div>
      <div class="col-md-8">
        <div
          class="card-body p-0 ps-2 pt-3 d-flex align-items-center justify-content-between"
        >
          <p class="card-text text-white">
            ${dataArray.album.title}
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
  </div>
  `;

    // row.appendChild(col);
  });
};
