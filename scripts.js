function myFunction() {
  var text;
  var areYouIdiot = prompt("Are you an idiot?", "No", "Yes", "Maybe");
  switch(areYouIdiot) {
    case "Yes":
      text = "Yes you are an idiot, its pretty sad that you are aware enough to openly write it down here...";
      break;
    case "No":
      text = "Come on ! don't lie to yourself, you know you are an idiot.";
      break;
    case "Maybe":
      text = "Maybe really ? what is it to be unsure of ? you idiot cunt.";
      break;
    default:
      text = "Fucking moron you broke the most useless program ever.";
  }
  document.getElementById("demo").innerHTML = text;
}