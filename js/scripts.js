$(document).ready(function(){
  $("form#food").submit(function(event){
    event.preventDefault();

    var firstFood = $("input#food1").val();
    console.log(firstFood);
    var secondFood  = $("input#food2").val();
    console.log(secondFood);
    var thirdFood  = $("input#food3").val();
    console.log(thirdFood);
    var foods = [firstFood, secondFood, thirdFood];

    var result;
    $(".result").show();

    $("#answer1").append(foods[0]);
    $("#answer2").append(foods[1]);
    $("#answer3").append(foods[2]);

  });
});
