'use strict'
const Fs = require('fs')
const Path = require('path')
const {promisify} = require('util')
const ReadFile = promisify(Fs.readFile)
const ConfigFilePath = Path.join(__dirname, 'config.json')

module.exports = (cfp = ConfigFilePath) => {
  return ReadFile(cfp)
    .then(content => {
      const env = process.env.NODE_ENV || 'development'
      content = JSON.parse(content.toString())[env]
      const keys = Object.keys(content)
      keys.forEach(key => {
        process.env[key] = content[key]
      })
      return new Promise((resolve, reject) => {
        resolve({
          config: content,
          message: 'config loaded'
        })
      })
    })
    .catch(e => {
      return new Promise((resolve, reject) => {
        reject(e)
      })
    })
}
