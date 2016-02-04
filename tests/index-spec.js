require('babel-register')
import vastParser from '../src/index'
import { expect } from 'chai'
const fs = require('fs')

describe('index', function () {

  describe('test Wrapper -> InLine', function () {
    let vastDoc
    before (function (done) {
      vastParser ('/base/tests/fixtures/wrapper-1.xml', false).then(data2 => {
        vastDoc = data2
        done()
      })
    })

    it('should not contain Wrapper any more', function () {
      expect(vastDoc.querySelector('Wrapper')).to.be.null
    })
  })
})
