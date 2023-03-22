const keyword = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    const fortunes = [
      "A pleasant surprise is waiting for you",
      "A smile is your personal welcome mat",
      "All will go well with your new project",
      "Courtesy is contagious",
      "Go take a rest; you deserve it",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },

  putFlower: (req, res) => {
    const flower = req.body;
    console.log(req.body);
    console.log(flower);

    if (flower) {
      res.status(200).send(`You edited ${flower}`);
    } else {
      res.status(400).send("that is incorrect");
    }
  },

  addKeyword: (req, res) => {
    keyword.push(req.body);
    console.log(keyword);
    res.status(200).send(req.body);
  },

  deleteKeyword: (req, res) => {
    keyword.length = 0;
    res.status(200).send("Keywords removed");
  },
};
