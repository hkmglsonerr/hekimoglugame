//!SLİDER YAPISI DÖNÜŞ BAŞLANGICI
document.addEventListener("DOMContentLoaded", function () {
  let interval = 5000; //Saniyesini ayarladık

  let slides = document.querySelectorAll('input[type="radio"][name="slider"]');

  let currentSlide = 0;

  function changeSlide() {
    slides[currentSlide].checked = false;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].checked = true;
  }
  setInterval(changeSlide, interval);
});
//!SLİDER YAPISI DÖNÜŞ BİTİŞİ

// ******************************/

//!Sale Kısmı Alert gönderme başlangıç;

const submit = document.querySelector("#submit");

submit.addEventListener("click", function () {
  alert("Girdiğiniz E-mail adresine kod gönderildi.");
});
//!Sale Kısmı Alert gönderme bitiş:
