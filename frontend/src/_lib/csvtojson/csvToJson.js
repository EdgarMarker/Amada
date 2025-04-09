import csvtojson from 'csvtojson';
import { writeFile } from 'fs/promises';

async function convert() {
  const json = await csvtojson().fromFile('./src/_data/lotes.csv');
  
  // Transformar datos para Sanity
  const sanityData = json.map(item => ({
    _type: 'lote',
    _id: `lote-${item.id}`,
    nombre: item.nombre,
    ciudad: item.ciudad,
    precio: Number(item.precio) // Asegurar tipo numérico
  }));

  await writeFile('./src/_data/lotes-sanidados.json', JSON.stringify(sanityData, null, 2));
  console.log('✅ CSV convertido a JSON para Sanity');
}

convert().catch(console.error);