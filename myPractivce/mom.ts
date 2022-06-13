@addPriority
@addLevel
class Course {
 name = "CS569";
 constructor(){
 console.log('Class Course initialized')
 }
}
function addLevel(targetClass){
 console.log('addLevel')
 return class{
 level = 500;
 name = new targetClass().name;
 }
}
function addPriority(targetClass){
 console.log('addPriority')
 return class{
 priority = 1;
 level = new targetClass().level;
 name = new targetClass().name;
 }
}
var a = new Course();
console.log(a)