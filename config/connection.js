
var Sequelize = require("sequelize");

// Create MySQL connection using Sequelize
var sequelize = new Sequelize("burgers_db", "root", "Hanasandy905", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 1000
    }
});

// Export connection to other file to use.
module.exports = sequelize;