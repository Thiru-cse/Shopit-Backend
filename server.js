const app = require('./app');

const dotenv = require('dotenv');
const connectDatabase = require('./config/database')

//Setting up config files
dotenv.config({ path: 'config/config.env' })

// Connecting to database
connectDatabase();


app.listen(process.env.PORT, () => {
    console.log(`Server running : ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})