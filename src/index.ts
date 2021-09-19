import XmlToSmlConverter from "./xml2sml/XmlToSmlConverter";

export {
    XmlToSmlConverter
};

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

let doc = XmlToSmlConverter.convert(xml);
let root = doc.getRoot();

// console.log(root.element("food")[0].attribute("description").getValues()[0]);
