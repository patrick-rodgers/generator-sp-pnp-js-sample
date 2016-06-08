// this example shows the ability to chain operations, as well as the getAs typing works with other objects such as webs and lists.
import * as $ from "jquery";
import pnp from "sp-pnp-js";
import { Web } from "sp-pnp-js/lib/sharepoint/rest/webs";
import { List } from "sp-pnp-js/lib/sharepoint/rest/lists";
import { Item } from "sp-pnp-js/lib/sharepoint/rest/items";
import { ODataEntity, ODataEntityArray } from "sp-pnp-js/lib/sharepoint/rest/odata";

export class SPExample2 {

    public run(el: HTMLElement): void {

        let target = $(el);

        pnp.sp.web.select("Title", "Description").getAs(ODataEntity(MyWeb)).then(w => {

            // show some typed web data
            target.append(`<div>Web Title: ${w.Title}  Web Description: ${w.Description}</div>`);

            // because we have used getAs our object & properties are merged into the base Web object
            // so we can immediately chain this instance

            w.lists.orderBy("Title").top(10).getAs(ODataEntityArray(MyList)).then(lists => {

                // lists will already be typed as an array
                lists.forEach(element => {

                    // because we are working async we can fire and forget these if we want
                    // note that the lists won't necessarily be rendered in order due to the async nature
                    // if order or rendering were important another approach would be required
                    element.items.select("Title").top(3).getAs(ODataEntityArray(MyItem)).then(items => {

                        let parts = [];
                        parts.push(`List Title: ${element.Title}`);
                        parts.push(`List Description: ${element.Description}`);
                        parts.push(`First Three Item Titles: ${items.map(i => i.Title).join(", ")}`);
                        target.append(`<div style="margin-bottom: 10px;border:1px solid #cecece;">${parts.join("<br />")}</div>`);
                    });
                });
            });
        });
    }

}

class MyWeb extends Web {
    public Title: string;
    public Description: string;
}

class MyList extends List {
    public Title: string;
    public Description: string;
}

class MyItem extends Item {
    public Title: string;
}

