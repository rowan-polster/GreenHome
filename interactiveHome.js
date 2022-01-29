let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("btn-close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

function openModal(e) {
  let clickedId = e.target.id;

  let modalText = {
    windows: { title: "Windows", body: "Windows Lorem ipsum" },
    wall: { title: "Wall", body: "Wall Lorem ipsum" },
    acUnit: { title: "AC Unit", body: "AC Lorem ipsum" },
    floor: { title: "Floor", body: "Floor Lorem ipsum" },
    fridge: { title: "Fridge", body: "Fridge Lorem ipsum" }
  };

  //Switch out modal's head and body text
  let title = document.getElementsByClassName("modal-title")[0];
  title.innerHTML = modalText[clickedId].title;
  let body = document.getElementsByClassName("modal-body")[0];
  body.innerHTML = modalText[clickedId].body;

  // When the user clicks the button, open the modal
  modal.style.display = "block";
}

function areaHover() {
  // for (let i = 0; i < document.getElementsByTagName("area").length; i++) {
  //   document.getElementsByTagName("area")[i].style.cursor = "pointer";
  // }
}
