import images from './constants.js';
const gallery = document.getElementById('gallerycontainer');
const close = document.getElementById('close');
const lightbox = document.getElementById('lightbox');
const lightboximage = document.getElementById('lightboximage');
console.log(images);
images.forEach((image) => {
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.name;
    img.setAttribute('loading', 'lazy')
    img.classList.add('gallery-img');
    img.dataset.index = image.id;
    console.log(img);
    gallery.appendChild(img);
});

let currentImageIndex = 0;

gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery-img')) {
        const index = e.target.dataset.index;
        console.log(index);
        currentImageIndex = parseInt(index);
        openLightbox(currentImageIndex);
    }
});

const openLightbox = (index) => {
    console.log(index);
    lightbox.classList.add('openlightbox');
    lightboximage.src = images[index-1].src;
    lightboximage.alt = images[index-1].name;
    lightboximage.dataset.index = images[index-1].id;
    close.classList.remove("hidden");
}

close.addEventListener('click', () => {
    lightbox.classList.remove('openlightbox');
    close.classList.add("hidden");
});

