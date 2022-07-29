"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Lotes_1 = __importDefault(require("./routes/Lotes"));
const cors_1 = __importDefault(require("cors"));
class main {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
        this.config();
    }
    config() {
        this.app.use((0, cors_1.default)());
        this.app.set("port", process.env.PORT || 6969);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use("/api", Lotes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server in port " + this.app.get("port"));
        });
    }
}
const program = new main();
program.start();
//# sourceMappingURL=index.js.map