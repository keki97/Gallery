const images = [
  "https://picsum.photos/id/230/1920/1080",
  "https://picsum.photos/id/231/1920/1080",
  "https://picsum.photos/id/232/1920/1080",
  "https://picsum.photos/id/233/1920/1080",
  "https://picsum.photos/id/234/1920/1080",
  "https://picsum.photos/id/235/1920/1080",
  "https://picsum.photos/id/236/1920/1080",
  "https://picsum.photos/id/237/1920/1080",
  "https://picsum.photos/id/238/1920/1080",
  "https://picsum.photos/id/239/1920/1080",
  "https://picsum.photos/id/240/1920/1080",
  "https://picsum.photos/id/241/1920/1080",
  "https://picsum.photos/id/242/1920/1080",
  "https://picsum.photos/id/243/1920/1080",
  "https://picsum.photos/id/244/1920/1080",
  "https://picsum.photos/id/247/1920/1080",
  "https://picsum.photos/id/248/1920/1080",
  "https://picsum.photos/id/249/1920/1080",
  "https://picsum.photos/id/250/1920/1080",
];

const gallery = document.querySelector(".gallery");
const image = document.querySelector(".gallery-img");
const modal = document.querySelector(".modal");
const modalImgContainer = document.querySelector(".modal-img-container");
const bodyEl = document.querySelector("body");
let imgNumber;

const displayImages = function () {
  gallery.innerHTML = "";
  images.forEach(function (img, i) {
    const html = `<div class='gallery-images'><img src=${img} data-id=${i} alt='Gallery image ${
      i + 1
    }' class="gallery-img"
     /> </div>`;
    gallery.insertAdjacentHTML("beforeend", html);
  });
};

displayImages();

gallery.addEventListener("click", function (e) {
  e.preventDefault();

  // console.log(e.target);
  if (e.target.classList.contains("gallery-img")) {
    imgNumber = e.target.getAttribute("data-id");
    document.querySelector(".current-image").innerHTML = `${+imgNumber + 1}/${
      images.length
    }`;
    const modalImg = e.target;
    modalImg.classList.remove("gallery-img");
    modalImg.classList.add("modal-img");
    modal.classList.remove("hidden");
    modalImgContainer.appendChild(modalImg);
    displayImages();
  }
});

bodyEl.addEventListener("click", function (e) {
  // console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains("right") && imgNumber < images.length - 1) {
    const modalImage = document.querySelector(".modal-img");
    imgNumber++;
    document.querySelector(".current-image").innerHTML = `${imgNumber + 1}/${
      images.length
    }`;
    let curImage;
    curImage = images[imgNumber];
    modalImgContainer.innerHTML = `<img src='${images[imgNumber]}' class='modal-img' />'`;
    // console.log(curImage);
  } else if (e.target.classList.contains("left") && imgNumber > 0) {
    const modalImage = document.querySelector(".modal-img");
    imgNumber--;
    // console.log(imgNumber);
    document.querySelector(".current-image").innerHTML = `${imgNumber + 1}/${
      images.length
    }`;
    curImage = images[imgNumber];
    modalImgContainer.innerHTML = `<img src='${images[imgNumber]}' class='modal-img' />'`;
    // console.log(curImage);
  } else if (imgNumber > images.length - 1 || imgNumber < 0) return;
  else if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("modal-img-container")
  ) {
    // console.log(e.target);
    modal.classList.add("hidden");
    modalImgContainer.innerHTML = "";
  }
});
