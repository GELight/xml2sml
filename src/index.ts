import Converter from "./xml2sml/Converter";

export {
    Converter
};

// const xml = `
// <?xml version="1.0" encoding="UTF-8"?>
// <xml xmlns="http://default.namespace.uri">
//     <a>
//         <b id="1">one</b>
//         <b id="2"><![CDATA[some <cdata>]]>two</b>
//         <ns:c xmlns:ns="http://another.namespace" ns:id="3">three</ns:c>
//     </a>
// </xml>
// `;

// Converter
//     .convert(xml)
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
