"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("./src"));
const PORT = process.env.PORT || 8000;
src_1.default.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
