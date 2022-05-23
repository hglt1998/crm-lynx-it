import {config} from '../config'
import mysql from 'mysql2/promise'

const connect = async () => {
    const conn = await mysql.createConnection(config);

    const [rows] = conn.query('SELECT 1 + 1')
    
    console.log(rows);
}

connect();