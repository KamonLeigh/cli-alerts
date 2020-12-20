const alert = require('./index.js');


alert();
alert({
    type: `success`,
    msg: `Everything finished!`,
    name: `Done`
})

alert({
    type: `warning`,
    msg: `You did not add something`
})

alert({
    type: `info`,
    msg: `Byron is awesome`
})

alert({
    type: `error`,
    msg: `You have an error`
})