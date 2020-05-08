class App {
    handleGetGradesError(error) {
        console.error(error);
    }

    handleGetGradesSuccess(grades) {
        this.gradeTable.updateGrades(grades);               
    }

    constructor(gradeTable){
        this.gradeTable = gradeTable;
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
