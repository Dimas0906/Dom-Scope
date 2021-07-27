"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal1 = document.querySelector(".buy1");
const btnsOpenModal2 = document.querySelector(".buy2");
const btnsOpenModal3 = document.querySelector(".buy3");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal1.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".message").textContent =
    "Anda telah membeli Produk 1 : Headphone Biru";
});
btnsOpenModal2.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".message").textContent =
    "Anda telah membeli Produk 2 : Headphone Hitam";
});
btnsOpenModal3.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".message").textContent =
    "Anda telah membeli Produk 3 : Headphone Merah";
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
