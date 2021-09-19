"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sml_1 = require("@gelight/sml");
const XmlToSmlSettings_1 = __importDefault(require("./XmlToSmlSettings"));
class XmlToSmlConverter {
    static convert(xmlString) {
        let root = new sml_1.SmlElement("SML");
        let doc = new sml_1.SmlDocument(root);
        let settings = new XmlToSmlSettings_1.default();
        // XmlToSmlConverter.convertXmlString(xmlString, root, settings);
        if (settings.case === 1) {
            doc.setEndKeyword("end");
            root.name = "sml";
        }
        else if (settings.case === 2) {
            doc.setEndKeyword("END");
        }
        if (doc.getRoot().nodes.length === 1 && doc.getRoot().nodes[0] instanceof sml_1.SmlElement) {
            doc.setRoot(doc.getRoot().nodes[0]);
        }
        return doc;
    }
}
exports.default = XmlToSmlConverter;
//# sourceMappingURL=XmlToSmlConverter.js.map