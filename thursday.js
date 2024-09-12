function Person(first, last, age, eye) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
}
const myName = new Person("saad", "saleem", 18, "blue");
document.getElementById('demo').innerHTML = "My name is " + myName.firstname + "." +
    "My father name is" + myName.lastname + "." + " My age is " + myName.age + "." + "My eye color is" + myName.eyecolor + ".";
function Student(name, age, sclass) {
    this.studentname = name;
    this.studentage = age;
    this.studentclass = sclass;
}
const saad = new Student("Bunty", 18, "3rdyear");
document.getElementById('demo1').innerHTML = "Student name is" + saad.studentname + "."
    + "Student age is" + saad.studentage + "." + "Student class is" + saad.studentclass + ".";
function Acadmey(name, Address, fee) {
    this.Acadmeyname = name;
    this.Aaddress = Address;
    this.Fees = fee;
    this.Acadmeytime = "8pm to 11:30pm"
}
let Tadow = new Acadmey("USlearning", "Dakh khana bazar Samundari", "100$")
document.getElementById('demo2').innerHTML = "Acadmey name is:" + Tadow.Acadmeyname + "." + " The address of acadmey is:" +
    Tadow.Aaddress + "." + "The  Fee of acadmey is:" + Tadow.Fees + "." + "Acadmey Timing is:" + Tadow.Acadmeytime;
function Person1(first, last, age, eye) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
}
const myFather = new Person1("John", "Botta", 55, "Black");
const myMother = new Person1("Aunti Parveen", "NAhi pta", 99, "red");
const mySelf = new Person1("Saad", "Saleem", 18, "black");
myFather.Nationalitty = "Punjabi";
document.getElementById('demo3').innerHTML = "Name is:" + myFather.firstname + "." + "Last name is:" + myMother.lastname + "."+
"Age is :" + mySelf.age + "." + "Eye color is" + myMother.eyecolor + "." + "Nationalitty:" + myFather.Nationalitty + ".";