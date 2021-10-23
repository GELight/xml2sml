# XML2SML - The XML to SML converter

## Release Notes

Latest version: ![npm](https://img.shields.io/npm/v/@gelight/xml2sml?style=for-the-badge)

Detailed release notes for each version are available on [GitHub](https://github.com/GELight/xml2sml/blob/master/CHANGELOG.md).

| Page | Link |
| ---- | ---- |
| Github | https://github.com/Stenway |
| Homepage | https://dev.stenway.com/SML/ |

---

## Using

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