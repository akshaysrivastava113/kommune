import app from "./app";

require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

/* IMPORTANT TASKS: 
    1. Storing the user id from the token in localstorage for now, this is probably not secure, fix it later
*/