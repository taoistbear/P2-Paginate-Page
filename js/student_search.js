// Set up closed funtion to preent interference of any variables with other scripts
(function(){

  //craete an NodeList for all the student data
  var students = document.getElementsByTagName('li');
  //turn the NodeList into an array to manipulate.
  var studArr = jQuery.makeArray(students);

  //create a functino to be called to determine the number of pages needed
  function pages(fArr, show) {
    var pageNum = Math.floor((fArr.length / show) + 1);
    return pageNum;
  }
  // when page loads set up first function to divide the array and create pages
  function paginate(nArr) {
    //sets up how many page buttons there should be and creates the html
    var buttons = pages(nArr, 10);
    var $pageDiv = '<div class="pagination"><ul>';
    for ( var i = 0; i < buttons; i++ ) {
        $pageDiv += '<li><a href="#">' + (i+1) + '</a></li>';
    }
    $pageDiv += '</li></div>';
    $('.page').append($pageDiv);

    //set click handlers for each button and force click first one.
    $('a').on('click', function(nArr) {
      $('a').removeClass('active');
      $(this).addClass('active');
      $('.student-item').each(function() {
        $(this).addClass('hide');
      });
      var idx = $(this).parent().index() * 10;
      for ( var i = 0; i < 10; i++) {
        $('.student-item:eq(' + idx + ')').removeClass('hide');
        console.log(idx);
        idx++;
      }
    });
  }

  paginate(studArr);
  $('a:eq(0)').trigger('click');


}());
