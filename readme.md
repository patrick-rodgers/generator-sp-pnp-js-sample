# PnP SharePoint Sample Generator

This project contains a Yeoman generator which establishes a sample project to help you get started using the sp-pnp-js library.

## Learning

**Ensure you install [Yeoman](http://yeoman.io/learning/)**

`> npm install -g yo`

**Create a directory where you want to load the template**

```
    > mkdir samples
    > cd samples
```

**Run npm init and respond to prompts (defaults are fine)**

`> npm init`

**Run the generator**

`> yo sp-pnp-js-samples`

**Add the script tag and associated div to a script editor web part on your SharePoint site**

```
    <script type="text/javascript" src="http://localhost:8080/bundle/example-bundle.js" data-divid="pnp-sample-container"></script>
    <div id="pnp-sample-container"></div>
```

**Begin serving the samples by running this command:**

`> gulp serve`


Refresh the page to see the hello world sample. You can un-comment the other samples and try them, or write your own code. This pattern can be used to write your own standalone apps. When changes are made to any of the files the bundle will be re-built for you and you can refresh the page to see your updates.

## Build

You can also run the build command to create a minified bundle for deployment. It will be written to the build folder.

`> gulp build`