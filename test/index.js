'use strict'
const Assert = require('chai').assert
const WyEnv = require('../index')
const Path = require('path')

describe('load config file', () => {
  describe('puting data in the process object', () => {
    it('verify if port keys exists', (done) => {
      const ConfigFilePath = Path.join(__dirname, 'config.json')
      WyEnv(ConfigFilePath)
        .then((env) => {
          Assert.equal(process.env.PORT, env.config.PORT, 'the port whould be 3001')
          done()
        })
        .catch((e) => {
          done(e)
        })
    })
  })
})
