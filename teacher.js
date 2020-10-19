 
 //import Student from './student.js';
 class Teacher extends Student {
    constructor(salary,subjects) {
       super(Id,name,email,mobile_number);
       this.salary=salary;
       this.subjects=subjects;

    }
    mSalary(id){
        return `Salary of teacher is ${this.salary}`;
  
  }
  mSubject(id){
      return `Subject of teacher is ${this.subjects}`;
  }
    
}
let teacher1 =new Teacher(456987 ,'Tariq','tariq.butair@gmail.com',"077369852",'800',' [English, Arabic, Math, science] ');
//console.log(teacher1);

