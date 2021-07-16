function getDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  return {
    today,
    day: dd,
    month: mm,
    year: yyyy,
  };
}

document.getElementById('year').textContent = getDate().year;

// Init Scrollspy
$('body').scrollspy({ target: '#main-nav' });
// Smooth Scrolling

// Smooth Scrolling
$('#main-nav a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800,
      function () {
        window.location.hash = hash;
      },
    );
  }
});
