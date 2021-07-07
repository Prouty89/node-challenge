const server = require('./server.js');

const port = process.env.PORT || 8005;
server.listen(port, () => console.log(`\n* running on port ${port} *\n`));