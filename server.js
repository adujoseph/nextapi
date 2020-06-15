const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');

const connectDB = require('./config/db');

//graphQL Imports
const graphqlHttp = require('express-graphql')
const graphqlSchema = require('./graphql/schema_')
const graphqlResolver = require('./graphql/resolver_')

dotenv.config({path: './config/config.env'});

//connect to db
connectDB();

// routes files
const searches  = require('./routes/searches');
const user  = require('./routes/users');
// const { GraphQLSchema } = require('graphql');
// initialize app
const app = express();

// body parser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
//graphql
app.use('/graphql', graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true

}))

// Enable CORS
app.use(cors());

// Mount Routers
app.use('/api/v1/searches', searches);
app.use('/api/v1/user', user);
// app.use(error)


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold)
});

//Handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    server.close(() => process.exit(1));
});
















// const path = require('path');

// const morgan = require('morgan');
// const colors = require('colors');
// const fileupload = require('express-fileupload');
// const cookieParser = require('cookie-parser');
// const mongoSanitize = require('express-mongo-sanitize');
// const helmet = require('helmet');
//const xss = require('xss-clean');
// const rateLimit = require('express-rate-limit');
// const hpp = require('hpp');

//const error = require('./middleware/error');

// const logger = require('./middleware/logger')

//load env variables




//middleware

//const error = require('./middleware/error')

// routes files

// const bootcamps  = require('./routes/bootcamps');
// const courses  = require('./routes/courses');
// const auth  = require('./routes/auth');
// const user  = require('./routes/user');
// const reviews  = require('./routes/reviews');

// // initialize app
// const app = express();

// // body parser
// app.use(express.json());

// //cookie parser
// app.use(cookieParser());


// Dev logging middleware
// if(process.env.NODE_ENV === 'development'){
//     app.use(morgan('dev'))
// }
// app.use(logger)

// File uploading
// app.use(fileupload());

// Sanitize data
// app.use(mongoSanitize());

// Set security headers
// app.use(helmet());

// Prevent XSS attacks
// app.use(xss());

// Rate limiting
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000, // 10 mins
//   max: 100
// });
// app.use(limiter);

// Prevent http param pollution
// app.use(hpp());

// Enable CORS
// app.use(cors());

//Set static folder
// app.use(express.static(path.join(__dirname, 'public')))


// Mount Routers
// app.use('/api/v1/bootcamps', bootcamps);
// app.use('/api/v1/courses', courses);
// app.use('/api/v1/auth', auth);
// app.use('/api/v1/user', user);
// app.use('/api/v1/reviews', reviews);
// app.use(error)




