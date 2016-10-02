//Dynamically add serch to page
$('.page-header').append('<div class="student-search"><input class="sInput" placeholder="Search for students..."/><button class="sSearch">Search</button><div>');

//craete an NodeList for all the student data
var students = document.getElementsByTagName('li');
//turn the NodeList into an array to manipulate.
var studArr = jQuery.makeArray(students);
//creating a reusable object for adding search results
var searchObj = [];


//Add click handler to search button inorder to filter student studArr
$('button.sSearch').on('click', function() {
  console.log('clicked');
  // set up search and reset by using no input to reset
  var searchFor = $('.sInput').val().toLowerCase();
  if (searchFor === '') {
    $('.pagination').remove();
    paginate(studArr);
    $('a:eq(0)').trigger('click');
  } else {
    // go through each and h3 section to search
    $('.student-item').each(function() {
      var $studElement = $(this);
      var $h3 = $(this).find('h3');
      var $name = $h3.html();
      console.log($studElement);
      console.log($name.indexOf(searchFor));
      if ($name.indexOf(searchFor) >= 0) {
        searchObj.push($studElement);
      }
    });
    $('.pagination').remove();
    $('student-item').remove();
    paginate(searchObj);
    $('a:eq(0)').trigger('click');
    searchObj = [];
  };
});

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
      idx++;
    }
  });
}

paginate(studArr);
$('a:eq(0)').trigger('click');
