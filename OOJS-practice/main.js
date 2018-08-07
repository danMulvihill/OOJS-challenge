
//#1
function Multiplier2(){
    this.storedNum = 1;
    this.multiply = function(num){
        this.storedNum = num*this.storedNum;
        return this.storedNum;
    }
    this.getCurrentValue = function(){
        return this.storedNum;
    }
}

var num = new Multiplier2(5);
var num2 = new Multiplier2(1);

console.log("val2: "+num.getCurrentValue());
console.log("mult: " +num.multiply(5));
console.log("val: "+num.getCurrentValue())
console.log("mult: "+num.multiply(-0.9));
console.log("mult: "+num.multiply(Math.PI));
console.log("val: "+num.getCurrentValue())

document.onkeypress = function(e){
    //console.log(e.key);
    document.getElementById("out2").innerHTML += "<li>"+e.key+"+"+num2.getCurrentValue()+"="+num2.multiply(e.key)+"</li>";
}

//#2
function Album(albumName){
    this.albumName = albumName;
    this.photos = [];
    this.addPhoto = function(photo){
        this.photos.push(photo);
    }
    this.listPhotos = function(){
        for (let i = 0; i<this.photos.length; i++){
            console.log(i+": "+this.photos[i].fileName+" ("+this.photos[i].location+")");
            document.getElementById("photos").innerHTML += "<img src='./img/"+this.photos[i].url+".jpg'>";

        }
    }
    this.accessPhoto = function(order){
        console.log('Photo #'+order+' is '+this.photos[order].fileName)
    }
}

function Photo(fileName, location, url){
    this.fileName = fileName;
    this.location = location;
    this.url = url
}

var catPhotos = new Album("Cat Photos");

var photo1 = new Photo("cat chasing fly", "Philadelphia", "cat");
var photo2 = new Photo("Grandma with Fluffy", "West Palm Beach, FL", "grandma");

catPhotos.addPhoto(photo1);
catPhotos.addPhoto(photo2);
catPhotos.listPhotos();
catPhotos.accessPhoto(1);


//#3
function Person(name, dept){
    this.name = name;
    this.dept = dept;
}

function Teacher(name, dept, officeLoc){
    Person.call(this, name, dept);
    this.officeLoc = officeLoc;
    this.findOffice = function(name){
        console.log(this.name+" is located at "+this.officeLoc)
    }
}
Teacher.prototype = Object.create( Person.prototype );


function Student(name, dept, studentID){
    Person.call(this, name, dept)
    this.studentID = studentID;
    // this.listStudents = function() {
    //     console.log(this.name);
    //   }
}
Student.prototype = Object.create(Person.prototype);


function School(name){
    this.name = name;
    this.members = [];
    this.addMember = function(member){
        this.members.push(member);
    }

    this.listMembers = function(){
        for (let x of this.members)
            console.log(x.name+" in "+x.dept)
    }
}

var teacher1 = new Teacher("Dr. Stark", "Poli Sci", "Rm 343");
var student1 = new Student("Danerys Targaryn", "Biology", 5344);
var student2 = new Student("John Snow", "General Studies", 5345);

var school1 = new School("University of Westeros");
school1.addMember(teacher1);
school1.addMember(student1);
school1.addMember(student2);

teacher1.findOffice();
school1.listMembers();



