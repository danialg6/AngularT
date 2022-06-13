// console.log("hello world1");
// //number,string,boolean
// let x:string="hi"
// x=123

// let y:any="abc"
// y=123

// let z:number|string='abc'
// z=true

// //array

// var a:Array<number|string>=[1,,2,3]
// a.push(4)
// a.push("hello123")
// console.log(a);

// let obj:[{name:string,num:number}]=[{name:"thao",num:123}]
// x[0].name="Thoa T";
//create an array of students 
var students: [{id:number|string,address:string}]=[{id:"num 2",address:"123 Maple Avenue"},{id:2,address:"4567 Silicon Value"}];
console.log(students)
class Point{
    x=1;
    y=1;
    constructor(public x:number,public y:number){

    }
    ///traditional way
    // getX=()=>{
    //     return this.x;
    // }
    // getY=()=>{
    //     return this.y;
    // }
}
class Point implements iPoint{
    x=1;
    y=1;
    getX=()=>{
        return this.x;
    }
}
class PointZ extends Point {
    z:number=3;
}
var a=new PointZ(1,2)
console.log(a)
var x=new Point(1,2)
console.log(x.getY)

//////////interface and class
//implements
//set/get
//constructor



//generics

function f<T>(x:T):T{
return x;
}
console.log(f(1))
console.log(f<string>("123"))
console.log(f<number>(2))

///generics

//interface
interface iPoint<T,U>{
    x:T;
    y:U;
}
var a:iPoint<number>={x:1,y:2}
console.log(a);
var b:iPoint<string>={x:"1",y:"2"}
console.log(b);

var a:iPoint<number,string>={x:1,y:"2"}
console.log(a);

//class
class Point<T,U>{
    x:T;
    y:U;
    z:number;
}
var a:Point<number>={x:1,y:2}
console.log(a);
var b:Point<string>={x:"1",y:"2"}
console.log(b);

var a:Point<number,string>={x:1,y:"2"}
console.log(a);


class Coord{
    value:number;
}
var c:Point<Coord>={x:null,y:1};
a.x=new Coord();
console.log(c)


////Decorator
@addPriority
@addLevel
class Course{
    console.log("course")
    name="CS598"
}
function addLevel(targetClass){
    console.log("add level")
    return class {
        level=500;
        name=new targetClass().name;
    }
}
var mom=new Course();
console.log(mom);

function addPriority(targetClass){
    console.log("priority")
    return class {
        level=new targetClass().level;
        name=new targetClass().name;
    }
}