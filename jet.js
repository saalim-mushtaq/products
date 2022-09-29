// var jet ={
//     name: "indigo",
//     model: 2017
// }
// var car ={
//     name: "indica",
//     model: 2017
// }

// function travel(a,b){
//     console.log(this.name + " is ready")
//     console.log("a" + a, "b" + b)
// }
// // travel.call(car)
// // travel.apply(car,[" brand"," new"])

// var fn = travel.bind(car);
// fn(" old", " model")


var mobile = function(model_no){
    // instance member

    this.model = model_no;
    this.price = 3000;
};
var samsung = new mobile ('galaxy');
var nokia= new mobile('3310');
mobile.prototype.color ='white';
document.write(samsung.color);
console.log(samsung);


var hau = document.getElementsByClassName('hat');
var jqu = document.getElementsByClassName("hajuq");

var jqp = document.getElementsByClassName("javqyt");
var xhw = document.getElementsByClassName('nxbvz');