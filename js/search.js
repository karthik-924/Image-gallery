import images from "./constants.js";
import filterResults from "./filters.js";
import { loadImages, loadImagesWithoutArranging } from "./loadimages.js";
import { sortResults } from "./sort.js";
const search = document.getElementById("search");
const categoryfilter = document.getElementById("categoryfilter");
const gallery = document.getElementById("gallerycontainer");
const sortfilter = document.getElementById("sortfilter");
// console.log(search);

search.addEventListener("input", (e) => {
  // console.log(e.target.value);
  const searchValue = e.target.value.toLowerCase();
  gallery.innerHTML = "";
  const originalImages = [...images];
  const filteredImages = filterResults(originalImages);
  const sortedImages = sortResults(filteredImages);
  const searchedResults = sortedImages.filter((image) => {
    return (
      image.name.toLowerCase().includes(searchValue) ||
      image.category.toLowerCase().includes(searchValue)
    );
  });
  if (sortfilter.value === "default") loadImages(searchedResults);
  else loadImagesWithoutArranging(searchedResults);
});

const searchResults = (newimages) => {
  const searchValue = search.value.toLowerCase();
  gallery.innerHTML = "";
  const originalImages = [...newimages];
  const filteredImages = originalImages.filter((image) => {
    return (
      image.name.toLowerCase().includes(searchValue) ||
      image.category.toLowerCase().includes(searchValue)
    );
  });
  return filteredImages;
};

export default searchResults;
