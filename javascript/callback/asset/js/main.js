function mauxanh(param){ 
    document.getElementById("main").style.backgroundColor="blue";
    console.log(param);
}
mauxanh(mauxanh);
mauxanh("mau xanh");

function maudo(param){
    document.getElementById("main").style.backgroundColor ="red";
    console.log(param);
}

maudo(maudo);
maudo("mau do");
function mauvang(param){   
    document.getElementById("main").style.backgroundColor = "yellow";
    console.log(param);
}
mauvang(mauvang);
mauvang("mau vang");


var courses = [
    'javascript',
    'php',
    'ruby'
];
//ananymous
var foreach = [
    'javascript',
    'php',
    'ruby'
]
//luu tru kieu map
// anonymous function
courses.map(function( course){
    console.log(course);
});
//vong lap for cho mang hoac cai gi cung dc
foreach.forEach(function(forearch){
    console.log(foreach)
})
const array = [1,2,3,4];

let users =[
    { id:11,name:'Adam',age:23,group: 'editor'},
    {id:47,name:'John',age:28,group: 'admin'},
    {id:2,name:'lafrt',age:28,group: 'form'},
    
];
let User = users.map((user)=> `\n${user.id}`).join('');
console.log(User);
 