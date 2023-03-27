require('dotenv').config();

const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  password: process.env.PG_PASSWD,
  port: process.env.PG_PORT,
})






const getPlans = async (request,response) =>{
    await pool.query('SELECT * FROM plan ORDER BY id ASC', (error, results) => {
        if (error) {
          throw error
        }
        response.set('Access-Control-Allow-Origin', '*');
        response.status(200).json(results.rows)
      })
};

// get single workout
const getPlanById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM plan WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }



const createPlan = (request, response) => {
    const { name, data, } = request.body
  
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.insertId}`)
    })
  }

// delete workout
const deletePlan = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

const updatePlan = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Workout'})
    }

    const workout = await Workouts.findOneAndUpdate({_id: id}, {
      ...req.body  
    })

    if (!workout){
        return res.status(404).json({err: 'No such workout'})
    }

    res.status(200).json(workout)
}

module.exports = {
    getPlans, 
    getPlanById, 
    createPlan,
    deletePlan,
    updatePlan
}
    
    
    
