import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMurkUp = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMurkUp);
console.log(createGallery(galleryItems));
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'><a class='gallery__link'  href="${original}"><img class='gallery__image' src="${preview}" data-source="${original}" alt="${description}"></img></a></div>`;
    })
    .join('');
  return murkup;
}
