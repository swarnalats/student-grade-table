class App {
    handleGetGradesError(error) {
        console.error(error);
    }

    handleGetGradesSuccess(grades) {
        this.cacheGrades = grades;
        this.gradeTable.updateGrades(grades); 
        var average = 0;
        var totalGrade = 0;
        for(var i=0; i< grades.length ;i++)  
            totalGrade += grades[i].grade;
        average = totalGrade/i;
        this.pageHeader.updateAverage(average);
    }

    constructor(gradeTable, pageHeader,gradeForm){
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.createGrade= this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
        this.deleteGrade = this.deleteGrade.bind(this);
        this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
        this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
        this.editGradeId = this.editGradeId.bind(this);
        this.editGrade = this.editGrade.bind(this);
        this.handleEditGradeError = this.handleEditGradeError.bind(this);
        this.handleEditGradeSuccess = this.handleEditGradeSuccess.bind(this);
    }

    getGrades() {
        $.ajax({
            method:"GET",
            url:"https://sgt.lfzprototypes.com/api/grades",
            success:this.handleGetGradesSuccess,
            error:this.handleGetGradesError, 
            headers:
                    {
                        "X-Access-Token": "l7M4qpGu"
                    }
            });   
    }   

    createGrade(name, course, grade){
        $.ajax({
            method:"POST",
            url:"https://sgt.lfzprototypes.com/api/grades",
            data:
            {
                "name": name,
                "course": course,
                "grade": grade
            },
            headers:
                    {
                        "X-Access-Token": "l7M4qpGu"
            },
            success:this.handleCreateGradeSuccess,
            error:this.handleCreateGradeError, 
        });
    }

    handleCreateGradeError(error){
        console.error(error);
    }
    handleCreateGradeSuccess(response){                
        this.cacheGrades.push(response);
        this.getGrades(); 
    }

    deleteGrade(id){
        this.deleteId = id; 
        $.ajax({
            method: "DELETE",
            url: "https://sgt.lfzprototypes.com/api/grades/"+id , 
            headers:
            {
                "X-Access-Token": "l7M4qpGu"
            },
            success:this.handleDeleteGradeSuccess,
            error:this.handleDeleteGradeError
        });
    }

    handleDeleteGradeError(error){
        console.error(error);
    }
    handleDeleteGradeSuccess(){
        for(var i=0; i<this.cacheGrades.length;i++) {
             if(this.cacheGrades[i].id == this.deleteId)
                this.cacheGrades.splice(i,1); 
        }
        this.getGrades();
    }    

    editGrade(name,course,grade){      
         $.ajax({
            method:"PATCH",
            url:"https://sgt.lfzprototypes.com/api/grades/"+ this.id, 
            data:{
                "name":name,
                "course":course,
                "grade":grade
            },
            headers: {
                "X-Access-Token": "l7M4qpGu"
            },
            success:this.handleEditGradeSuccess,
            error:this.handleEditGradeError
        });
    }
    editGradeId(id){
        this.id = id; 
    }
    handleEditGradeSuccess(editGrade) {
        for(var i=0; i<this.cacheGrades.length;i++) {
            if(this.cacheGrades[i].id == editGrade.id){
                this.cacheGrades[i].name = editGrade.name;
                this.cacheGrades[i].course = editGrade.course;
                this.cacheGrades[i].grade = editGrade.grade;
            }
        }
       this.getGrades();
    }
    handleEditGradeError(error){
        console.error(error);
    }        
    start(){
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade, this.editGrade);
        this.gradeTable.onDeleteClick(this.deleteGrade);
        this.gradeTable.onEditClick(this.editGradeId);        
    }
}