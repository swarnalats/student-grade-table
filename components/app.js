class App {
    handleGetGradesError(error) {
        console.error(error);
    }

    handleGetGradesSuccess(grades) {
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
        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleGetGradesError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
        this.deleteGrade = this.deleteGrade.bind(this);
        this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
        this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
            success:this.handleCreateGradesSuccess,
            error:this.handleCreteGradesError, 
        });
    }

    handleCreateGradeError(error){
        console.error(error);
    }
    handleCreateGradeSuccess(){
        this.getGrades();
    }

    deleteGrade(id){
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
        this.getGrades();
    }
        
    start(){
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade);
        this.gradeTable.onDeleteClick(this.deleteGrade);
    }
}
