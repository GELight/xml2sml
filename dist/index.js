"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XmlToSmlConverter = void 0;
const XmlToSmlConverter_1 = __importDefault(require("./xml2sml/XmlToSmlConverter"));
exports.XmlToSmlConverter = XmlToSmlConverter_1.default;
let xml = `
<breakfast_menu>
    <food>
        <name>Belgian Waffles</name>
        <price>$5.95</price>
        <description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>
        <calories>650</calories>
    </food>
</breakfast_menu>
`;
let doc = XmlToSmlConverter_1.default.convert(xml);
let root = doc.getRoot();
// console.log(root.element("food")[0].attribute("description").getValues()[0]);
//# sourceMappingURL=index.js.map