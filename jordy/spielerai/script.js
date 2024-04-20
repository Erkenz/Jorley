// ---- navigation responsive ----

// let navTrigger = document.getElementById("")


// $('.navTrigger').click(function () {
//     $(this).toggleClass('active');
//     console.log("Clicked menu");
//     $("#mainListDiv").toggleClass("show_list");
//     $("#mainListDiv").fadeIn();

// });
document.querySelector('.navTrigger').addEventListener('click', function() {
    this.classList.toggle('active');
    console.log("Clicked menu");
    document.querySelector("#mainListDiv").classList.toggle("show_list");
    document.querySelector("#mainListDiv").style.display = "block";
  });