function init() {
  $('.toggle').click(function(){
    $('.showRole').slideToggle('slow');
  });

  // Add active class to the current button (highlight it)
  const nav = document.querySelector('.navbar');
  const navtab = nav.querySelector('.navbar-item');
  for (let i = 0; i < navtab.length; i++) {
    navtab[i].addEventListener('click', function() {
      const current = document.querySelector('.active');
      console.log(navtab);
      current[0].className = current[0].className.replace('active', '');
      this.className += 'active';

    });
  }

  $('#contact').click(function(){
    $('.hidden-first').toggle();
  });


  $('.homeTab').click(typeWriter);

  var i = 0;
  var txt = 'ex Product Manager'; /* The text */
  var speed = 80; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById('text').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    setTimeout(strikeThrough, 3500);

  }

  setTimeout(typeWriter, 1500);
  function strikeThrough(){
    var before = document.querySelector('.before');
    before.classList.toggle('after');
  }

}
$(init);
