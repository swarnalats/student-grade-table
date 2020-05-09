var studentGradeTableId = document.getElementById('sgt');
var gradeTable = new GradeTable(studentGradeTableId); 
var pageHeaderId = document.getElementById('pageheader');
var pageHeader = new PageHeader(pageHeaderId);
const app = new App(gradeTable, pageHeader);
app.start();