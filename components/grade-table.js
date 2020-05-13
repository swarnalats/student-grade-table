class GradeTable {
    constructor(tableElement,noGradesElement) {
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
    }

    updateGrades(grades){
        var tbody = (this.tableElement).querySelector('tbody');  
        tbody.innerHTML = '';

        var tableHeads = Object.entries(grades);

        for(var i=0; i < tableHeads.length ; i++) 
            tbody.appendChild(this.renderGradeRow(tableHeads[i][1] , this.deleteGrade ));           
    }
    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;
    }
    renderGradeRow(data, deleteGrade){ 
        var newGradeRow = document.createElement('tr');

        var newName = document.createElement('td');
        newName.textContent = data.name; 

        var newCourse = document.createElement('td');
        newCourse.textContent = data.course; 

        var newGrade = document.createElement('td');
        newGrade.textContent = data.grade; 

        var newButton = document.createElement('td');
        var deleteButton = document.createElement('BUTTON');
        deleteButton.innerHTML = "DELETE";
        deleteButton.style.class = "btn btn-danger";
        deleteButton.style.backgroundColor = "red"; 
        deleteButton.addEventListener("click", function () { deleteGrade(data.id)}); 
        newButton.appendChild(deleteButton); 
       
        newGradeRow.appendChild(newName);
        newGradeRow.appendChild(newCourse);
        newGradeRow.appendChild(newGrade);
        newGradeRow.appendChild(newButton);

        return newGradeRow;
    }
}