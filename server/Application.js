"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const http = require("http");

class Application {
    constructor() {
        this.app = express();
        this.http = http.createServer(this.app);
        this.app.set('view engine', 'ejs');
        this.app.set('views', path.resolve(__dirname + '/views'));

        this.app.use('/osvaldo', express.static(path.resolve('./browser/osvaldo')));
        this.app.use('/otavio', express.static(path.resolve('./browser/otavio')));
        this.app.use('/bruno', express.static(path.resolve('./browser/bruno')));

        this.http.listen(80, () => {
            console.log('rodando');
            console.log('aqui', path.resolve('./browser'));
        });
        this.app.use('/favicon.ico', express.static(path.resolve(__dirname + '/favicon.ico')));
    }
}
exports.Application = Application;
//# sourceMappingURL=Application.js.map