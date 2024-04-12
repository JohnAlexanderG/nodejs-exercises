// import { getUUIdv4, getAge, buildLogger } from "./plugins";

// // Lesson 3 - 4
// import { getUserById } from "./js-foundation/03-04-callbacks";
// // Lesson 5
// import { buildMakePerson } from './js-foundation/05-factory';
// // Lesson 6
// import { getPokemonNameById } from "./js-foundation/06-promises";

// import { findHeroById } from "./services/hero.services";

// // Lesson 3 - 4
// const id = 2;

// getUserById({id, callback: (error, user) => {
//     if (error) {
//         throw new Error(error)
//     }
//     console.log(user)
// }});

// // Lesson 5
// const makeperson = buildMakePerson({ getUUIdv4, getAge })

// const alexander = makeperson({
//     name: 'Alexander',
//     birthDate: '1993-06-21',
// });

// console.log(alexander);


// // Lesson 6
// getPokemonNameById(3)
//     .then((pokemon) => console.log({ pokemon }))

// // 
// const logger = buildLogger('app.js');
// logger.log('hola mundo!');
// logger.error('Ups! ha ocurrido un error!');

// // 
// const hero = findHeroById(1)
// console.log("🚀 ~ hero:", hero?.name ?? 'No heroe found!');