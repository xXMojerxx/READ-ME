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
  discord: "|-Kermit#0842-|",
  destiny2: "|-TJIM_Mojer#3024-| Favorite Class = Arc Exo Hunter",
  valorant: "|-Lump1a#Yum-| Current Rank = IDK maybe silver",
  ffxiv: "|-Caleb Dinonuggets-| Favorite Class = DRK",
  osu: "|-xXMojerXx-| Ranked #251,061 2/27/2023"
};
var information4 = "Everyone in robotics club and Middle School Friends :), especially Mr. Jules-San <3";
var information5 = "Current Languages learned = 2 [ish]; Javascript && Python[ish]";

//-----ABOUT-ME-----//

var information = [information1, information2, information3, information4, information5];

for (var index = 0; index < 6; index++) {
  console.log(informationTitle[index - 1]);
  console.log(information[index - 1]);
  console.log("");
  if (index == 4) {
    console.log("Thank you for everyone who has helped me throughout the years!");
    console.log("I really appreciate it from the bottom of my heart, I wish that i can repay everyone back");
    console.log("Also thanks Jason for teaching me all of these things, very smart mans out here :)");
    console.log("");
  } else {
    console.log("yeha idk about everything else");
  }
}
```
