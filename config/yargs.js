const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    default: 10,
    alias: 'hasta'
  }
}



const argv = require('yargs')
  .command('listar', 'Ingresar numero base', opts)
  .command('crear', 'Ingresar numero base para crear el archivo', opts)
  .help()
  .argv


module.exports = {
  argv
}