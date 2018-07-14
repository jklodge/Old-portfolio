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

  $('#one').click(function(){
    $('.two, .three, .four, .five').hide();
    $('.one').show();

  });

  $('#two').click(function(){
    $('.one, .three, .four, .five').hide();
    $('.two').show();
  });

  $('#three').click(function(){
    $('.one, .two, .four, .five').hide();
    $('.three').show();
  });

  $('#four').click(function(){
    $('.one, .three, .two, .five').hide();
    $('.four').show();
  });

  $('#five').click(function(){
    $('.one, .three, .four, .two').hide();
    $('.five').show();
  });


  $('.projSelector li').click(function() {
    $('.projSelector li').removeClass('selected');
    $(this).addClass('selected');
  });
  // var proj = document.getElementById('projSelector');
  // proj.addEventListener('click',function(e){
  //   const projClass = e.target.classList.value;
  //   console.log(projClass);
  //   projClass.display = 'none';
  // },false);

  // $('li > a').click(function(){
  //   const theClass = this.className;  // "this" is the element clicked
  //   // $(theClass).addClass('show');
  //   $(this).addClass('show');
  //   // divsToHide[i].style.display = "none";
  //   console.log(theClass);
  // });


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

  setTimeout(typeWriter, 1700);
  function strikeThrough(){
    var before = document.querySelector('.before');
    before.classList.toggle('after');
  }

}



$(init);
