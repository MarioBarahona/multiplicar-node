const argv = require('./config/yargs').argv
const { crearArchivo } = require('./multiplicar/multiplicar')
const { listarTabla } = require('./multiplicar/multiplicar')
const colors = require('colors');

let comando = argv._[0]


switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
    break;

  case 'crear':
    crearArchivo(argv.base, argv.limite).then((mensaje) => {
      console.log(mensaje)
    }).catch((err) => console.log(err))
    break;

  default:
    break;
}









// crearArchivo(argv.base, argv.limite).then((multiplicar) => {
//   console.log(multiplicar)
// }).catch((err) => console.log(err))

//   listarTabla(argv.base, argv.limite)

//console.log(argv)
//console.log(argv.limite) cra