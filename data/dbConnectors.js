import mongoose  from "mongoose";
import _ from 'lodash';
import Sequelize from 'sequelize';
import casual from 'casual';

// Mongo connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/friends', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const friendSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    geneder: {
        type: String
    },
    age: {
        type: String
    },
    email: {
        type: String
    },
    language: {
        type: String
    },
    contacts: {
        type: Array
    },
});

export const Friends = mongoose.model('friends', friendSchema);


// SQlite connection

const sequelize = new Sequelize('databse', null, null, {
    dialect: 'sqlite',
    storage: './alien.sqlite'
});

export const Aliens = sequelize.define('aliens', {
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING},
    planet: { type: Sequelize.STRING}
});


Aliens.sync({force: true}).then(() => {
    _.times(10, (i) => {
      Aliens.create({
        firstName: casual.first_name,
        lastName: casual.last_name,
        planet: casual.word
      });
    });

});


