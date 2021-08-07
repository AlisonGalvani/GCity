const app = require('./routes');

const portaAPI = 3000;
app.listen(portaAPI, () => {
  console.log(`API online em: http://localhost:${portaAPI}`);
});