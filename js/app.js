const inputs = document.querySelectorAll(".input-field");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});

// Mengambil nilai dari link-login-only dan mac-esc secara dinamis
const loginUrl =
  "$(link-login-only)?dst=$(link-orig-esc)&username=T-$(mac-esc)";

// Function untuk login ke internet dan redirect ke URL target
function getInternetAccessAndRedirect(targetUrl) {
  // Langkah 1: Arahkan ke URL login untuk mendapatkan akses internet
  window.location.href = loginUrl;

  // Langkah 2: Setelah login, redirect ke URL target
  setTimeout(function () {
    window.location.href = targetUrl;
  }, 2000); // Waktu tunggu 2 detik bisa disesuaikan
}

// Menambahkan event listener untuk WhatsApp
document
  .getElementById("whatsapp-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah href langsung berjalan

    // Ambil URL target dari atribut data-target-url
    const phoneNumber = this.getAttribute("data-target-url");
    var message = encodeURIComponent(
      "Halo! Saya ingin berlangganan layanan Anda. Mohon informasi lebih lanjut. Terima kasih!"
    );
    var targetUrl = phoneNumber + "?text=" + message;

    // Panggil fungsi untuk login dan redirect
    getInternetAccessAndRedirect(targetUrl);
  });

// Menambahkan event listener untuk Infly Maps
document
  .getElementById("inflymaps-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah href langsung berjalan

    // Ambil URL target dari atribut data-target-url
    const targetUrl = this.getAttribute("data-target-url");

    // Panggil fungsi untuk login dan redirect
    getInternetAccessAndRedirect(targetUrl);
  });

// Menambahkan event listener untuk Pujasera Yu Ragil
document
  .getElementById("pujasera-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah href langsung berjalan

    // Ambil URL target dari atribut data-target-url
    const targetUrl = this.getAttribute("data-target-url");

    // Panggil fungsi untuk login dan redirect
    getInternetAccessAndRedirect(targetUrl);
  });
