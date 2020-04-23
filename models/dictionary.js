module.exports = function(sequelize, DataTypes) {
    var Dictionary = sequelize.define("Dictionary", {

        word: DataTypes.STRING,
        meaning: DataTypes.STRING,

    });
    return Dictionary;
  };
  