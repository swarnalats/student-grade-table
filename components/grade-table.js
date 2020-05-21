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
            tbody.appendChild(this.renderGradeRow(tableHeads[i][1] , this.deleteGrade ,this.editGradeId));           
    }

    onDeleteClick(deleteGrade){
        this.deleteGrade = deleteGrade;
    }

    onEditClick(editGradeId){
        this.editGradeId = editGradeId;
    }

    renderGradeRow(data, deleteGrade,editGradeId){ 
        var newGradeRow = document.createElement('tr');

        var newName = document.createElement('td');
        newName.textContent = data.name; 

        var newCourse = document.createElement('td');
        newCourse.textContent = data.course; 

        var newGrade = document.createElement('td');
        newGrade.textContent = data.grade; 

        var operationsButton = document.createElement('td');
        
        var editButton = document.createElement('button');
        var createFontEdit = document.createElement('i');
        createFontEdit.className= 'fas fa-edit';
        createFontEdit.style.color ="blue";
        editButton.appendChild(createFontEdit);
       
       
        editButton.addEventListener('click', function () { 
            //When clicked start the edit process
            document.getElementById('studentName').value = data.name;
            document.getElementById('studentCourse').value = data.course;
            document.getElementById('studentGrade').value = data.grade;
            document.getElementById('submitButton').value = "Update";
            editGradeId(data.id);
        });    

        var deleteButton = document.createElement('button');
        deleteButton.style.class = "btn btn-danger";
        
        var createFontDelete = document.createElement('i');
        createFontDelete.className= 'fa fa-trash';
        createFontDelete.style.color ="red";
        deleteButton.appendChild(createFontDelete);

        deleteButton.addEventListener("click", function () { deleteGrade(data.id)}); 
        
        operationsButton.appendChild(editButton); 
        operationsButton.appendChild(deleteButton); 
       
        newGradeRow.appendChild(newName);
        newGradeRow.appendChild(newCourse);
        newGradeRow.appendChild(newGrade);
        newGradeRow.appendChild(operationsButton);
        
        return newGradeRow;
    }
}