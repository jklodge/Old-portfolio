function init() {
  // const $scroll = $('.scroll');
  // const $expander = $('.expander');
  // const $TableData = $('#TableData');

  // $scroll.on('click',(e) => {
  //   e.preventDefault();
  //   $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 200, 'linear');
  // });

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


  // $('.contact').click(function(){
  //   console.log('hello');
  //   var para = document.querySelector('.hidden-first');
  //   if (para.style.display === 'block') {
  //     para.style.display = 'none';
  //   } else {
  //     para.style.display = 'block';
  //   }
  // });


  $('#contact').click(function(){
    $('.hidden-first').toggle();
  });


  // document.querySelector('.contact').addEventListener('click', seeMore);
  //
  // function seeMore() {
  //   console.log('hello');
  //   var para = document.querySelector('.hidden-first');
  //   if (para.style.display === 'block') {
  //     para.style.display = 'none';
  //   } else {
  //     para.style.display = 'block';
  //   }
  //
  // }

  var i = 0;
  var txt = 'ex Product Manager'; /* The text */
  var speed = 80; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById('text').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  setTimeout(typeWriter, 1500);
  function strikeThrough(){
    var before = document.querySelector('.before');
    before.classList.toggle('after');
  }
  setTimeout(strikeThrough, 3500);

}
$(init);
