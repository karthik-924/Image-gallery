import images from "./constants.js";
import { loadImages, loadImagesWithoutArranging } from "./loadimages.js";
import searchResults from "./search.js";
import { sortResults } from "./sort.js";
const gallery = document.getElementById("gallerycontainer");
const categoryfilter = document.getElementById("categoryfilter");
const sortfilter = document.getElementById("sortfilter");

const filterImages = (category) => {
  gallery.innerHTML = "";
  let searchImages = searchResults(images);
  let sortedImages = sortResults(searchImages);
  if (sortfilter.value === "default")
    loadImages(
      category === "All"
        ? sortedImages
        : sortedImages.filter((image) => image.category === category)
    );
  else
    loadImagesWithoutArranging(
      category === "All"
        ? sortedImages
        : sortedImages.filter((image) => image.category === category)
    );
};

categoryfilter.addEventListener("change", (e) => {
  filterImages(e.target.value);
});

const filterResults = (newimages) => {
  const category = categoryfilter.value;
  return category === "All"
    ? newimages
    : newimages.filter((image) => image.category === category);
};

export default filterResults;
