const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await User.deleteMany({});

    await Thought.deleteMany({});

    const thoughts = [];

    await User.collection.insertOne({
        username: 'buttercup',
        email: 'buttercup2012@gmail.com'
    });

    await Thought.collection.insertMany(thoughts);

    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});