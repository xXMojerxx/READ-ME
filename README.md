``` javascript
var informationTitle = ["Name","Hobbies","Socials","Clossest Friends","Current Languages Learned"];

//-----ABOUT-ME-----//
var information1 = "Jude Pulanco";
var information2 = [
  "Video Games", 
  "Coding", 
  "Engineering",
  "Robotics"
];
var information3 = {
  instagram: "@xjomerx",
  twitter: "@Mojer37163603", 
  discord:"Kermit#0842"
};
var information4 = "Everyone in robotics club :), especially Mr. Jules-San <3"
var information5 = "Current Languages learned = 1; Javascript"
//-----ABOUT-ME-----//

var index = [1, 2, 3, 4, 5];

index.forEach(function(index){
  onEvent("aboutMeButton" + index, "click", function(){
    console.log(informationTitle[index - 1]);
    console.log("");
    console.log("information" + index);
    console.log("");
    if (index = 4){
      console.log("Thank you for everyone who has helped me throughout the years!");
      console.log("I really appreciate it from the bottom of my heart and i wish that i can repay everyone back one day");
      console.log("Also thanks jason for teaching me these things for Javascript, its very helpful and I would have never learned anything without you :)");
    }
  });
});
```
