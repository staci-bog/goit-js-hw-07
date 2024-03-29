import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const ref = {
  gallery: document.querySelector('.gallery'),
};

const newELements = createGalleryEl(galleryItems);
ref.gallery.innerHTML = newELements;
ref.gallery.addEventListener('click', onCLickImg);

function onCLickImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  //TODO creating + show modal
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">`,
      { 
        onShow: (instance) => {
          document.addEventListener('keydown', (event) => {
            onEscapeHandler(event, instance);
          });
      },
    onClose: (instance) => {
      document.removeEventListener('keydown', onEscapeHandler);
    }});
  instance.show();

  //TODO close modal
 // ref.gallery.addEventListener('keydown', event => {
  // if (event.code === 'Escape') {
  //    instance.close();
  //  }
  //});
}

function createGalleryEl(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join('');
}

function onEscapeHandler(event, instance) {
  if (event.code === 'Escape') {
    instance.close();
  }
}