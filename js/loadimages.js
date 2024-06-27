const gallery = document.getElementById("gallerycontainer");

export const loadImages = (images) => {
  images.forEach(async (image) => {
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
    const tempImg = new Image();
    tempImg.src = image.src;
    let originalWidth = 0;
    let originalHeight = 0;
    tempImg.onload = () => {
    //   console.log(tempImg.naturalWidth, tempImg.naturalHeight);
      originalWidth = tempImg.naturalWidth;
      originalHeight = tempImg.naturalHeight;
      if (originalWidth > originalHeight) {
        if (originalWidth - originalHeight > 500) {
          container.classList.add("span-two-columns");
        }
      } else {
        if (originalHeight - originalWidth > 500) {
          container.classList.add("span-two-rows");
        }
      }
    };
    // console.log(container);
    titlecontainer.appendChild(title);
    categorycontainer.appendChild(category);
    container.appendChild(titlecontainer);
    container.appendChild(categorycontainer);
    container.appendChild(img);
    gallery.appendChild(container);
  });
};

export const loadImagesWithoutArranging = (images) => {
    images.forEach(async (image) => {
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
        const tempImg = new Image();
        tempImg.src = image.src;
        titlecontainer.appendChild(title);
        categorycontainer.appendChild(category);
        container.appendChild(titlecontainer);
        container.appendChild(categorycontainer);
        container.appendChild(img);
        gallery.appendChild(container);
    });
    }
