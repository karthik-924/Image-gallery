import images from "./constants.js";

const sortfilter = document.getElementById("sortfilter");
const gallery = document.getElementById("gallerycontainer");
const ascendingdescending = document.getElementById("ascendingdescending");
const direction = document.getElementById("direction");
const arrow = document.getElementById("arrow");

const sortImages = (option) => {
  gallery.innerHTML = "";
  console.log(gallery)
  let sortedImages = [...images];
  if (option === "newest") {
    sortedImages.sort((a, b) => b.dateadded - a.dateadded);
  } else if (option === "oldest") {
    sortedImages.sort((a, b) => a.dateadded - b.dateadded);
  } else if (option === "title") {
    sortedImages.sort((a, b) => a.name.localeCompare(b.name));
  } else if (option === "category") {
    sortedImages.sort((a, b) => a.category.localeCompare(b.category));
  }
  sortedImages.forEach((image) => {
    const img = document.createElement("img");
    const container = document.createElement("div");
    const titlecontainer = document.createElement("div");
    const categorycontainer = document.createElement("div");
    const title = document.createElement("p");
    const category = document.createElement("p");
    container.classList.add("gallery-img-container");
    titlecontainer.classList.add("gallery-img-title");
    categorycontainer.classList.add("gallery-img-category");
    title.innerHTML = image.name;
    category.innerHTML = image.category;
    img.src = image.src;
    img.alt = image.name;
    img.setAttribute("loading", "lazy");
    img.setAttribute("dragable", "false");
    img.classList.add("gallery-img");
    img.dataset.index = image.id;
    titlecontainer.appendChild(title);
    categorycontainer.appendChild(category);
    container.appendChild(img);
    container.appendChild(titlecontainer);
    container.appendChild(categorycontainer);
    gallery.appendChild(container);
  });
};

const sortImagesAscending = () => {
  gallery.innerHTML = "";
  let sortedImages = [...images];
  // console.log(sortfilter.value);
  if (sortfilter.value === "title") {
    sortedImages.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortfilter.value === "category") {
    sortedImages.sort((a, b) => a.category.localeCompare(b.category));
  }
  sortedImages.forEach((image) => {
    const img = document.createElement("img");
    const container = document.createElement("div");
    const titlecontainer = document.createElement("div");
    const categorycontainer = document.createElement("div");
    const title = document.createElement("p");
    const category = document.createElement("p");
    container.classList.add("gallery-img-container");
    titlecontainer.classList.add("gallery-img-title");
    categorycontainer.classList.add("gallery-img-category");
    title.innerHTML = image.name;
    category.innerHTML = image.category;
    img.src = image.src;
    img.alt = image.name;
    img.setAttribute("loading", "lazy");
    img.setAttribute("dragable", "false");
    img.classList.add("gallery-img");
    img.dataset.index = image.id;
    titlecontainer.appendChild(title);
    categorycontainer.appendChild(category);
    container.appendChild(img);
    container.appendChild(titlecontainer);
    container.appendChild(categorycontainer);

    gallery.appendChild(container);
  });
};

const sortImagesDescending = () => {
  gallery.innerHTML = "";
  let sortedImages = [...images];
  if (sortfilter.value === "title") {
    sortedImages.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortfilter.value === "category") {
    sortedImages.sort((a, b) => b.category.localeCompare(a.category));
  }
  sortedImages.forEach((image) => {
    const img = document.createElement("img");
    const container = document.createElement("div");
    const titlecontainer = document.createElement("div");
    const categorycontainer = document.createElement("div");
    const title = document.createElement("p");
    const category = document.createElement("p");
    container.classList.add("gallery-img-container");
    titlecontainer.classList.add("gallery-img-title");
    categorycontainer.classList.add("gallery-img-category");
    title.innerHTML = image.name;
    category.innerHTML = image.category;
    img.src = image.src;
    img.alt = image.name;
    img.setAttribute("loading", "lazy");
    img.setAttribute("dragable", "false");
    img.classList.add("gallery-img");
    img.dataset.index = image.id;
    titlecontainer.appendChild(title);
    categorycontainer.appendChild(category);
    container.appendChild(img);
    container.appendChild(titlecontainer);
    container.appendChild(categorycontainer);

    gallery.appendChild(container);
  });
};

sortfilter.addEventListener("change", () => {
  sortImages(sortfilter.value);
  arrow.classList.remove("bottomdirection");
  direction.innerHTML = "Ascending";
});

ascendingdescending.addEventListener("click", () => {
  if (direction.innerHTML === "Ascending" && sortfilter.value !== "newest" && sortfilter.value !== "oldest") {
    arrow.classList.add("bottomdirection");
    direction.innerHTML = "Descending";
    sortImagesDescending();
  } else if (direction.innerHTML === "Descending" && sortfilter.value !== "newest" && sortfilter.value !== "oldest") {
    arrow.classList.remove("bottomdirection");
    direction.innerHTML = "Ascending";
    sortImagesAscending();
  }
});
