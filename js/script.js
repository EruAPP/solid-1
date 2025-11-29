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
      foot.style.width = "100%";
      logokiri.style.display = "inline-block";
      logokanan.style.transform = "translateX(10rem)";
    } else {
      //muncul
      sidebar.style.left = "0rem";
      btn.style.left = "15%";
      foot.style.width = "85%";
      logokiri.style.display = "none";
      logokanan.style.transform = "translateX(0)";
    }
  });
});
