"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstPokemon = exports.getPokemon = exports.getPokemonList = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const getPokemonList = () => __awaiter(void 0, void 0, void 0, function* () {
    const listRes = yield (0, node_fetch_1.default)("https://pokeapi.co/api/v2/pokemon/");
    return yield listRes.json();
});
exports.getPokemonList = getPokemonList;
const getPokemon = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const dataRes = yield (0, node_fetch_1.default)(url);
    return yield dataRes.json();
});
exports.getPokemon = getPokemon;
const getFirstPokemon = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const list = yield (0, exports.getPokemonList)();
            console.log("getting the list.");
            resolve(yield (0, exports.getPokemon)(list.results[0].url));
        }
        catch (error) {
            reject(error);
        }
    }));
});
exports.getFirstPokemon = getFirstPokemon;
