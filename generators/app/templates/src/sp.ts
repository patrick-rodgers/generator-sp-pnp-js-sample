import pnp from "sp-pnp-js";
import { Item } from "sp-pnp-js/lib/sharepoint/rest/items";
import { List } from "sp-pnp-js/lib/sharepoint/rest/lists";
import { ODataEntityArray } from "sp-pnp-js/lib/sharepoint/rest/odata";

export class SPExample {

    // we have to do everything with Promises since we always work async
    public run(): Promise<string> {

        // we use our custom ensure list function that will ensure the list exists with an item in it
        return this.ensureList().then(list => {

            // once we have the list let's get the items, selecting only the title and case the result as an array of ExampleItem instance
            return list.items.select("Title").getAs(ODataEntityArray(ExampleItem)).then(items => {

                // here we have a correctly typed object with a Title and all the expected REST methods available
                return items[0].Title;
            });
        });
    }

    private ensureList(): Promise<List> {

        // create and return a new Promise
        return new Promise((resolve) => {

            // use the library's ensure method to create the list if it doesn't exist
            pnp.sp.web.lists.ensure("PnP Example List").then(result => {

                // if the list was just created, this property will be true
                if (result.created) {

                    // add an item to the list
                    result.list.items.add({ Title: "My First Item" }).then(() => resolve(result.list));
                }

                // we already had the list, so just return the list
                resolve(result.list);
            });
        });
    }
}

// this is our example item
class ExampleItem extends Item {

    // it has one property, Title - we could have all the columns from the list if we wanted
    public Title: string;
}
