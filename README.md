# HTML Tidy2 [![CI Status](https://github.com/c0b41/htmltidy2/actions/workflows/test.yml/badge.svg)](https://github.com/c0b41/htmltidy2/actions/workflows/test.yml)

Node Wrapper for HTML Tidy

## What is HTML Tidy?

HTML Tidy is an open source program for checking and generating clean XHTML/HTML.
It cleans up coding errors in HTML files and fixes bad formatting.
It can output files in the HTML, XHTML or XML file format.

Using HTML Tidy, developers can programatically clean up and fix poorly-written HTML pages.
Another use is to convert HTML to XHTML or XML.
These files can then be easily processed using the tools in the traditional XML chain,
such as XSL transforms.

## Installation

```sh
$ npm install htmltidy2
```

## Example

```javascript
var { tidy } = require('htmltidy2')
tidy('<table><tr><td>badly formatted html</tr>', function (err, html) {
  console.log(html)
})
```

## API

**tidy(text, [options], callback, binary)**

Clean html like text according optional configuration [tidy options](http://api.html-tidy.org/tidy/tidylib_api_5.6.0/tidy_quickref.html).

Custom binary path with binary param.

```javascript
var opts = {
  doctype: 'html5',
  hideComments: false, //  multi word options can use a hyphen or "camel case"
  indent: true,
}
```

**createWorker([options], binary)**

Create transform stream which can receive html like data as writable stream and output cleaned html/xml as readable stream.

Custom binary path with binary param.

```javascript
var worker = tidy.createWorker(opts)
request.get('http://www.nodejs.org').pipe(worker).pipe(process.stdout)
```

##### Experimental Fork!

---

- [HTML Tidy](https://github.com/vavere/htmltidy)
