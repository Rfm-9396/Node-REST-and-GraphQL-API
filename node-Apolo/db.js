const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'db.ljcmcghwdbaapfphduim.supabase.co',
  database: 'postgres',
  password: '!Feller1588888',
  port: 5432,
})

module.exports = pool;
