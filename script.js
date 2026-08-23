const workItems = document.querySelectorAll(".work-item");
const hoverImage = document.querySelector(".hover-image");
const image = hoverImage.querySelector("img");

workItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Find billedet til det aktuelle projekt
    const imageSource = item.dataset.image;

    // Skift billedet
    image.src = imageSource;

    // Vis billedet
    hoverImage.style.opacity = "1";
  });

  item.addEventListener("mousemove", (event) => {
    hoverImage.style.left = `${event.clientX}px`;
    hoverImage.style.top = `${event.clientY}px`;
  });

  item.addEventListener("mouseleave", () => {
    hoverImage.style.opacity = "0";
  });
});
