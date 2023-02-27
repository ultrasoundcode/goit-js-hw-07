import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMurkUp = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMurkUp);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'><a class='gallery__link'  href="${original}"><img class='gallery__image' src="${preview}" data-source="${original}" alt="${description}"></img></a></div>`;
    })
    .join('');
  return murkup;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
