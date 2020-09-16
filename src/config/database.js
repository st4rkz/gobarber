require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, //  Define a criação da coluna de createdAt e updatedAt dentro de cada tabela no banco.
    underscored: true,
    underscoredAll: true,
  },
};
