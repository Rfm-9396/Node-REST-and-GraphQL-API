require('dotenv').config();
/* -------- Express app ------ */
const express = require('express')
const app = express();
/* ------------------------- */
const plansRouter = require('./routes/plansRouter')


const port = process.env.PORT



/* -------Routes------- */
app.use('/api/plans', plansRouter)




app.listen(port, console.log(`running on port ${port}`));