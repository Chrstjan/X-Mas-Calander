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

//I AM THE SENATE
const notYetImage = "date_01_no.jpg";

const calanderGiftArray = ["christmas-gift.svg", "christmas-tree.svg", "christmas-snowman.svg", "christmas-hat.svg"];

const shuffledGiftArray = calanderGiftArray.sort(() => 0.5 - Math.random());

const baseUrl = "./Assets/images/";

const makeCalander = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  christmasImagesArray.forEach((img, index) => {
    const imageFigure = document.createElement("figure");
    imageFigure.classList.add("calander-figure");

    const imageIdArray = [
      "doorOne",
      "doorTwo",
      "doorThree",
      "doorFour",
      "doorFive",
      "doorSix",
      "doorSeven",
      "doorEight",
      "doorNine",
      "doorTen",
      "doorEleven",
      "doorTwelve",
      "doorThirteen",
      "doorFourteen",
      "doorFifteen",
      "doorSixteen",
      "doorSeventeen",
      "doorEighteen",
      "doorNineteen",
      "doorTwenty",
      "doorTwentyOne",
      "doorTwentyTwo",
      "doorTwentyThree",
      "doorTwentyFour",
    ];

    const galleryImage = document.createElement("img");
    const galleryImageSovs = baseUrl + img;
    galleryImage.src = galleryImageSovs;
    galleryImage.setAttribute("data-id", imageIdArray[index]);

    const openCalanderDoor = () => {
      const giftIndex = index % shuffledGiftArray.length;
      galleryImage.src = baseUrl + shuffledGiftArray[giftIndex];
    };

    if (index + 1 <= currentDay) {
      galleryImage.addEventListener("click", openCalanderDoor);
    }
    else {
      galleryImage.addEventListener("click", () => {
        galleryImage.src = baseUrl + notYetImage;
      });
    };

    imageFigure.appendChild(galleryImage);
    mainContainer.appendChild(imageFigure);
  });
};

window.addEventListener("load", () => {
  makeCalander();
});
