import { SmlDocument } from '@gelight/sml';
import { Converter } from "@gelight/json2sml";
import * as xmlToJSON from "xmltojson";

export default class Xml2SmlConverter {

    static async convert(xml: string, options?: {}): Promise<SmlDocument> {
        
        return new Promise((resolve, reject) => {
            resolve(
                Converter.convert(
                    xmlToJSON.parseString(xml, options)
                )
            );
        })

    }

}
