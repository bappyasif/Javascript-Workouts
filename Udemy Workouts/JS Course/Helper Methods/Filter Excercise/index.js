// Excercise 01
let channels = [
  { name: "HBO", premium: true },
  { name: "LIFE", premium: false },
  { name: "Max", premium: true },
  { name: "Cooking channel", premium: false },
  { name: "WOBI", premium: false },
];

let premiumChannels = channels.filter((channel) => channel.premium === true);
console.log(premiumChannels);

// With Existing Select Tag
premiumChannels.forEach((channel) => {
  let sel = document.querySelector("select");
  let opt = document.createElement("option");
  if (channel.premium) {
    opt.text = channel.name;
    sel.add(opt, null);
  }
});

// Excercise 02
let channel = [
  { name: "HBO", premium: true },
  { name: "LIFE", premium: false },
  { name: "Max", premium: true },
  { name: "Cooking channel", premium: false },
  { name: "WOBI", premium: false },
];
let user = {
  name: "Francis",
  premium: true,
  premiumChannels: function () {
    // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
    // return channel.filter((channel) => channel.premium);
    let $this = this;
    return channel.filter((channel) => {
      if (channel.premium && this.premium) {
        return channel.name;
      }
    });
  },
  channels: function () {
    // GET THE NON-PREMIUM CHANNELS
    return channel.filter((channel) => !channel.premium);
  },
};
console.log(user.premiumChannels());
console.log(user.channels());

// With Existing Select Tag
user.premiumChannels().forEach((channel) => {
  let sel = document.querySelectorAll("select")[1];
  let opt = document.createElement("option");
  if (channel.premium) {
    opt.text = channel.name;
    sel.add(opt, null);
  }
});
