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
const xml2js_1 = require("xml2js");
const json2sml_1 = require("@gelight/json2sml");
class Xml2SmlConverter {
    static convert(xml, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                (0, xml2js_1.parseString)(xml, options, (err, json) => {
                    if (!err) {
                        resolve(json2sml_1.Converter.convert(json));
                    }
                    else {
                        reject("Error converting the XML string!");
                    }
                });
            });
        });
    }
}
exports.default = Xml2SmlConverter;
//# sourceMappingURL=Converter.js.map