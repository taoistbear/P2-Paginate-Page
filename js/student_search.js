//Dynamically add serch to page
$('.page-header').append('<div class="student-search"><input class="sInput" placeholder="Search for students..."/><button class="sSearch">Search</button><div>');

//save original data in a object variable
var $orgStud = $('ul');

//craete an NodeList for all the student data
var students = document.getElementsByTagName('li');
//turn the NodeList into an array to manipulate.
var studArr = jQuery.makeArray(students);

//Add click handler to search button inorder to filter student studArr
$('button.sSearch').on('click', function() {
  // set up search and reset by using no input to reset
  var searchFor = $('.sInput').val().toLowerCase();
  // set up false for any results
  var results = false;

  if (searchFor === '') {
    results = true;
    $('.noResults').remove();
    $('.pagination').remove();
    $('ul').remove();
    $('.page').append($orgStud);

    //craete an NodeList for all the student data
    var students = document.getElementsByTagName('li');
    //turn the NodeList into an array to manipulate.
    var studArr = jQuery.makeArray(students);

    paginate(studArr);
    $('a:eq(0)').trigger('click');
  } else {
    // set results to true
    results = true;
    // go through each and h3 section to search
    var $resultUl = $('<ul></ul>');
    $('.student-item').each(function() {
      var $studElement = $(this).html();
      var $name = $(this).find('h3').html();
      if ($name.search(searchFor) >= 0) {
        $resultUl.append('<li>' + $studElement + '</li>');
      }
      $('ul').addClass('student-list');
      $('li').addClass('student-item');
      $('li').addClass('cf')
      $('.pagination').remove();
      $('ul').remove();
      $('.page').append($resultUl);

    });

    //craete an NodeList for all the NEW student data
    var newStudents = document.getElementsByTagName('li');
    //turn the NodeList into an array to manipulate.
    var newStudArr = jQuery.makeArray(newStudents);

    paginate(newStudArr);
    $('a:eq(0)').trigger('click');

  }
  if ($('.student-list').html() == '') {
    $('.pagination').remove();
    $('.student-item').addClass('hide');
    $('.student-list').append('<li class="noResults">No Results. Please Refresh Page.</li>');
  }

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
    var idx = $(this).parent().index() * 10;
    $('a').removeClass('active');
    $(this).addClass('active');
    $('.student-item').each(function() {
      $(this).addClass('hide');
    });
    for ( var i = 0; i < 10; i++) {
      $('.student-item:eq(' + idx + ')').removeClass('hide');
      idx++;
    }
  });
}

paginate(studArr);
$('a:eq(0)').trigger('click');
