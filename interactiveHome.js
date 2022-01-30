let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("btn-close")[0];
let modalText = {
  windows: {
    title: "Windows",
    body: `<p>Solar panels don’t have to be clunky and intrusive - Solar Window Technologies Inc develops clear glass and plastic solar windows to be used in homes, cars, and commercial businesses. According to their website, this year they’ve achieved a record 14.72% power conversion efficiency (PCE) using industry-standard performance testing. Check them out here!</p><a href="https://www.solarwindow.com/" target="_blank" rel="noopener noreferrer">Check it out!</a>`,
    clicked: false
  },
  fan: {
    title: "fan",
    body: `<p>What if you could produce light using plants? You can! Several research teams have created algae-powered lamps, which are completely self-sufficient and have the added benefit of absorbing CO2 from the air. Check out some of the algae lamps in development below!</p><a href="https://sustainable-nano.com/2015/03/03/algae-lamps/" target="_blank" rel="noopener noreferrer">Check it out!</a>`,
    clicked: false
  },
  acUnit: {
    title: "AC Unit",
    body: `<p>According to some studies, houseplants not only clean air, but they also improve our mental health. Besides these things, one company is even using plants to power electricity using the microorganisms in soil. Check out this doctor’s article about the mental health benefits of plants and biootech.com’s research and development projects!</p><a href="https://wexnermedical.osu.edu/blog/houseplants-are-good-for-your-mental-health" target="_blank" rel="noopener noreferrer">Check it out!</a>`,
    clicked: false
  },
  floor: {
    title: "Floor",
    body: `<p>Hardwood requires deforestation. Bamboo, on the other hand, is a fast-growing grass that can be harvested many times without harming the plant itself. Check out bamboo flooring options!</p><a href="https://www.greenbuildingsupply.com/All-Products/Flooring-Bamboo" target="_blank" rel="noopener noreferrer">Check it out!</a>`,
    clicked: false
  },
  fridge: {
    title: "Fridge",
    body: `<p>According to the most recent climate report by the IPCC, the largest producer of CO2 emissions is the transportation sector. This includes the food we eat - meaning eating locally is a far more sustainable option. Community Supported Agriculture (CSA) is a fantastic way to support local farms, eat healthier produce, and lower your carbon footprint. Find a CSA near you!</p><a href="https://www.ams.usda.gov/local-food-directories/csas" target="_blank" rel="noopener noreferrer">Check it out!</a>`,
    clicked: false
  },
  "green-windows": {
    title: "Windows Placeholder",
    body: `<p>Lorem ipsum</p><a href="https://www.ams.usda.gov/local-food-directories/csas" target="_blank" rel="noopener noreferrer">Check it out!</a>`,
    clicked: false
  },
  "green-fan": {
    title: "Fan Placeholder",
    body: `<p>Lorem ipsum</p><a href="https://www.ams.usda.gov/local-food-directories/csas" target="_blank" rel="noopener noreferrer">Check it out!</a>`,
    clicked: false
  },
  "green-fridge": {
    title: "Fridge Placeholder",
    body: `<p>Lorem ipsum</p><a href="https://www.ams.usda.gov/local-food-directories/csas" target="_blank" rel="noopener noreferrer">Check it out!</a>`,
    clicked: false
  },
  plants: {
    title: "Plant Placeholder",
    body: `<p>Lorem ipsum</p><a href="https://www.ams.usda.gov/local-food-directories/csas" target="_blank" rel="noopener noreferrer">Check it out!</a>`,
    clicked: false
  },
  "green-floor": {
    title: "Floor Placeholder",
    body: `<p>Lorem ipsum</p><a href="https://www.ams.usda.gov/local-food-directories/csas" target="_blank" rel="noopener noreferrer">Check it out!</a>`,
    clicked: false
  }
};
let progress = 0;

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

  //Switch out modal's head and body text
  let title = document.getElementsByClassName("modal-title")[0];
  title.innerHTML = modalText[clickedId].title;
  let body = document.getElementsByClassName("modal-body")[0];
  body.innerHTML = modalText[clickedId].body;

  // When the user clicks the button, open the modal
  modal.style.display = "block";

  // Check if button has already been clicked before updating progress bar
  if (modalText[clickedId].clicked === false) {
    updateProgress();
    modalText[clickedId].clicked = true;
  }
}

function updateProgress() {
  progress += 20;

  let progressBar = document.getElementsByClassName("progress-bar")[0];
  progressBar.style.width = progress + "%";
  progressBar.ariaValuenow = progress;

  // Enable button to next page
  if (progress == 100) {
    let greenhomeButton = document.getElementById("greenhome-button");
    greenhomeButton.classList.remove("disabled");
  }
}

function areaHover() {
  // for (let i = 0; i < document.getElementsByTagName("area").length; i++) {
  //   document.getElementsByTagName("area")[i].style.cursor = "pointer";
  // }
}
