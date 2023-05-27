// crear conexion a la base de datos
const { MongoClient } = require('mongodb');

async function conectarBaseDeDatos() {
  const uri = 'mongodb+srv://carlosfajardodev:1101694823MongoAtlas.@cluster0.mazcn5w.mongodb.net/?retryWrites=true&w=majority'; 
  const cliente = new MongoClient(uri);
  
  try {
    await cliente.connect();
    console.log('Conectado a la base de datos...');
    return cliente.db(); // Devuelve la instancia de la base de datos para su uso posterior
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
    throw error;
  }
}

// Ejemplo de uso de la función conectarBaseDeDatos
async function main() {
  const db = await conectarBaseDeDatos();

  // Realiza operaciones en la base de datos, como insertar, actualizar, eliminar, consultar, etc.
  // Puedes usar los métodos proporcionados por la biblioteca oficial de MongoDB para Node.js

  // Ejemplo: Insertar un documento en una colección
  const documento = { nombre: 'Carlos Fajardo', edad: 27 };
  const result = await db.collection('DatosFormulario').insertOne(documento);
  console.log('Documento insertado exitosamente', result);
}

// Llama a la función principal para iniciar la conexión y realizar operaciones en la base de datos
main();
