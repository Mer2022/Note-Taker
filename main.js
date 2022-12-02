const xpres = require("express");
const app = xpres();
const PORT = process.env.PORT || 5000;
const api= require('./Backend/API');
const uiRoutes = require('./uiRoutes');

app.use(xpres.static('public'));
// parse incoming string or array data
app.use(xpres.urlencoded({extended: true}));
// parse incoming JSON data
app.use(xpres.json());

// Use apiRoutes
app.use('/api', api);
app.use('/', uiRoutes);
app.listen(PORT,()=>console.log(`server is listening to PORT ${PORT}`))
