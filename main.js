window.onload = function () {
    
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    
  }, 4000);
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("content").style.opacity = "1";
  }, 5000);
};
