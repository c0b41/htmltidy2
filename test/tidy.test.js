const { tidy } = require('../htmltidy')
const fs = require('fs')

describe('Htmltidy2 Tests ', function () {
  test('Test basic : ', function (done) {
    const fix = fs.readFileSync(__dirname + '/fixtures/basic.html', 'utf8')

    tidy(fix, function (err, html) {
      expect(html).toMatchSnapshot()
      done(err)
    })
  })

  test('Test complex: ', function (done) {
    const fix = fs.readFileSync(__dirname + '/fixtures/complex.html', 'utf8')

    tidy(fix, function (err, html) {
      expect(html).toMatchSnapshot()
      done(err)
    })
  })

  test('Test with options : ', function (done) {
    const fix = fs.readFileSync(__dirname + '/fixtures/basic.html', 'utf8')

    var opts = {
      doctype: 'html5',
      indent: true,
      bare: true,
      breakBeforeBr: true,
      hideComments: true,
      fixUri: true,
      wrap: 0,
    }
    tidy(fix, opts, function (err, html) {
      expect(html).toMatchSnapshot()
      done(err)
    })
  })
})
