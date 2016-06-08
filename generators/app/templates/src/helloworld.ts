import pnp from "sp-pnp-js";

export class HelloWorld {

    public sayHi(): string {
        return `Hello World :: ${pnp.util.getRandomString(20)}`;
    }
}
