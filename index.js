const Sing = require('./singleton');

Sing.start();

require('./test');
console.log(Sing.client);
console.log(Sing.client);
console.log(Sing.client);