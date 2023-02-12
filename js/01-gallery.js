import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMurkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMurkup);

galleryContainer.addEventListener("click", clickOnImage);
function clickOnImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const modal = basicLightbox.create(
    `<img src = "${event.target.dataset.source}" >`,
    {
      onShow: () => document.addEventListener("keydown", onModalClose),
      onClose: () => document.removeEventListener("keydown", onModalClose),
    }
  );
  modal.show();

  function onModalClose(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
}
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
