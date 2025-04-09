import { createClient } from '@sanity/client';
import Papa from 'papaparse';


export default function ImportCSVBtn(props) {
  const {VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET, VITE_SANITY_TOKEN} = import.meta.env
  return {
    label: 'Importar CSV',
    icon: () => '📤',
    disabled: false,
    onHandle: async () => {
      try {
        
        const client = createClient({
          projectId: 'chucv5ee',
          dataset: 'production',
          token: 'sk3odPe8CR3YpnHA16OPgQu2usQneJKtwnpZNfcW3uPzSfQsw4qPEvBtum5lFMpMbuj14C9LuKe9wuwVRaWIY1VXRG54y2XDMFDp5rpSHcB6XE1wTnwRqJQ08emrSo4tPWgDKEhLIBfp0m8XpaqkDRsnaOK7t1wSLyuVLpQQKHBMQ9xej88z',
          useCdn: false,
          apiVersion: '2023-05-03',
        });

       
        const doc = await client.fetch(
          `*[_type == "csvUpload"][0]{ csvFile { asset->{url} } }`
        );

        
        const csvUrl = doc?.csvFile?.asset?.url;
        if (!csvUrl) {
          throw new Error('Primero sube un archivo CSV válido.');
        }

        console.log(`📂 URL del archivo CSV: ${csvUrl}`);

        const response = await fetch(csvUrl);
        const text = await response.text();
        const { data, errors } = Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
        });

        if (errors.length > 0) {
          throw new Error(`Error en el archivo CSV: ${errors[0].message}`);
        }

        // Validar columnas requeridas
        const requiredColumns = ['id', 'nombre', 'ciudad', 'edad'];
        const missingColumns = requiredColumns.filter(
          (col) => !Object.keys(data[0]).includes(col)
        );
        if (missingColumns.length > 0) {
          throw new Error(`Faltan columnas: ${missingColumns.join(', ')}`);
        }

        console.log(`✅ ${data.length} registros encontrados. Procesando...`);

        
        const mutations = data.map((item) => ({
          createOrReplace: {
            _id: `lote-${item.id}`,
            _type: 'lote',
            nombre: item.nombre,
            ciudad: item.ciudad,
            edad: Number(item.edad) || 0,
          },
        }));

        
        await client.mutate(mutations);

        
        alert(`¡Importados ${data.length} lotes con éxito!`);
        console.log(`✅ ${data.length} lotes importados con éxito.`);

      } catch (error) {
        console.error('❌ Error:', error.message);
        alert(`Error: ${error.message}`);
      } finally {
        props.onComplete?.();
      }
    },
  };
}
