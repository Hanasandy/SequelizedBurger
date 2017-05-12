module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primarykey: true,
    //   //allowNull:false,
    //   validate: {
    //     len: [1]
    //   }
    // },
    name: {
      type: DataTypes.STRING,
      defaultValue: false,
      validate: {
        len: [1]
      }
    }, 
    devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
  });
  return Burger;
};

