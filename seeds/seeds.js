const mongoose = require('mongoose');
const User = require('../models/user');
const Thought = require('../models/thought');
const Reaction = require('../models/reaction');

const { connect, connection } = require("mongoose");

connect("mongodb://127.0.0.1:27017/thoughtHive", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userData = [
  {
    username: 'Alice',
    email: 'alice@example.com',
  },
  {
    username: 'Bob',
    email: 'bob@example.com',
  },
  {
    username: 'MarieCurie',
    email: 'marie@example.com',
  },
  {
    username: 'AdaLovelace',
    email: 'ada@example.com',
  },
  {
    username: 'RosieTheRiveter',
    email: 'rosie@example.com',
  },
  {
    username: 'HermioneGranger',
    email: 'hermione@example.com',
  },
  {
    username: 'DaenerysTargaryen',
    email: 'daenerys@example.com',
  },
  {
    username: 'IndianaJones',
    email: 'indiana@example.com',
  },
  {
    username: 'LukeSkywalker',
    email: 'luke@example.com',
  },
];

const thoughtData = [
  {
    thoughtText: 'Hello world!',
    username: 'Alice',
  },
  {
    thoughtText: 'Lorem ipsum dolor sit amet',
    username: 'Bob',
  },
  {
    thoughtText: 'Eureka!',
    username: 'MarieCurie',
  },
  {
    thoughtText: 'Analytical Engine FTW!',
    username: 'AdaLovelace',
  },
  {
    thoughtText: 'We can do it!',
    username: 'RosieTheRiveter',
  },
  {
    thoughtText: "It's Leviosa, not Leviosa!",
    username: 'HermioneGranger',
  },
  {
    thoughtText: 'Dracarys!',
    username: 'DaenerysTargaryen',
  },
  {
    thoughtText: 'It belongs in a museum!',
    username: 'IndianaJones',
  },
  {
    thoughtText: 'I have a bad feeling about this...',
    username: 'LukeSkywalker',
  },
];

const reactionData = [
  {
    reactionBody: 'I love it!',
    username: 'Alice',
  },
  {
    reactionBody: 'Cool!',
    username: 'Bob',
  },
  {
    reactionBody: 'Science rules!',
    username: 'MarieCurie',
  },
  {
    reactionBody: 'Yes, please!',
    username: 'AdaLovelace',
  },
  {
    reactionBody: 'We can do it!',
    username: 'RosieTheRiveter',
  },
  {
    reactionBody: 'Wingardium Leviosa!',
    username: 'HermioneGranger',
  },
  {
    reactionBody: 'Dracarys!',
    username: 'DaenerysTargaryen',
  },
  {
    reactionBody: 'Fortune and glory, kid. Fortune and glory.',
    username: 'IndianaJones',
  },
  {
    reactionBody: 'May the Force be with you.',
    username: 'LukeSkywalker',
  },
];


const seedDatabase = async () => {
  try {
    await mongoose.connection.dropDatabase();

    const users = await User.create(userData);
    const thoughts = await Thought.create(thoughtData);

    // create the reactions with a new ObjectId
    const reactions = await Reaction.create(reactionData.map((reaction) => ({ ...reaction, reactionId: new mongoose.Types.ObjectId() })));

    for (const thought of thoughts) {
      const user = users.find((u) => u.username === thought.username);
      user.thoughts.push(thought);
      await user.save();
    }

    for (const reaction of reactions) {
      const thought = thoughts[Math.floor(Math.random() * thoughts.length)];
      thought.reactions.push(reaction);
      await thought.save();
    }

    console.log('thoughtHIVE database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDatabase();