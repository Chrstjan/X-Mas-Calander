const mainContainer = document.getElementById("main-section");

const christmasImagesArray = [
  "Date_01.jpg",
  "Date_02.jpg",
  "Date_03.jpg",
  "Date_04.jpg",
  "Date_05.jpg",
  "Date_06.jpg",
  "Date_07.jpg",
  "Date_08.jpg",
  "Date_09.jpg",
  "Date_10.jpg",
  "Date_11.jpg",
  "Date_12.jpg",
  "Date_13.jpg",
  "Date_14.jpg",
  "Date_15.jpg",
  "Date_16.jpg",
  "Date_17.jpg",
  "Date_18.jpg",
  "Date_19.jpg",
  "Date_20.jpg",
  "Date_21.jpg",
  "Date_22.jpg",
  "Date_23.jpg",
  "Date_24.jpg",
];

const baseUrl = "./Assets/images/";

const makeCalander = () => {
  christmasImagesArray.forEach((img) => {
    const imageFigure = document.createElement("figure");
    imageFigure.classList.add("calander-figure");

    const galleryImage = document.createElement("img");
    const galleryImageSovs = baseUrl + img;
    galleryImage.src = galleryImageSovs;

    imageFigure.appendChild(galleryImage);
    mainContainer.appendChild(imageFigure);
  });
};

window.addEventListener("load", () => {
  makeCalander();
});
