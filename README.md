# XML2SML - The XML to SML converter

## Release Notes

Latest version: ![npm](https://img.shields.io/npm/v/@gelight/xml2sml?style=for-the-badge)

Detailed release notes for each version are available on [GitHub](https://github.com/GELight/xml2sml/blob/master/CHANGELOG.md).

| Page | Link |
| ---- | ---- |
| Github | https://github.com/Stenway |
| Homepage | https://dev.stenway.com/SML/ |

---

## Using in node.js

**Convert XML into an SML document**

```js
import Converter from "@gelight/xml2sml";

const xml = `
<breakfast_menu>
    <food>
        <name>Belgian Waffles</name>
        <price>$5.95</price>
        <description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>
        <calories>650</calories>
    </food>
    <food>
        <name>ORIGINAL BRITISH CRUMPETS</name>
        <price>$6.99</price>
        <description>Original British Crumpets are a yeast and flour dessert. With this recipe you can conjure up British tea biscuits in no time at all.</description>
        <calories>1510</calories>
    </food>
</breakfast_menu>
`;

Converter
    .convert(xml)
    .then(doc => {
        
        // console.log(doc.getRoot());
        // console.log(doc.toString());
        // console.log(doc.getRoot().getElement("breakfast_menu").getElement("food").getElements("item"));
        // console.log(doc.getRoot().getElement("breakfast_menu").getElement("food").nodes);
        
        console.log(
            doc.getRoot()
                .getElement("breakfast_menu")
                .getElement("food")
                .getElements("item")[1]
                .getAttribute("name")
                .getValues()[0]
        );

    }).catch(e => console.log(e));
```

### Result

```bash
ORIGINAL BRITISH CRUMPETS
```

### Result of - **console.log(doc.toString())**

```bash
SML
    breakfast_menu
        food
            item
                name "Belgian Waffles"
                price $5.95
                description "Two of our famous Belgian Waffles with plenty of real maple syrup"
                calories 650
            End
            item
                name "ORIGINAL BRITISH CRUMPETS"
                price $6.99
                description "Original British Crumpets are a yeast and flour dessert. With this recipe you can conjure up British tea biscuits in no time at all."
                calories 1510
            End
        End
    End
End
```

## Using in browser

```html
<html>
    <head>
        <title>SML - Simple Markup Language</title>
        <style>
            html, body {
                width: 100%;
                height: 100%;
              }
              body {
                background: linear-gradient(161deg, #333a47 0%, #1c1d24 100%);
                color: #b6c4e7;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .output {
                padding: 1rem 2rem;
                background: #0a0c10;
                box-shadow: 0 0 1rem 0 rgba(0,0,0,.5);
                border: 1px dashed #8ca0c5;
                border-radius: .5rem;
                margin: auto;
                display: flex;
                flex-direction: column;
                overflow: auto;
                max-width: 90%;
                max-height: 70%;
                tab-size: 4;
              }
        </style>
    </head>
    <body>
        <div class="output"></div>

        <script src="https://unpkg.com/@gelight/xml2sml"></script>
        <script>

          const xml = `
            <xml xmlns="http://default.namespace.uri">
                <a>
                    <b id="1">one</b>
                    <b id="2"><![CDATA[some <cdata>]]>two</b>
                    <ns:c xmlns:ns="http://another.namespace" ns:id="3">three</ns:c>
                </a>
            </xml>
          `;

          /**
           * Possible options on related github package 'xmlToJSON'.
           * 
           * Github: https://github.com/SummersRemote/xmlToJSON
           */

           const options = {
            mergeCDATA: false,
            xmlns: true,
            attrsAsObject: false,
            namespaceKey: 'ns',
            textKey: 'text',
            valueKey: 'value',
            attrKey: 'attr',
            cdataKey: 'cdata'
          };
          
          XML2SML.Converter.convert(xml, options).then(doc => {
            
            let pre = document.createElement("pre");
            pre.textContent = doc.toString();
            
            document.querySelector('.output').append(pre);

          });

        </script>
    </body>
</html>
```