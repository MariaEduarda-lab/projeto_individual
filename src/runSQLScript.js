const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

const runSQLScript = async () => {
  try {

    const scriptsDir = path.join(__dirname, 'scripts'); 
    
    const files = fs.readdirSync(scriptsDir);

    const sqlFiles = files
      .filter(file => file.endsWith('.sql'))
      .sort();

    for (const file of sqlFiles) {
      const filePath = path.join(scriptsDir, file);
      const sql = fs.readFileSync(filePath, 'utf8');
      
      console.log(`Executando: ${file}...`);
      await pool.query(sql);
      console.log(`✅ Sucesso: ${file}`);
    }

    console.log('🎉 Todos os scripts foram executados!');
  } catch (err) {
    console.error('❌ Erro:', err.message);
  } finally {
    await pool.end(); 
  }
};

runSQLScript();