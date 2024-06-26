import images from "./constants.js";
const gallery = document.getElementById("gallerycontainer");
const categoryfilter = document.getElementById("categoryfilter");
const sortfilter = document.getElementById("sortfilter");

const filterImages = (category) => {
  gallery.innerHTML = "";
  let sortedImages = [...images];
  if (sortfilter.value !== "default") {
    const option = sortfilter.value;
    if (option === "newest") {
      sortedImages.sort((a, b) => b.dateadded - a.dateadded);
    } else if (option === "oldest") {
      sortedImages.sort((a, b) => a.dateadded - b.dateadded);
    } else if (option === "title") {
      sortedImages.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "category") {
      sortedImages.sort((a, b) => a.category.localeCompare(b.category));
    }
  }
  sortedImages.forEach((image) => {
    if (category === "All") {
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
    } else if (category === image.category) {
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
    }
  });
};

categoryfilter.addEventListener("change", (e) => {
  filterImages(e.target.value);
});
