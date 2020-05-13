var studentGradeTableId = document.getElementById('sgt');
var gradeTable = new GradeTable(studentGradeTableId); 
var pageHeaderId = document.getElementById('pageheader');
var pageHeader = new PageHeader(pageHeaderId);
var formElementId = document.getElementById('studentform'); 
var formElement = new GradeForm(formElementId);
const app = new App(gradeTable, pageHeader,formElement);
app.start();