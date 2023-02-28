``` javascript
var informationTitle = ["Name", "Hobbies", "Socials", "Clossest Friends", "Languages Learned"];

//-----ABOUT-ME-----//

var information1 = {
  name: "Jude",
  pronouns: "he/him"
 };
var information2 = [
  "Video Games", 
  "Coding", 
  "Engineering",
  "Robotics",
  "Keyboards (kind of)",
  "Talking with friends <3",
  "Text art on Github"
];
var information3 = {
  instagram: "|-@xjomerx-|",
  twitter: "|-@Mojer37163603-|", 
  discord: "|-Kermit#0842-|",
  valorant: "|-Lump1a#Yum-| Current Rank = Gold",
  ffxiv: "|-Caleb Dinonuggets-| Favorite Class = DRK",
  osu: "|-xXMojerXx-| Ranked #251,061 2/27/2023"
};
var information4 = "Everyone in robotics club and Middle School Friends :), especially Mr. Jules-San <3"
var information5 = "Current Languages learned = 1; Javascript"

//-----ABOUT-ME-----//

var index = [1, 2, 3, 4, 5];

index.forEach(function(number){
  onEvent("aboutMeButton" + number, "click", function(){
    console.log(informationTitle[number - 1]);
    console.log("");
    console.log("information" + number);
    console.log("");
    if (number = 4){
      console.log("Thank you for everyone who has helped me throughout the years!");
      console.log("I really appreciate it from the bottom of my heart, I wish that i can repay everyone back one day");
      console.log("Also thanks Jason for teaching me all of these things, would have never figured these things out");
    }
  });
});
```
