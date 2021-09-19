import XmlToSmlConverter from "../src/xml2sml/XmlToSmlConverter";

describe("XmlToSmlConverter", () => {

    it.each`
        xml | expected
        ${""} | ${""}
    `(`constructor($xml) - returns '$expected'`,
        ({ xml, expected }) => {
            // when
            const converter = XmlToSmlConverter.convert(xml);
            // then
            expect("").toBe(expected);
        });

});
