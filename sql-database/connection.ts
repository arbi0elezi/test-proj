import "reflect-metadata";

import {createConnection} from 'typeorm';

export const initConn = (): void => {
    createConnection({
        type: "mysql",
        host: "193.164.132.242",
        port: 3306,
        username: "remote_root",
        password: "r35NaHCqWbF9e%",
        database: "magusdb",
        synchronize: true,
        logging: true
    }).then((): void => {
            console.log("Connected to DB");
    }).catch(err => console.log(err));
};

