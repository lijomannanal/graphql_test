import { Friends, Aliens } from './dbConnectors';
// class Friend {
//     constructor(id, { firstName, lastName, email, gender, age, contact}) {
//         this.id = id;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.email = email;
//         this.age = age;
//         this.contact = contact;

//     }
// }

//resolver map
export const resolvers = { 
    Query: {
        getOneFriend: (root, { id } ) => {
            return new Promise((resolve, reject) => {
              Friends.findById(id, (err, friend) => {
                if(err) reject(err);
                else resolve(friend);
              })
            });
        },
        getAliens: () => {
            return Aliens.findAll();
        }
    }, 
    Mutation: {
        createFriend: (root, { input }) => {
            const {
                firstName, lastName, gender, email, age, language, contacts 
            } = input; 
            const newFriend = new Friends({firstName, lastName,
                gender, email,age, language, contacts });

                return new Promise((resolve, reject) => {
                   newFriend.save((err) => {
                    if(err) reject(err);
                    else resolve(newFriend);
                   });
                });

            // console.log(_);
            // let id = require('crypto').randomBytes(10).toString('hex');
            // friendDatabase[id] = input;
            // return new Friend(id, input);
        },
        updateFriend: (root, { input }) => {
            const { id, ...rest } = input
            return new Promise((resolve, reject) => {
                Friends.findOneAndUpdate({ _id: id}, rest, { new: true}, (err, friend) => {
                    if(err) reject(err);
                    else resolve(friend);
                })
            })
        },
        deleteFriend: (root, { id }) => {
            return new Promise((resolve, reject) => {
                Friends.findOneAndDelete({ _id: id}, (err, friend) => {
                    if(err) reject(err);
                    else resolve("Successfully deleted");
                })
            })
        }
    }
};

