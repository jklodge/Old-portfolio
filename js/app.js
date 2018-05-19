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
    $('a').toggle();
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

}
$(init);
