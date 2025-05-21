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
  const scriptFiles = [
    '202505091332_init.sql',
    '202505211510_init.sql',
    '202505211511_init.sql',
    '202505211512_init.sql', 
  ];

  try {
    for (const file of scriptFiles) {
      const filePath = path.join(__dirname, file);
      const sql = fs.readFileSync(filePath, 'utf8');
      console.log(`Executando ${file}...`);
      await pool.query(sql);
    }

    console.log('Todos os scripts SQL foram executados com sucesso!');
  } catch (err) {
    console.error('Erro ao executar o script SQL:', err);
  } finally {
    await pool.end();
  }
};

runSQLScript();
