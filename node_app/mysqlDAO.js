const mysql = require('mysql2');
  class MySqlDao {
    dbConfigs = {
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    }
    _connection = null;
    constructor() {
        this._connection = mysql.createConnection(this.dbConfigs);
    }
    getconnection() {
        return this._connection;
    }
    _connect() {
        try {
            this._connection.connect((err) => {
                if (err) {
                    throw err
                }
            });
        } catch (err) {
            return console.error('error: ' + err.message);
        }
    }
    async query(query){
        return await this._connection.promise().query(query);
    }
}
module.exports = MySqlDao;