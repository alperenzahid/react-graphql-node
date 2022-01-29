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
const resolvers = {
    Query: {
        characters(root, { filter, page }, { models }) {
            return __awaiter(this, void 0, void 0, function* () {
                return [
                    {
                        "id": 1,
                        "name": "Rick Sanchez",
                        "status": "Alive",
                        "species": "Human",
                        "type": "",
                        "gender": "Male",
                        "origin": {
                            "name": "Earth (C-137)",
                            "url": "https://rickandmortyapi.com/api/location/1"
                        },
                        "location": {
                            "name": "Earth (Replacement Dimension)",
                            "url": "https://rickandmortyapi.com/api/location/20"
                        },
                        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
                        "episode": [
                            "https://rickandmortyapi.com/api/episode/1",
                            "https://rickandmortyapi.com/api/episode/2",
                            "https://rickandmortyapi.com/api/episode/3",
                            "https://rickandmortyapi.com/api/episode/4",
                            "https://rickandmortyapi.com/api/episode/5",
                            "https://rickandmortyapi.com/api/episode/6",
                            "https://rickandmortyapi.com/api/episode/7",
                            "https://rickandmortyapi.com/api/episode/8",
                            "https://rickandmortyapi.com/api/episode/9",
                            "https://rickandmortyapi.com/api/episode/10",
                            "https://rickandmortyapi.com/api/episode/11",
                            "https://rickandmortyapi.com/api/episode/12",
                            "https://rickandmortyapi.com/api/episode/13",
                            "https://rickandmortyapi.com/api/episode/14",
                            "https://rickandmortyapi.com/api/episode/15",
                            "https://rickandmortyapi.com/api/episode/16",
                            "https://rickandmortyapi.com/api/episode/17",
                            "https://rickandmortyapi.com/api/episode/18",
                            "https://rickandmortyapi.com/api/episode/19",
                            "https://rickandmortyapi.com/api/episode/20",
                            "https://rickandmortyapi.com/api/episode/21",
                            "https://rickandmortyapi.com/api/episode/22",
                            "https://rickandmortyapi.com/api/episode/23",
                            "https://rickandmortyapi.com/api/episode/24",
                            "https://rickandmortyapi.com/api/episode/25",
                            "https://rickandmortyapi.com/api/episode/26",
                            "https://rickandmortyapi.com/api/episode/27",
                            "https://rickandmortyapi.com/api/episode/28",
                            "https://rickandmortyapi.com/api/episode/29",
                            "https://rickandmortyapi.com/api/episode/30",
                            "https://rickandmortyapi.com/api/episode/31"
                        ],
                        "url": "https://rickandmortyapi.com/api/character/1",
                        "created": "2017-11-04T18:48:46.250Z"
                    }
                ];
            });
        },
    },
};
exports.default = resolvers;
//module.exports = resolvers;
//# sourceMappingURL=resolver.js.map