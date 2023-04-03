// Create a Class
class Person {
       constructor(a,g,n){
        this.age = a;
        this.gender = g;
        this.name = n;
       }
}
class Child extends Person{
    super(age,gender,name){

    }
    getInfo(){
        return `Hello My name is ${this.name} and i am ${this.age} Years Old`;
    }
}

let obj = new Child("25","male","Antar");
console.log(obj.getInfo());

