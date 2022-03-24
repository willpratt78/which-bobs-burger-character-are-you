$(document).ready(function() {
  $("#quiz-form").submit(function(e){
    e.preventDefault();
    const answer1 = parseInt($("#question1").val());
    const answer2 = parseInt($("#question2").val());
    const answer3 = parseInt($("#question3").val());
    const answer4 = parseInt($("#question4").val());
    const answer5 = parseInt($("#question5").val());

    const total = answer1 + answer2 + answer3 + answer4 + answer5;
    console.log(total)
    let result;
    let image;
    if(total <= 6) {
      result = "Bob"
      image = "<img src='img/bob.jpg'>"
    } else if(total <= 14) {
      result = "Tina"
      image = "<img src='img/tina.jpg'>"
    } else if(total <= 17) {
      result = "Louise"
      image = "<img src='img/louise.jpg'>"
    } else if(total <= 22) {
      result = "Gene"
      image = "<img src='img/gene.png'>"
    } else {
      result = "Linda"
      image = "<img src='img/linda.jpg'>"
    }
    $("#output").text("");
    $("#output").append("<p>" + result + "</p>");
    $("#output").append(image);
  });
});





