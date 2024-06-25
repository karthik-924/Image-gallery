import images from "./constants.js";
const gallery = document.getElementById("gallerycontainer");
const categoryfilter = document.getElementById("categoryfilter");

const filterImages = (category) => {
  gallery.innerHTML = "";
  images.forEach((image) => {
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
