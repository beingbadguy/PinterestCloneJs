const back = document.querySelector("#main");
const type = document.querySelector("#type");
const main = document.querySelector("#ham");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const btn = document.querySelector("#btn");
const merger = document.querySelector("#merger");

ham.addEventListener("click", () => {
  menu.classList.toggle("inactive");
  merger.classList.toggle("hidden");
  ham.classList.toggle("hidden");
  close.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  menu.classList.toggle("inactive");
  close.classList.toggle("hidden");
  ham.classList.toggle("hidden");
  merger.classList.toggle("hidden");
});

type.addEventListener("focus", () => {
  merger.classList.add("hidden");

  // merger.style.backgroundColor = "#D4D4D8";
});

type.addEventListener("blur", function () {
  merger.classList.remove("hidden");
  // merger.style.backgroundColor = "transparent";
});
let value = 10;

btn.addEventListener("click", () => {
  value = value + 10;
  imageFetcher();
  btn.innerHTML = "Loading...";
});

let api = `https://picsum.photos/v2/list?page=2&limit=${value}`;
let ApiKey = "keSw3t2otezHe40ThONeK43ZJIeIUtVoLHoqI4zLdM3p6NzCb774Olti";

async function imageFetcher() {
  let data = await fetch(api);
  let res = await data.json();
  btn.innerHTML = "Click to load more...";
  let url = res.map((element) => {
    let image = document.createElement("img");
    key = element.download_url;
    image.src = key;
    back.appendChild(image);
  });
  return res;
}

imageFetcher();

function checkBodyWidth() {
  var bodyWidth = document.body.clientWidth;

  // Check if the body width is less than or equal to 766 pixels
  if (bodyWidth >= 766) {
    menu.classList.add("flex");
  } else {
    // document.body.classList.remove('sma');
    return;
  }
}

checkBodyWidth();

window.addEventListener("resize", checkBodyWidth);
