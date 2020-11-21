import galleryItems from './gallery-items.js';

const gallery = document.querySelector(".js-gallery");

gallery.insertAdjacentHTML("beforeend", galleryMarkup(galleryItems));

function galleryMarkup(img) {
    return img.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    }).join("");
}




