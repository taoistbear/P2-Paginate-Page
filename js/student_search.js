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
}());
