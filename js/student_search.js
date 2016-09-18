(function(){
  var studentArr = new Array();
  function Student(name, picture, email, joined) {
    this.name = name;
    this.picture = picture;
    this.email = email;
    this.start = joined;
  }
  $('ul li').each(function() {
    var newStudent = $(this).find('h3');
    newStudent = new Student();
    newStudent.name = $(this).find('h3');
    newStudent.picture = $(this).find('img');
    newStudent.email = $(this).find('span.email');
    newStudent.start = $(this).find('span.date');
    studentArr.push(newStudent);
  });
  console.log(studentArr);
}());
