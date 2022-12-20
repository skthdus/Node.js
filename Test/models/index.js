const Sequelize = require("sequelize");
const Book = require("./books");
const env = "development";
const config = require("../config/config")[env];

//db 연결 정보
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {}; //sequelize, object

//key           //value(db정보)
db.sequelize = sequelize;

db.Book = Book; //db와 테이블 연결

Book.init(sequelize); //table 초기화
Book.associate(db); //관계 설정

module.exports = db;
