const xpres = require("express");
const app = xpres();
const PORT = process.env.PORT || 5000;
const api= require('./Backend/API');
const uiRoutes = require('./uiRoutes');

app.use(xpres.static('public'));

app.use(xpres.urlencoded({extended: true}));

app.use(xpres.json());


app.use('/api', api);
app.use('/', uiRoutes);
app.listen(PORT,()=>console.log(`server is listening to PORT ${PORT}`))
