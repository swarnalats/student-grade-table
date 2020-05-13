class GradeForm {
    constructor(formElement){
            this.formElement = formElement; 
            (this.formElement).onsubmit = this.handleSubmit.bind(this);                       
    }
    onSubmit(createGrade){        
        this.createGrade = createGrade;
    }
    handleSubmit(event){
        event.preventDefault();
        var formObj = new FormData(event.target);           
        var formName = formObj.get("name");
        var formCourse = formObj.get("course");
        var formGrade = formObj.get("grade");
        this.createGrade(formName, formCourse, formGrade);
        event.target.reset();        
    }
}