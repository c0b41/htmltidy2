

HTML Tidy2
=========

Node Wrapper for HTML Tidy

What is HTML Tidy?
-----------------
HTML Tidy is an open source program for checking and generating clean XHTML/HTML.
It cleans up coding errors in HTML files and fixes bad formatting.
It can output files in the HTML, XHTML or XML file format.

Using HTML Tidy, developers can programatically clean up and fix poorly-written HTML pages.
Another use is to convert HTML to XHTML or XML.
These files can then be easily processed using the tools in the traditional XML chain,
such as XSL transforms.

Installation
------------
```sh
$ npm install htmltidy2
```

Example
-------

```javascript
var tidy = require('htmltidy2').tidy;
tidy('<table><tr><td>badly formatted html</tr>', function(err, html) {
    console.log(html);
});
```

API
---
__tidy(text, [options], callback)__

Clean html like text according optional configuration [tidy options](http://api.html-tidy.org/tidy/tidylib_api_5.6.0/tidy_quickref.html).

```javascript
var opts = {
    doctype: 'html5',
    hideComments: false, //  multi word options can use a hyphen or "camel case"
    indent: true
}
```
__createWorker([options])__

Create transform stream which can receive html like data as writable stream and output cleaned html/xml as readable stream.

```javascript
var worker = tidy.createWorker(opts);
request.get('http://www.nodejs.org').pipe(worker).pipe(process.stdout);
```

##### Experimental Fork!
-------
* [HTML Tidy](https://github.com/vavere/htmltidy)
