const listIcon = document.getElementsByClassName("icon");
console.log(listIcon);

for (const element of listIcon) {
  element.addEventListener("mouseover", (e) => {
    let imgPath = element.src;
    let activeImgPath = imgPath.replace(".png", "-active.png");
    element.src = activeImgPath;
  });
  element.onmouseout = () => {
    let imgPath = element.src;
    let activeImgPath = imgPath.replace("-active.png", ".png");
    element.src = activeImgPath;
  };
}
