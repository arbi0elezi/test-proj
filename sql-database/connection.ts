import "reflect-metadata";

import {createConnection} from 'typeorm';

export const initConn = (): void => {
    createConnection({
        type: "mysql",
        host: "some host",
        port: 3306,
        username: "some user",
        password: "somepass",
        database: "somechar",
        synchronize: true,
        logging: true
    }).then((): void => {
            console.log("Connected to DB");
    }).catch(err => console.log(err));
};

