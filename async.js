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
Object.defineProperty(exports, "__esModule", { value: true });
const getPokemon_1 = require("./src/getPokemon");
//for loop is compatible with async/await
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const list = yield (0, getPokemon_1.getPokemonList)();
            for (const listItem of list.results) {
                const pokemon = yield (0, getPokemon_1.getPokemon)(listItem.url);
                console.log(pokemon.name);
            }
        }
        catch (e) {
            console.error(e);
        }
    });
})();
//for each loop
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const list = yield (0, getPokemon_1.getPokemonList)();
            list.results.forEach((listItem) => __awaiter(this, void 0, void 0, function* () {
                const pokemon = yield (0, getPokemon_1.getPokemon)(listItem.url);
                console.log(pokemon.name);
            }));
        }
        catch (e) {
            console.error(e);
        }
    });
})();
