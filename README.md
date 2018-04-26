# node-tumblr-api
NodeJS tumblr api testing

Small test of the tumblr API for extracting the data (in this case photo URLs) from photo blog entries. Minimal EJS/Bootstrap display page to show the results.

## Installation

Clone the repository to your local system.

Generate a tumblr API key. See [the Authentication section](https://github.com/tumblr/tumblr.js/blob/master/README.md) of the tumblr.js documentation for more.

This API key needs to be added to the config/config.js file in order for the application to work.

## Usage

```bash
node app.js
```

The application will listen on port 3010 by default (this can be changed in config/config.js) and will display the images it's able to extract from the latest photo blog entries of the defined blog.