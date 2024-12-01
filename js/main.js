$(document).ready(function () {
  let $btns = $('.project-area .button-group button');

  $btns.click(function (e) {
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter: selector,
    });

    return false;
  });

  $('.project-area .button-group #btn1').trigger('click');

  $('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true },
  });

  // Sticky navigation bar
  let nav_offset_top = $('.header_area').height() + 50;

  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area .main-menu').addClass('navbar_fixed');
        } else {
          $('.header_area .main-menu').removeClass('navbar_fixed');
        }
      });
    }
  }
  navbarFixed();

  // Image change

  const variableElement = document.getElementById('variable');
  const imageElement = document.getElementById('imagecup');

  // Event listeners to change the image source and add border on hover
  variableElement.addEventListener('mouseover', () => {
    imageElement.src = 'img/KirstenImage1.png'; // Set the new image
    imageElement.classList.add('bordered-image'); // Add border instantly
  });

  variableElement.addEventListener('mouseout', () => {
    imageElement.src = 'img/coffee-cup.png'; // Revert to original image
    imageElement.classList.remove('bordered-image'); // Remove border instantly
  });

  // Project flip cards
  // Flip the cards on click
  document.querySelectorAll('.our-project').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // Remove index.html
  if (window.location.pathname.endsWith('index.html')) {
    window.location.replace(window.location.pathname.replace('index.html', ''));
  }
});
