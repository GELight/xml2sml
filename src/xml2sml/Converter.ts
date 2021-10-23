import { parseString } from "xml2js";
import { SmlDocument } from '@gelight/sml';
import { Converter } from "@gelight/json2sml";

export default class Xml2SmlConverter {

    static async convert(xml: string, options?: {}): Promise<SmlDocument> {
        
        return new Promise((resolve, reject) => {
            parseString(xml, options, (err, json) => {
                if (!err) {
                    resolve(Converter.convert(json));
                } else {
                    reject("Error converting the XML string!");
                }
            });
        })

    }

}
