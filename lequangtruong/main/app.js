const trendingProduct = [

];
const newProduct = [
    {   
        id: 1,
        title: "",
        image: "",
        price:{
            oldPrice: 110,
            newPrice: 180,
        },
        category: "loren...",
        description: "",
    },
];

// Thêm số lượng sản phẩm
var quantity = document.getElementById("quantity");
var increase = document.getElementById("increase");
var decrease = document.getElementById("decrease");

increase.addEventListener("click", function() {
  quantity.stepUp();
});

decrease.addEventListener("click", function() {
  quantity.stepDown();
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});