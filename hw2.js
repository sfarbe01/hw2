var numbers = [];
var count = 0;
var sum = 0;
var avg = 0;
var strings = [];
var accum = "";

function mathHappen(event) {
    var textarea = $("#textarea").val();
    var number = Number(textarea);
    if(!isNaN(number))  {
        numbers.push(count);
        sum += number;
        avg = sum/numbers.length;
        count = numbers.length;
    console.log(textarea);
    console.log(count);
    console.log(sum);
    console.log(avg); 
    $( "#count" ).html(count);
    $( "#sum" ).html(sum);
    $( "#avg" ).html(avg);
    
  } else{
      strings.push(textarea);
      $( "#strings" ).html(strings.length);
      console.log(strings.length);
      accum = accum + textarea;
      console.log(accum);
      $( "#accum" ).html(accum);
  }
    event.preventDefault();
}


function resetButton(event) {
  sum = 0;
  avg = 0;
  strings = [];
  accum = "";
  count = 0;
  numbers = [];
  console.log(sum);
  console.log(avg);  
  event.preventDefault();

}

/*

var numeric = [];  
var alpha =[];
var sum = 0;
var avg = 0;
var strings = 0;
var accum = 0;
function addNumber(event) {
  var formNumber = document.mathForm.formNumber.value;
  var number = Number(formNumber);
  var formString = document.mathForm.formString.value;
  var string = String(formString);
  if(!isNaN(number))  {
    inputs.push(number);
    sum += number;
    avg = sum/numeric.length;
    document.getElementById("count").textContent = numeric.length;
    document.getElementById("sum").textContent = sum;
    document.getElementById("avg").textContent = avg;
    console.log(numeric);
    console.log(sum);
    console.log(avg);  
  }
    if(isNaN(string)){
    alpha.concat(object);
    document.getElementById("strings").textContent = alpha.length;
    document.getElementById("accum").textContent = accum;
    console.log(alpha);
    console.log(strings);
    console.log(accum); 
  event.preventDefault();
}

function resetButton(event) {
    sum = 0;
    avg = 0;
    strings = 0;
    accum = 0;
    numeric = [];
    alpha = [];
    event.preventDefault();
}
}
*/

              