function areaClick(e) {
  var clickedId = e.target.id;

  var modalText = {
    windows: { title: "Windows", body: "Windows Lorem ipsum" },
    wall: { title: "Wall", body: "Wall Lorem ipsum" },
    acUnit: { title: "AC Unit", body: "AC Lorem ipsum" },
    floor: { title: "Floor", body: "Floor Lorem ipsum" },
    fridge: { title: "Fridge", body: "Fridge Lorem ipsum" }
  };

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById(clickedId);

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("btn-close")[0];

  //Switch out modal's head and body text
  var title = document.getElementsByClassName("modal-title")[0];
  title.innerHTML = modalText[clickedId].title;

  var body = document.getElementsByClassName("modal-body")[0];
  body.innerHTML = modalText[clickedId].body;

  // When the user clicks the button, open the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function areaHover(e) {
  let hoveredId = e.target.id;
  console.log("hovering: ", hoveredId);

  console.log(hoveredId);
  if (hoveredId == "windows") {
    document.getElementById("windows-hover").style.display = "inline";
    console.log("hovered on windows");
  }

  console.log("hovering still?");
  // check what is being hovered over
  // if it is window, change image's display to inline

  // for (let i = 0; i < document.getElementsByTagName("area").length; i++) {
  //   document.getElementsByTagName("area")[i].style.cursor = "pointer";
  // }
}

function areaOut(e) {
  let hoveredId = e.target.id;
  console.log(hoveredId);
  if (hoveredId == "windows") {
    document.getElementById("windows-hover").style.display = "none";
    console.log("hovered on windows");
  }
}
