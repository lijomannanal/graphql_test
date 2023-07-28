import express from "express";
import schema from './data/schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();




app.get('/', (req, res) => {
    res.send('Graphql is amazing!')
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true

}));

app.listen(8080, () => {
    console.log("running on server port 8080");
})