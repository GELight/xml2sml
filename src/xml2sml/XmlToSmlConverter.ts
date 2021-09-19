import { SmlDocument, SmlElement } from '@gelight/sml';
import XmlToSmlSettings from './XmlToSmlSettings';

export default class XmlToSmlConverter {

    static convert(xmlString: string): SmlDocument {
        let root: SmlElement = new SmlElement("SML");
        let doc: SmlDocument = new SmlDocument(root);
        
        let settings = new XmlToSmlSettings();

        // XmlToSmlConverter.convertXmlString(xmlString, root, settings);

        if (settings.case === 1) {
            doc.setEndKeyword("end");
            root.name = "sml";
        } else if (settings.case === 2) {
            doc.setEndKeyword("END");
        }
        if (doc.getRoot().nodes.length === 1 && doc.getRoot().nodes[0] instanceof SmlElement) {
            doc.setRoot(doc.getRoot().nodes[0]);
        }

        return doc;
    }

}
