import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Change code below this line
const list = document.querySelector('.gallery');
const markup = galleryItems.map(
  ({ preview, description, original }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
);
list.insertAdjacentHTML('beforeend', markup.join(''));
const  lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
