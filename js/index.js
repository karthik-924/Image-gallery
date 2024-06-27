import images from "./constants.js";
import { loadImages } from "./loadimages.js";
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
const categoryfilter = document.getElementById("categoryfilter");
// const header = document.getElementById("header");

let categories = new Set();
categories.add("All");

images.forEach((image) => {
  categories.add(image.category);
});

loadImages(images);

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.innerHTML = category;
  categoryfilter.appendChild(option);
});

let currentImageIndex = 0;
let vartoSubtract = 4;

if (window.innerWidth < 568) {
  vartoSubtract = 3;
}

const sliderImages = () => {
  const dummyimages = [...images];
  nextimages.innerHTML = "";
  var startIndex = currentImageIndex - 1;
  var endIndex = startIndex + vartoSubtract;
  //   console.log(startIndex, endIndex);
  if (startIndex + vartoSubtract > images.length) {
    startIndex = images.length - vartoSubtract;
    endIndex = images.length;
    // console.log(startIndex, endIndex);
  }
  dummyimages.slice(startIndex, endIndex).forEach((image) => {
    // console.log(image);
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.name;
    img.setAttribute("loading", "lazy");
    img.setAttribute("draggable", "false");
    img.classList.add("slider-img");
    img.dataset.index = image.id;
    img.addEventListener("click", (e) => {
      const index = parseInt(e.target.dataset.index);
      setCurrentImage(index);
    });
    // console.log(image.id, currentImageIndex);
    if (image.id === currentImageIndex) {
      img.classList.add("current");
    }
    nextimages.appendChild(img);
  });
};

gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("gallery-img")) {
    const index = e.target.dataset.index;
    // console.log(index);
    currentImageIndex = parseInt(index);
    openLightbox(currentImageIndex);
  }
});

const openLightbox = (index) => {
  //   console.log(index);
  lightbox.classList.remove("hidden");
  lightbox.classList.add("openlightbox");
  lightboximage.src = images[index - 1].src;
  lightboximage.alt = images[index - 1].name;
  lightboximage.dataset.index = images[index - 1].id;
  imageindex.textContent = `${index} of ${images.length}`;
  imagetitle.textContent = images[index - 1].name;
  imagecategory.textContent = images[index - 1].category;
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
  sliderImages();
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
    sliderImages();
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
    sliderImages();
  }
};

const setCurrentImage = (index) => {
  currentImageIndex = index;
  openLightbox(currentImageIndex);
};

close.addEventListener("click", closelightbox);
next.addEventListener("click", nextImage);
prev.addEventListener("click", prevImage);
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    vartoSubtract = 3;
  } else {
    vartoSubtract = 4;
  }
  sliderImages();
});
// console.log()
// header.addEventListener("wheel", () => {
//   window.location.href = "#maincontainer";
// });
