import * as $ from "jquery";
import { HelloWorld } from "./helloworld";
// import { SPExample } from "./sp";
// import { SPExample2 } from "./sp2";

$(() => {

    let divId = $("script[data-divid]").attr("data-divid");

    let hello = new HelloWorld();
    $(`#${divId}`).html(hello.sayHi());

    // let spexample = new SPExample();
    // spexample.run().then(s => $(`#${divId}`).html(`Item Title: ${s}`));

    // let spexample2 = new SPExample2();
    // spexample2.run(document.getElementById(divId));
});
