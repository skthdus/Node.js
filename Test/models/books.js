const Sequelize = require("sequelize");

module.exports = class Book extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        num: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        author: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        company: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        isbn: {
          type: Sequelize.STRING(30),
          allowNull: false,
        },
        count: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
      },
      {
        // 테이블에 대한 설정 지정
        sequelize, //init 매개변수
        modelName: "Book", //프로젝트에서 사용할 모델의 이름
        tableName: "books", //실제 데이터베이스 테이블 이름
        charset: "utf8",
      }
    );
  }
  static associate(db) {
    //User / Project
    // db.User.hasMany(db.Project, { foreignKey: "id", sourceKey: "id" }); //1:N
    // db.User.hasOne; //1:1
    // db.User.belongsToMany; //N:M
    // db.Project.belongsTo(db.User, { foreignKey: "id", targetKey: "id" }); //1:1
    // db.Project.belongsToMany; // N:M
  }
};
