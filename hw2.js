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
}
