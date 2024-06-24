import images from "./constants.js";
const gallery = document.getElementById("gallerycontainer");
const close = document.getElementById("closebutton");
const lightbox = document.getElementById("lightbox");
const lightboximage = document.getElementById("lightboximage");
const prev = document.getElementById("prevbutton");
const next = document.getElementById("nextbutton");
const imageindex = document.getElementById("imageindex");
const imagetitle = document.getElementById("imagetitle");
const imagecategory = document.getElementById("imagecategory");
const nextimages = document.getElementById("nextimages");
console.log(images);
images.forEach((image) => {
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.name;
  img.setAttribute("loading", "lazy");
  img.classList.add("gallery-img");
  img.dataset.index = image.id;
  //   console.log(img);
  gallery.appendChild(img);
});

let currentImageIndex = 0;

gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-img")) {
    const index = e.target.dataset.index;
    console.log(index);
    currentImageIndex = parseInt(index);
    openLightbox(currentImageIndex);
  }
});

const openLightbox = (index) => {
  console.log(index);
  lightbox.classList.remove("hidden");
  lightbox.classList.add("openlightbox");
  lightboximage.src = images[index - 1].src;
  lightboximage.alt = images[index - 1].name;
  lightboximage.dataset.index = images[index - 1].id;
  imageindex.textContent = `${index} of ${images.length}`;
  imagetitle.textContent = images[index - 1].name;
  imagecategory.textContent = images[index - 1].category;
};

const closelightbox = () => {
  lightbox.classList.remove("openlightbox");
  lightbox.classList.add("hidden");
};

const nextImage = () => {
  if (currentImageIndex < images.length) {
    currentImageIndex++;
    if (currentImageIndex === images.length) {
      next.classList.add("disabled");
    } else {
      next.classList.remove("disabled");
    }
    if (currentImageIndex === 1) {
      prev.classList.add("disabled");
    } else {
      prev.classList.remove("disabled");
    }
    lightboximage.src = images[currentImageIndex - 1].src;
    lightboximage.alt = images[currentImageIndex - 1].name;
    lightboximage.dataset.index = images[currentImageIndex - 1].id;
    imageindex.textContent = `${currentImageIndex} of ${images.length}`;
    imagetitle.textContent = images[currentImageIndex - 1].name;
    imagecategory.textContent = images[currentImageIndex - 1].category;
  }
};

const prevImage = () => {
  if (currentImageIndex > 1) {
    currentImageIndex--;
    if (currentImageIndex === 1) {
      prev.classList.add("disabled");
    } else {
      prev.classList.remove("disabled");
    }
    if (currentImageIndex === images.length) {
      next.classList.add("disabled");
    } else {
      next.classList.remove("disabled");
    }
    lightboximage.src = images[currentImageIndex - 1].src;
    lightboximage.alt = images[currentImageIndex - 1].name;
    lightboximage.dataset.index = images[currentImageIndex - 1].id;
    imageindex.textContent = `${currentImageIndex} of ${images.length}`;
    imagetitle.textContent = images[currentImageIndex - 1].name;
    imagecategory.textContent = images[currentImageIndex - 1].category;
  }
};

close.addEventListener("click", closelightbox);
next.addEventListener("click", nextImage);
prev.addEventListener("click", prevImage);
