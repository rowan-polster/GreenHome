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
    windows: { title: "Windows", body: `Solar panels don’t have to be clunky and intrusive - Solar Window Technologies Inc develops clear glass and plastic solar windows to be used in homes, cars, and commercial businesses. According to their website, this year they’ve achieved a record 14.72% power conversion efficiency (PCE) using industry-standard performance testing. Check them out here!`,
    link: "https://www.solarwindow.com/" },
    fan: { title: "fan", body: `What if you could produce light using plants? You can! Several research teams have created algae-powered lamps, which are completely self-sufficient and have the added benefit of absorbing CO2 from the air. Check out some of the algae lamps in development below!`,
    link: "https://sustainable-nano.com/2015/03/03/algae-lamps/" },
    acUnit: { title: "AC Unit", body: `According to some studies, houseplants not only clean air, but they also improve our mental health. Besides these things, one company is even using plants to power electricity using the microorganisms in soil. Check out this doctor’s article about the mental health benefits of plants and biootech.com’s research and development projects!`,
    link: "https://wexnermedical.osu.edu/blog/houseplants-are-good-for-your-mental-health" },
    floor: { title: "Floor", body: `Hardwood requires deforestation. Bamboo, on the other hand, is a fast-growing grass that can be harvested many times without harming the plant itself. Check out bamboo flooring options!`,
    link: "https://www.greenbuildingsupply.com/All-Products/Flooring-Bamboo" },
    fridge: { title: "Fridge", body: `According to the most recent climate report by the IPCC, the largest producer of CO2 emissions is the transportation sector. This includes the food we eat - meaning eating locally is a far more sustainable option. Community Supported Agriculture (CSA) is a fantastic way to support local farms, eat healthier produce, and lower your carbon footprint. Find a CSA near you!`,
    link: "https://www.ams.usda.gov/local-food-directories/csas" }
  };

  //Switch out modal's head and body text
  let title = document.getElementsByClassName("modal-title")[0];
  title.innerHTML = modalText[clickedId].title;
  let body = document.getElementsByClassName("modal-body")[0];
  body.innerHTML = modalText[clickedId].body;
  // let link = document.getElementsByClassName("modal-link")[0];
  // body.innerHTML = modalText[clickedId].link;

  // When the user clicks the button, open the modal
  modal.style.display = "block";
}

function areaHover() {
  // for (let i = 0; i < document.getElementsByTagName("area").length; i++) {
  //   document.getElementsByTagName("area")[i].style.cursor = "pointer";
  // }
}
