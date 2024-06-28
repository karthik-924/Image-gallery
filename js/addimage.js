import { loadImages, loadImagesWithoutArranging } from "./loadimages.js";
import images from "./constants.js";

const addimage = document.getElementById("addimage");
const modal = document.getElementById("modal");
const closemodal = document.getElementById("closemodal");
const title = document.getElementById("title");
const category = document.getElementById("category");
const file = document.getElementById("file");
const fileimage = document.getElementById("fileimage");
const fileimagediv = document.getElementById("fileimagediv");
const removeimage = document.getElementById("removeimage");
const addimagebutton = document.getElementById("addimagebutton");
const categoryfilter = document.getElementById("categoryfilter");

addimage.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("openmodal");
});

closemodal.addEventListener("click", () => {
  modal.classList.remove("openmodal");
  modal.classList.add("hidden");
});

file.addEventListener("change", () => {
  const file = document.getElementById("file").files[0];
  if (file) {
    fileimagediv.classList.remove("hidden");
    fileimage.src = URL.createObjectURL(file);
    fileimage.alt = file.name;
  }
});

removeimage.addEventListener("click", () => {
  fileimagediv.classList.add("hidden");
  file.value = "";
});

addimagebutton.addEventListener("click", () => {
  if (title.value && category.value && file.value) {
    const newImage = {
      id: images.length + 1,
      name: title.value,
      category: category.value,
      src: fileimage.src,
      dateadded: new Date().getTime(),
    };
    images.push(newImage);
    loadImages(images);
    modal.classList.remove("openmodal");
    modal.classList.add("hidden");
    title.value = "";
    category.value = "";
    file.value = "";
    fileimagediv.classList.add("hidden");
    let categories = new Set();
    categories.add("All");

    images.forEach((image) => {
      categories.add(image.category);
    });
    categoryfilter.innerHTML = "";
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.innerHTML = category;
      categoryfilter.appendChild(option);
    });
    alert("Image added successfully");
  } else {
    alert("Please fill all the fields");
  }
});
