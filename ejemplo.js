
const moment = require('moment');
moment.locale('es');
console.log('Nací ' + moment('21/06/2000' , 'DD/MM/YYYY').fromNow());
