import images from "./constants.js";
const search = document.getElementById("search");
const categoryfilter = document.getElementById("categoryfilter");
const gallery = document.getElementById("gallerycontainer");
const sortfilter = document.getElementById("sortfilter");
console.log(search);

search.addEventListener("input", (e) => {
    console.log(e.target.value);
  const searchValue = e.target.value.toLowerCase();
  gallery.innerHTML = "";
  const originalImages = [...images];
  const filteredImages = originalImages.filter((image) => {
    return (
      image.name.toLowerCase().includes(searchValue) ||
      image.category.toLowerCase().includes(searchValue)
    );
  });
  filteredImages.forEach((image) => {
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
});
