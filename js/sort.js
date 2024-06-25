import images from "./constants.js";
const ascending = document.getElementById("ascending");
const descending = document.getElementById("descending");

const sortfilter = document.getElementById("sortfilter");
const gallery = document.getElementById("gallerycontainer");

const sortImages = (option) => {
  gallery.innerHTML = "";
    let sortedImages = [...images];
    console.log(option);
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
    console.log(sortfilter.value);
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
  if (
    sortfilter.value !== "default" &&
    sortfilter.value !== "newest" &&
    sortfilter.value !== "oldest"
  ) {
    ascending.classList.remove("disabled");
    descending.classList.remove("disabled");
  } else {
    ascending.classList.add("disabled");
    descending.classList.add("disabled");
  }
  sortImages(sortfilter.value);
});

ascending.addEventListener("click", () => {
  sortImagesAscending();
});

descending.addEventListener("click", () => {
  sortImagesDescending();
});
