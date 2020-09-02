//日志相关配置
module.exports.loggerSetting = {
	dir: "logs",
	level: "DEBUG"
};


//数据库相关配置
module.exports.dbConfig = {
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "static",
    connectionLimit: 10,
    port: "3306",
    waitForConnections: false,
    multipleStatements: true
};