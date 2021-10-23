import Converter from "../src/xml2sml/Converter";

const trimAllLines = (doc) => {
    return doc.split('\n').map(line => line.trim());
};

describe("Converter", () => {

    const xmlExamples = [
        {
            title: "XML - Breakfast Mmenu",
            xml: `<breakfast_menu>
                <food>
                    <name>Belgian Waffles</name>
                    <price>$5.95</price>
                    <description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>
                    <calories>650</calories>
                </food>
            </breakfast_menu>`,
            expectedSml: `SML
                breakfast_menu
                    food
                        item
                            name "Belgian Waffles"
                            price $5.95
                            description "Two of our famous Belgian Waffles with plenty of real maple syrup"
                            calories 650
                        End
                    End
                End
            End`
        },
        {
            title: "XML Bookstore",
            xml: `<bookstore>
                <book category="COOKING">
                    <title lang="en">Everyday Italian</title>
                    <author>Giada De Laurentiis</author>
                    <year>2005</year>
                    <price>30.00</price>
                </book>
                <book category="CHILDREN">
                    <title lang="en">Harry Potter</title>
                    <author>J K. Rowling</author>
                    <year>2005</year>
                    <price>29.99</price>
                </book>
                <book category="WEB">
                    <title lang="en">Learning XML</title>
                    <author>Erik T. Ray</author>
                    <year>2003</year>
                    <price>39.95</price>
                </book>
            </bookstore>`,
            expectedSml: `SML
                bookstore
                    book
                        item
                            $
                                category COOKING
                            End
                            title
                                item
                                    _ "Everyday Italian"
                                    $
                                        lang en
                                    End
                                End
                            End
                            author "Giada De Laurentiis"
                            year 2005
                            price 30.00
                        End
                        item
                            $
                                category CHILDREN
                            End
                            title
                                item
                                    _ "Harry Potter"
                                    $
                                        lang en
                                    End
                                End
                            End
                            author "J K. Rowling"
                            year 2005
                            price 29.99
                        End
                        item
                            $
                                category WEB
                            End
                            title
                                item
                                    _ "Learning XML"
                                    $
                                        lang en
                                    End
                                End
                            End
                            author "Erik T. Ray"
                            year 2003
                            price 39.95
                        End
                    End
                End
            End`
        },
        {
            title: "XML - ",
            xml: `<div class="liveSample" spry:region="dsItems3">
                <table class="dataTable">
                    <tr>
                        <th spry:sort="@id batters/batter/@id topping/@id">SKU</th>
                        <th spry:sort="@id">ID</th>
                        <th spry:sort="name">Name</th>
                        <th spry:sort="ppu">Price Per Unit</th>
                        <th spry:sort="batters/batter">Batter</th>
                        <th spry:sort="topping">Topping</th>
                    </tr>
                    <tr spry:repeat="dsItems3">
                        <td>{@id}-{batters/batter/@id}-{topping/@id}</td>
                        <td>{@id}</td>
                        <td>{name}</td>
                        <td>{ppu}</td>
                        <td>{batters/batter} </td>
                        <td>{topping} </td>
                    </tr>
                </table>
            </div>`,
            expectedSml: `SML
                div
                    $
                        class liveSample
                        spry:region dsItems3
                    End
                    table
                        item
                            $
                                class dataTable
                            End
                            tr
                                item
                                    th
                                        item
                                            _ SKU
                                            $
                                                spry:sort "@id batters/batter/@id topping/@id"
                                            End
                                        End
                                        item
                                            _ ID
                                            $
                                                spry:sort @id
                                            End
                                        End
                                        item
                                            _ Name
                                            $
                                                spry:sort name
                                            End
                                        End
                                        item
                                            _ "Price Per Unit"
                                            $
                                                spry:sort ppu
                                            End
                                        End
                                        item
                                            _ Batter
                                            $
                                                spry:sort batters/batter
                                            End
                                        End
                                        item
                                            _ Topping
                                            $
                                                spry:sort topping
                                            End
                                        End
                                    End
                                End
                                item
                                    $
                                        spry:repeat dsItems3
                                    End
                                    td {@id}-{batters/batter/@id}-{topping/@id} {@id} {name} {ppu} "{batters/batter} " "{topping} "
                                End
                            End
                        End
                    End
                End
            End`
        },
        {
            title: "XML - TutorialsPoint - CDATA",
            xml: `<script>
                <![CDATA[
                    <Nachricht>Willkommen auf TutorialsPoint</Nachricht>
                ]]>
            </script>`,
            expectedSml: `SML
                script ""/"                "/"                    <Nachricht>Willkommen auf TutorialsPoint</Nachricht>"/"                "/"            "
            End`
        }
    ];

    for (const example of xmlExamples) {
        it(`convert() - Example - ${example.title}`, async () => {
            // when
            const smlDocument = await Converter.convert(example.xml);
            // then
            // console.log(smlDocument.getRoot().getAttributes("script"));
            expect(trimAllLines(smlDocument.toString())).toEqual(trimAllLines(example.expectedSml));
        });
    }

});
