class GradeForm {
    constructor(formElement){
            this.formElement = formElement; 
            (this.formElement).onsubmit = this.handleSubmit.bind(this);                       
    }
    onSubmit(createGrade, editGrade){        
        this.createGrade = createGrade;
        this.editGrade = editGrade;
    }
    handleSubmit(event){
        event.preventDefault();
        var formObj = new FormData(event.target);    
        var formName = formObj.get("name");
        var formCourse = formObj.get("course");
        var formGrade = formObj.get("grade");

        if(document.getElementById('submitButton').value == "Add")            
            this.createGrade(formName, formCourse, formGrade);
        else            
            this.editGrade(formName, formCourse, formGrade);       
        event.target.reset();        
    }
}