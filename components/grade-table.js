class GradeTable {
    constructor(tableElement) {
        this.tableElement = tableElement;
    }

    updateGrades(grades){
        var tbody = (this.tableElement).querySelector('tbody');  
        $(tbody).empty();

        var tableHeads = Object.entries(grades);
        for(var i=0; i < tableHeads.length ; i++) {
            var tableRow = document.createElement('tr');    
           
            var studentName = document.createElement('td');
            studentName.textContent = tableHeads[i][1].name;

            var studentCourse = document.createElement('td');
            studentCourse.textContent = tableHeads[i][1].course;

            var studentGrade = document.createElement('td');
            studentGrade.textContent = tableHeads[i][1].course;

            tableRow.appendChild(studentName);
            tableRow.appendChild(studentCourse);
            tableRow.appendChild(studentGrade);

            this.tableElement.appendChild(tableRow);            
        }
    }
}