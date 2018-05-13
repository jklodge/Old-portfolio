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




}
$(init);
