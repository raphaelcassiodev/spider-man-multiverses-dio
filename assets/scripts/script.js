const cards = document.querySelectorAll(".s-card");
const bgCards = document.querySelectorAll(".s-card__background");

function handleMouseEnter() {
  this.classList.add("s-card--hovered");
  document.body.id = `${this.id}-hovered`;
}

function hendleMouseLeave(){
  this.classList.remove('s-card--hovered')
  document.body.id = '';

}

cards.forEach((img) => {
  img.addEventListener("mouseenter", handleMouseEnter)
  img.addEventListener("mouseleave",hendleMouseLeave)
});


function selectCarouselItem(element){
  const selectedItem = element.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transformValue = carousel.style.transform;
  const rotateY = transformValue.match(/rotateY\((-?\d+deg)\)/i); 
  const rotateYDeg = -120 * (Number(selectedItem) - 1); 
  const newTransform = transformValue.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`)

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');

  activeButtonElement.classList.remove('s-controller__button--active');
  element.classList.add('s-controller__button--active')
 
}