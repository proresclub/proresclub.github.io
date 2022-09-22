    $(".faq-heading").click(function () {
      $(this)
        .parent("li")
        .toggleClass("the-active")
        .find(".faq-text")
        .slideToggle();
    });

AOS.init();

window.addEventListener('scroll',() => {
  document.getElementById('navb').classList.toggle("window-scroll",window.scrollY > 0)
})
