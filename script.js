function clearBorders() {
  const elements = document.querySelectorAll(".border");
  for (i = 0; i < elements.length; i++) {
    let element = elements[i];
    element.classList.remove("border");
    element.classList.add("visual");
  }
}

function setMainImage(id) {
  clearBorders();
  const mainImage = document.querySelector("#mainImage");
  const thumbnail = document.querySelector("#thumbnail" + id);
  const thumbnailSrc = thumbnail.getAttribute("src");
  mainImage.src = thumbnailSrc;
  thumbnail.classList.remove("visual");
  thumbnail.classList.add("border");
}