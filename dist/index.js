"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Converter = void 0;
const Converter_1 = __importDefault(require("./node/xml2sml/Converter"));
exports.Converter = Converter_1.default;
// const xml = `
// <xml xmlns="http://default.namespace.uri">
//     <a>
//         <b id="1">one</b>
//         <b id="2"><![CDATA[some <cdata>]]>two</b>
//         <ns:c xmlns:ns="http://another.namespace" ns:id="3">three</ns:c>
//     </a>
// </xml>
// `;
// /**
//  * Possible options on related github package 'xml2js'.
//  * 
//  * Github: https://github.com/Leonidas-from-XIV/node-xml2js#options
//  */
// const options = {};
// Converter
//     .convert(xml, options)
//     .then(doc => {
//         // console.log(doc.getRoot());
//         console.log(doc.toString());
//         // console.log(doc.getRoot().getElement("breakfast_menu").getElement("food").getElements("item"));
//         // console.log(doc.getRoot().getElement("breakfast_menu").getElement("food").nodes);
//         // console.log(
//         //     doc.getRoot()
//         //         .getElement("breakfast_menu")
//         //         .getElement("food")
//         //         .getElements("item")[1]
//         //         .getAttribute("name")
//         //         .getValues()[0]
//         // );
//     }).catch(e => console.log(e));
//# sourceMappingURL=index.js.map