const fs = require('fs');
const path = require('path');
const db = require('../config/db');
require('dotenv').config();

const runSQLScript = async () => {
  const client = await db.connect();
  try {
    const scriptsDir = __dirname;

    const files = fs.readdirSync(scriptsDir);

    const sqlFiles = files
      .filter(file => file.endsWith('.sql'))
      .sort();

    for (const file of sqlFiles) {
      const filePath = path.join(scriptsDir, file);
      const sql = fs.readFileSync(filePath, 'utf8');

      console.log(`Executando: ${file}...`);
      await client.query(sql);
      console.log(`✅ Sucesso: ${file}`);
    }

    console.log('🎉 Todos os scripts foram executados!');
  } catch (err) {
    console.error('❌ Erro:', err.message);
  } finally {
    client.release();
  }
};

runSQLScript();
