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
        average = totalGrade/3;
        this.pageHeader.updateAverage(average);
    }

    constructor(gradeTable, pageHeader){
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
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
    
    start(){
        this.getGrades();
    }
}
