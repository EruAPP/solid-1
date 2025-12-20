// Loader
window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
  }, 1000);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
    const icon = this.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });

      // Close mobile menu
      if (nav) nav.classList.remove("active");
      if (menuToggle) {
        const icon = menuToggle.querySelector("i");
        icon.classList.add("fa-bars");
        icon.classList.remove("fa-times");
      }
    }
  });
});

// Header Scroll Effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (!header) return;

  header.style.boxShadow =
    window.scrollY > 100 ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "var(--shadow)";
});

// Language Toggle
const languageToggle = document.getElementById("languageToggle");
let currentLanguage = "id";

if (languageToggle) {
  languageToggle.addEventListener("click", function () {
    if (currentLanguage === "id") {
      currentLanguage = "en";
      document.documentElement.lang = "en";
    } else {
      currentLanguage = "id";
      document.documentElement.lang = "id";
    }
  });
}

// Share Location
const shareBtn = document.getElementById("shareLocation");

if (shareBtn) {
  shareBtn.addEventListener("click", function () {
    if (navigator.share) {
      navigator.share({
        title: "Vihara Kumala Bodhi",
        text: "Kunjungi Vihara Kumala Bodhi di Pangkal Pinang",
        url: window.location.href,
      });
    } else {
      const dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.value = window.location.href;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);

      showNotification("Link lokasi telah disalin ke clipboard!");
    }
  });
}

// Send To Phone
const sendToPhoneBtn = document.getElementById("sendToPhone");

if (sendToPhoneBtn) {
  sendToPhoneBtn.addEventListener("click", function () {
    const phoneNumber = prompt("Masukkan nomor telepon Anda:");
    if (phoneNumber) {
      showNotification(`Informasi lokasi telah dikirim ke ${phoneNumber}`);
    }
  });
}

// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    showNotification(
      "Terima kasih! Pesan Anda telah dikirim. Kami akan segera menghubungi Anda."
    );

    this.reset();
  });
}

// Notification Helper
function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;

  Object.assign(notification.style, {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "var(--secondary-color)",
    color: "white",
    padding: "15px 25px",
    borderRadius: "5px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    zIndex: "1000",
    opacity: "0",
    transition: "opacity 0.3s ease",
  });

  document.body.appendChild(notification);

  setTimeout(() => (notification.style.opacity = "1"), 10);

  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Intersection Observer Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document
  .querySelectorAll(".value-item, .review-card, .contact-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
