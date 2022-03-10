const tracer = require('dd-trace');

tracer.init({
    enabled: true,
    debug: false,
});
tracer.use('http', { splitByDomain: true });
tracer.use('next');

console.log('initialized dd-trace');