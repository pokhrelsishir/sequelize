"use strict";
module.exports = (sequelize, DataTypes) => {
  const University = sequelize.define(
    "University",
    {
      name: DataTypes.STRING,
      allowNull: false
    },
    {}
  );
  University.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Employee, {
      foreignKey: "companyId",
      as: "employees"
    });
  };
  return University;
};
