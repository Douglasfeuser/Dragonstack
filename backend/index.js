const Dragon = require('./dragon.js');

const fooey = new Dragon ({
    birthdate: new Date(),
    nickname: 'Fooey'
});

const balooo = new Dragon ({
    birthdate: new Date(),
    nickname: 'Baloo'
});

console.log('Drag 1', fooey);
console.log('Drag 2', balooo);

setTimeout(() => {
    const mimaar = new Dragon ({});
    console.log('Drag 3', mimaar);
}, 2200);

setTimeout(() => {
    const acnologia = new Dragon({ nickname: 'Acnologia'}, );
    console.log('Drag 4', acnologia);
}, 2200);

