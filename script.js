const form = document.querySelector("#routeForm");

const routePages = {
  "mot-level1": "mot-level1.html",
  "soch": "soch.html",
  "dem-emb-hds": "dem-emb-hds.html",
  "singhealth-ambulance-bay": "singhealth-ambulance-bay.html",
  "singhealth-occ": "singhealth-occ.html",
  "ward43c": "ward43c.html",
  "ward52b": "ward52b.html",
  "ward7576": "ward7576.html",
  "wards5758": "wards5758.html"
};

const places = {
  "mot-level1": {
    name: "Major Operating Theatre (MOT)",
    image: "routeimages/p1_mot2/MOT.jpg"
  },
  "soch": {
    name: "SOC H",
    image: "routeimages/p3_soch/SOCH.jpg"
  },
  "academia": {
    name: "Academia Auditorium",
    image: "routeimages/p1_mot2/academia.jpg"
  },
  "dem-emb-hds": {
    name: "DEM@EMB HDS",
    image: "routeimages/DEM@EMB  HDS/Step 0 -  DEM@EMB _ HDS.jpg"
  },
  "singhealth-ambulance-bay": {
    name: "SingHealth Tower (Ambulance Bay)",
    image: "routeimages/SingHealth Tower (Ambulance Bay)/Step 0 - SingHealth Tower (Ambulance Bay).jpg"
  },
  "singhealth-occ": {
    name: "SingHealth Tower (SGH Campus OCC)",
    image: "routeimages/SingHealth Tower (SGH Campus OCC)/Step 0 -  SingHealth Tower (SGH Campus OCC).jpg"
  },
  "ward43c": {
    name: "Ward 43C (TICU/Burns)",
    image: "routeimages/Ward 43C (TICU_Burns)/Step 0 - Ward 43C (TICU _ Burns).jpg"
  },
  "ward52b": {
    name: "Ward 52B (TICU/ICU)",
    image: "routeimages/Ward 52B (TICU_ICU)/Step 0 - Ward 52B (TICU _ ICU).jpg"
  },
  "ward7576": {
    name: "Disaster Wards 75 & 76",
    image: "routeimages/Ward7576/Step 0 - ward75_76.jpg"
  },
  "wards5758": {
    name: "Disaster Wards 57 & 58",
    image: "routeimages/Wards 5758/Step 0 - 57_58.jpg"
  }
};

if (form) {
  const startSelect = document.querySelector("#startLocation");
  const destinationSelect = document.querySelector("#destination");
  const message = document.querySelector("#formMessage");

  function updatePreview(value, previewId, imageId, nameId) {
    const preview = document.querySelector(previewId);
    const image = document.querySelector(imageId);
    const name = document.querySelector(nameId);
    const place = places[value];

    if (!place) {
      preview.hidden = true;
      image.removeAttribute("src");
      image.alt = "";
      name.textContent = "";
      return;
    }

    image.src = place.image;
    image.alt = "Preview photograph for " + place.name;
    name.textContent = place.name;
    preview.hidden = false;
  }

  startSelect.addEventListener("change", function () {
    updatePreview(startSelect.value, "#startPreview", "#startPreviewImage", "#startPreviewName");
    message.textContent = "";
  });

  destinationSelect.addEventListener("change", function () {
    updatePreview(destinationSelect.value, "#destinationPreview", "#destinationPreviewImage", "#destinationPreviewName");
    message.textContent = "";
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const startLocation = startSelect.value;
    const destination = destinationSelect.value;

    if (!startLocation || !destination) {
      message.textContent = "Please select your current location and destination.";
      return;
    }

    // Academia Auditorium is the only MVP destination, so routing is based on the start point.
    window.location.href = routePages[startLocation];
  });
}
