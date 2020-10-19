class Student {
    constructor(Id,name,email,mobile_number) {
       this.Id=Id;
       this.name=name;
       this.email=email;
       this.mobile_number= mobile_number;
      
    
}
  mName(id){
      return `Name of student is ${this.name}`;

}
mNumber(id){
    return `Number of student is ${this.mobile_number}`;
}
}

 student1 =new Student(123456 ,'Dania','dabutair@gmail.com',"077369852");
 console.log(student1)

 //export default Student
