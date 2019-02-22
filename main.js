var iPhonePrice = 899.95;
var valute = "$";
var number = 30;
var taxRate = iPhonePrice * 0.18;
var customsRate = iPhonePrice * 0.05;
var result = valute + (iPhonePrice + customsRate + taxRate) * number;
console.log(result) ;
alert(result);

sayHello();

function sayHello() {
    alert("hello");
}



iPhone (899.95)

var taxRate = iPhonePrice * 0.18;
var customsRate = iPhonePrice * 0.05;

function iPhone (iPhonePrice, taxRate, customsRate) {
    var result = iPhonePrice + customsRate + taxRate;
    console.log(result);
}





var result1 = calculatePrice(890, 46);
calculatePrice(650, 57);
alert(result1);


function calculatePrice(price, quantity) {
    var result = price * quantity;
    return result;
    console.log(result);
}



calculateCelsius(1);


function calculateCelsius(celsius) {
    var result = celsius * 1.8 + 32;
    console.log(result);
    
}


calculateFahrenheit(1);

function calculateFahrenheit(farenheit) {
    var result = (5/9) * (farenheit-32);
    console.log(result);
}

CodeAcademy (1);

function CodeAcademy (classes, sessionMonth, perMonth, winterBreak) {
    classes = 3;
    perMonth = 12;
    winterBreak = 6;
    sessionMonth = 6;
    var result = classes *( ( perMonth * sessionMonth ) - winterBreak );
    console.log(result);
    
}


function calculateTotalPrice(itemPrice) {
    return itemPrice * 1.05 * 1.18;
}

var iPhone = calculateTotalPrice(30);





function convertTemperature(temperature, type) {
    if (type == "celsius") {
        return temperature * 1.8 + 32; 
    } else if (type == "fahrenheit") {
        return (5/9) * (temperature - 32);
    } else {
        return temperature;
    }

}

var fahr = convertTemperature (38, "celsius");
var cels = convertTemperature(88, "fahrenheit");
var sameNum = convertTemperature(300);


function convertTemperature(temperature, type) {
    if (type == "celsius") {
        return temperature * 1.8 + 32; 
    } 

    if (type == "fahrenheit") {
        return (5/9) * (temperature - 32);
    } 

    return temperature;
}





var userInput = prompt("Enter a number");



function lazar(money) {
    if (money<500) {
        alert ("go lunch");
    }
    if (money>500) {
        alert ("go cinema")
    }
    
    if (money<100)
        alert ("go home")

}

var money = lazar (300);


function registration (bhp){
    if (bhp <= 85){
        alert("3000 denars");
    } else if (bhp > 85 && bhp < 150){
        alert("5000 denars");
 
    } else if (bhp > 150){
        alert("15000 denars");
    }
}
 
var bhp = registration (73);








function salaryTax (salary) {
    if (salary <= 1000) {
        return salary / 1.11;
    } else if (salary >= 1000) {
        return ((salary - 1000) / 1.18 ) + 1000;
    }

    console.log(salary)
}

var salary = salaryTax (1001);


console.log(salary);


function calculateTax (salary, type) {
    if (salary<=1000 && type!=="craftsman"){
       return salary*0.11;
    } else if (salary<=1000 && type==="craftsman"){
       return salary*0.05;
    } else if (salary>1000 && type!=="craftsman"){
       return (1000*0.11)+((salary-1000)*(0.18));
    } else if (salary>1000 && type==="craftsman"){
       return (1000*0.05)+((salary-1000)*(0.1));
    }else{
       alert("wrong input");
    }
    }
    var moneySum=calculateTax(1200, "craftsman");
    alert(moneySum);


    function concatenateStrings(string1, string2, boolean) {
       if (boolean === false) {
           return string1 + string2
       } else if (boolean === true) {
           return string2 + string1
       } else {
           return 'Error in parameters, please check again.'
       }
    }
    var result = concatenateStrings('Forze ', 'Juve ', false);
    alert(result);





function sayHi() {
    var i = 0;
    while(i < 20) {
        console.log("hai there");
        i++;
        if (i === 10) {
            break;
        }
    }

    console.log("function has ended");


}

sayHi()



function generateValues () {
    var i = 0;
    var max = 0;
    while (i<20){
        var random = Math.floor(Math.random() * 100) + 1  ;
        console.log(random);
        if (random>max){
            max=random;
        }
        i++;
    }
    console.log("the max number is" + max);
}
 
generateValues();



function sumOfNum () {
    var x = 101;
    var sum = 0;

    while (x <= 150) {
        sum = sum + Math.pow (x, 2);
        x++;
    }
    
    console.log(sum);
}

sumOfNum();
















