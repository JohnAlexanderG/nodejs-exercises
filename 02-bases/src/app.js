const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');
logger.log('hola mundo!');
logger.error('Ups! ha ocurrido un error!');

// Lesson 1
// const { emailTemplate } = require('./js-foundation/01-template');
// console.log(emailTemplate);


// Lesson 2
// require('./js-foundation/02-destructuring')


// Lesson 3 - 4
// const { getUserById } = require("./js-foundation/03-04-callbacks");

// const id = 2;

// getUserById(id, (error, user) => {
//     if (error) {
//         throw new Error(error)
//     }
//     console.log(user)
// })


// Lesson 5
// const { buildMakePerson } = require('./js-foundation/05-factory')
// const { getUUIdv4, getAge } = require('./plugins')
// require('./js-foundation/05-factory')

// const makeperson = buildMakePerson({ getUUIdv4, getAge })

// const alexander = makeperson({
//     name: 'Alexander',
//     birthDate: '1993-06-21',
// });

// console.log(alexander);


// Lesson 6
// const getPokemonById = require("./js-foundation/06-promises");

// getPokemonById(3)
//     .then((pokemon) => console.log({ pokemon }))