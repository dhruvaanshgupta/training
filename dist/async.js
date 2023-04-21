"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
(0, node_fetch_1.default)("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((data) => console.log(data));
