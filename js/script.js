document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".nav-toogle");
  const sidebar = document.getElementById("sidebar");
  const btn = document.getElementById("navbtn");
  const foot = document.getElementById("foot");
  const logokiri = document.getElementById("logokiri");
  const logokanan = document.getElementById("logokanan");

  toggleBtn.addEventListener("click", () => {
    if (sidebar.style.left === "0rem") {
      //hilang
      sidebar.style.left = "-15%";
      btn.style.left = "0";
      btn.style.transform = "rotate(90deg)";
      foot.style.width = "100%";
      logokiri.style.display = "inline-block";
      logokanan.style.transform = "translateX(10rem)";
    } else {
      //muncul
      sidebar.style.left = "0rem";
      btn.style.left = "15%";
      foot.style.width = "85%";
      btn.style.transform = "rotate(270deg)";
      logokiri.style.display = "none";
      logokanan.style.transform = "translateX(0)";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".nav-items li");
  const btnUp = document.getElementById("btnUp");
  const btnDown = document.getElementById("btnDown");

  let index = 0;

  function updateActive() {
    items.forEach((li, i) => {
      li.classList.toggle("active", i === index);
    });
  }

  updateActive();

  // Tombol ke bawah
  btnDown.onclick = () => {
    if (index < items.length - 1) {
      index++;
      updateActive();
    }
  };

  // Tombol ke atas
  btnUp.onclick = () => {
    if (index > 0) {
      index--;
      updateActive();
    }
  };
});
