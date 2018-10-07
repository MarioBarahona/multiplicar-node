// requireds 
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

  console.log('================'.green)
  console.log(`tabla de ${base}`.green)
  console.log('================'.green)

  for (i = 1; i <= limite; i++) {
    console.log(`${base} * ${i}: ${base * i}`)
  }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

          if (!Number(base)) {
            reject(`La base ${base} no es un numero.`)
            return
          }

          let data = ''

          for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}: ${base * i}\n`
          }

          fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                if (err) {
                  reject(err)
                } else {
                  resolve(`El archivo ha sido creado: ${colors.green(`tabla-${base}-al-${limite}`)}`)
      }
    })

  })
}

module.exports = {
  crearArchivo,
  listarTabla
}