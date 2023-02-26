import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const galleryMurkUp = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMurkUp);
galleryContainer.addEventListener('click', onClickImg);
// console.log(createGallery(galleryItems));
function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class='gallery__item'><a class='gallery__link'  href="${original}"><img class='gallery__image' src="${preview}" data-source="${original}" alt="${description}"></img></a></div>`;
    })
    .join('');
  return murkup;
}
function onClickImg(evt) {
  evt.preventDefault();

  if (!evt.target.nodeName === 'IMG') {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryContainer.addEventListener('keydown', evt => {
    if (evt.code === 'Escape') instance.close();
  });
}
