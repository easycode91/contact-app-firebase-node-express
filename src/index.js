
const app = require('./app');


app.listen(app.get('port'), () => {
    console.log(`Server started on ${app.get('port')}`);
});