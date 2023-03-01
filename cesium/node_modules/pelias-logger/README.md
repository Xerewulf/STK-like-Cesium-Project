<p align="center">
  <img height="100" src="https://raw.githubusercontent.com/pelias/design/master/logo/pelias_github/Github_markdown_hero.png">
</p>
<h3 align="center">A modular, open-source search engine for our world.</h3>
<p align="center">Pelias is a geocoder powered completely by open data, available freely to everyone.</p>
<p align="center">
<a href="https://en.wikipedia.org/wiki/MIT_License"><img src="https://img.shields.io/github/license/pelias/api?style=flat&color=orange" /></a>
<a href="https://hub.docker.com/u/pelias"><img src="https://img.shields.io/docker/pulls/pelias/api?style=flat&color=informational" /></a>
<a href="https://gitter.im/pelias/pelias"><img src="https://img.shields.io/gitter/room/pelias/pelias?style=flat&color=yellow" /></a>
</p>
<p align="center">
	<a href="https://github.com/pelias/docker">Local Installation</a> ·
        <a href="https://geocode.earth">Cloud Webservice</a> ·
	<a href="https://github.com/pelias/documentation">Documentation</a> ·
	<a href="https://gitter.im/pelias/pelias">Community Chat</a>
</p>
<details open>
<summary>What is Pelias?</summary>
<br />
Pelias is a search engine for places worldwide, powered by open data. It turns addresses and place names into geographic coordinates, and turns geographic coordinates into places and addresses. With Pelias, you’re able to turn your users’ place searches into actionable geodata and transform your geodata into real places.
<br /><br />
We think open data, open source, and open strategy win over proprietary solutions at any part of the stack and we want to ensure the services we offer are in line with that vision. We believe that an open geocoder improves over the long-term only if the community can incorporate truly representative local knowledge.
</details>

# Logger

The centralized logger package for Pelias, which wraps [winston](https://github.com/winstonjs/winston) with
Pelias-specific transports and default configurations.

### Config
The logger will set its log levels to the `logger.level` property in `pelias-config`, which should be set to any of the
default winston [options](https://github.com/winstonjs/winston#logging-levels). `logger.timestamp` and
`logger.colorize` take boolean values (defaulting to `true`) that indicate whether log lines should have a
timestamp/be colorized.

### Interface
##### `get( name, loggerOpts )`
Retrieve a logger with a specific name or, if none is found, create a new one.

  * `name`: the name to search for/assign to the logger
  * `loggerOpts`: if a new logger has to be created, the options to pass to
    [`winston.Logger()`](https://github.com/winstonjs/winston#instantiating-your-own-logger)

##### `winston`
The winston package is exposed via this option, to provide access to any items needed in custom `loggerOpts` passed to
`get()` (like `winston.transports.*` classes).

### Example
```javascript
var peliasLogger = require( 'pelias-logger' );
var logger1 = peliasLogger.get( 'logger1' );
var logger2 = peliasLogger.get( 'logger2', {
	transports: [
		new peliasLogger.winston.transports.File( {
			filename: 'output.txt',
			timestamp: true
		})
	]
});
logger1.warn( 'hello' );
```
