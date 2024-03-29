import { galleryItems } from './gallery-items.js';
// Change code below this line
const ref = {
    gallery: document.querySelector('.gallery'),
};

ref.gallery.innerHTML = createDivElem(galleryItems);
ref.gallery.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') 
    return;
}

function createDivElem(item) {
    return item
    .map(({ preview, original, description }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionType: 'alt',
});
console.log(galleryItems);
