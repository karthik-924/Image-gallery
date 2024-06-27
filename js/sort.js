import images from "./constants.js";
import filterResults from "./filters.js";
import { loadImages, loadImagesWithoutArranging } from "./loadimages.js";
import searchResults from "./search.js";

const sortfilter = document.getElementById("sortfilter");
const gallery = document.getElementById("gallerycontainer");
const ascendingdescending = document.getElementById("ascendingdescending");
const direction = document.getElementById("direction");
const arrow = document.getElementById("arrow");
const categoryfilter = document.getElementById("categoryfilter");

const sortImages = (option) => {
  gallery.innerHTML = "";
  // console.log(gallery);
  let sortedImages = [...images];
  let searchedResults = searchResults(sortedImages);
  let filteredImages = filterResults(searchedResults);
  if (option === "newest") {
    filteredImages.sort((a, b) => b.dateadded - a.dateadded);
  } else if (option === "oldest") {
    filteredImages.sort((a, b) => a.dateadded - b.dateadded);
  } else if (option === "title") {
    filteredImages.sort((a, b) => a.name.localeCompare(b.name));
  } else if (option === "category") {
    filteredImages.sort((a, b) => a.category.localeCompare(b.category));
  }
  if (option === "default") loadImages(filteredImages);
  else loadImagesWithoutArranging(filteredImages);
};

const sortImagesAscending = () => {
  gallery.innerHTML = "";
  let sortedImages = [...images];
  let searchedResults = searchResults(sortedImages);
  let filteredImages = filterResults(searchedResults);
  if (sortfilter.value === "title") {
    filteredImages.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortfilter.value === "category") {
    filteredImages.sort((a, b) => a.category.localeCompare(b.category));
  }
  if (sortfilter.value === "default") loadImages(filteredImages);
  else loadImagesWithoutArranging(filteredImages);
};

const sortImagesDescending = () => {
  gallery.innerHTML = "";
  let sortedImages = [...images];
  let searchedResults = searchResults(sortedImages);
  let filteredImages = filterResults(searchedResults);
  if (sortfilter.value === "title") {
    filteredImages.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortfilter.value === "category") {
    filteredImages.sort((a, b) => b.category.localeCompare(a.category));
  }
  if (sortfilter.value === "default") loadImages(filteredImages);
  else loadImagesWithoutArranging(filteredImages);
};

sortfilter.addEventListener("change", () => {
  sortImages(sortfilter.value);
  arrow.classList.remove("bottomdirection");
  direction.innerHTML = "Ascending";
});

ascendingdescending.addEventListener("click", () => {
  if (
    direction.innerHTML === "Ascending" &&
    sortfilter.value !== "newest" &&
    sortfilter.value !== "oldest"
  ) {
    arrow.classList.add("bottomdirection");
    direction.innerHTML = "Descending";
    sortImagesDescending();
  } else if (
    direction.innerHTML === "Descending" &&
    sortfilter.value !== "newest" &&
    sortfilter.value !== "oldest"
  ) {
    arrow.classList.remove("bottomdirection");
    direction.innerHTML = "Ascending";
    sortImagesAscending();
  }
});

const sortResults = (newimages) => {
  let sortedImages = [...newimages];
  if (categoryfilter.value !== "All") {
    sortedImages = sortedImages.filter(
      (image) => image.category === categoryfilter.value
    );
  }
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
  if (direction.innerHTML === "Descending") {
    sortedImages.reverse();
  }
  return sortedImages;
};

export { sortImages, sortResults };
