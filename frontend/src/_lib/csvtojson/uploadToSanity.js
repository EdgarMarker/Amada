import { createClient } from "@sanity/client";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del directorio actual en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para leer manualmente el archivo .env
function loadEnv() {
  try {
    // Buscar el archivo .env en la raíz del proyecto
    const rootDir = path.resolve(__dirname, '../../../');
    const envPath = path.join(rootDir, '.env');
    
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    
    // Parsear el contenido del archivo .env
    envContent.split('\n').forEach(line => {
      const line_trim = line.trim();
      if (line_trim && !line_trim.startsWith('#')) {
        const [key, ...valueParts] = line_trim.split('=');
        const value = valueParts.join('=').trim();
        if (key && value) {
          // Eliminar comillas si existen
          envVars[key.trim()] = value.replace(/^["']|["']$/g, '');
        }
      }
    });
    
    return envVars;
  } catch (error) {
    console.error('No se pudo cargar el archivo .env:', error.message);
    return {};
  }
}

// Cargar variables de entorno desde .env
const envVars = loadEnv();

// Leer el archivo JSON usando la ruta relativa
const lotesPath = path.join(__dirname, '../../_data/lotes-sanidados.json');
const lotes = JSON.parse(fs.readFileSync(lotesPath, 'utf8'));

// Obtener variables de configuración de Sanity
const VITE_SANITY_PROJECT_ID = envVars.VITE_SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID;
const VITE_SANITY_DATASET = envVars.VITE_SANITY_DATASET || process.env.VITE_SANITY_DATASET;
const VITE_SANITY_TOKEN = envVars.VITE_SANITY_TOKEN || process.env.VITE_SANITY_TOKEN;

// Debug: Mostrar los valores encontrados
console.log("Project ID:", VITE_SANITY_PROJECT_ID);
console.log("Dataset:", VITE_SANITY_DATASET);
console.log("Token disponible:", VITE_SANITY_TOKEN ? "Sí" : "No");

// Verifica si las variables necesarias existen
if (!VITE_SANITY_PROJECT_ID || !VITE_SANITY_DATASET) {
  console.error('Error: Las variables de entorno VITE_SANITY_PROJECT_ID y VITE_SANITY_DATASET son necesarias');
  console.error('Asegúrate de que estas variables estén definidas en el archivo .env en la raíz del proyecto');
  process.exit(1);
}

if (!VITE_SANITY_TOKEN) {
  console.warn('Advertencia: No se ha proporcionado VITE_SANITY_TOKEN. Es posible que no tengas permisos para escribir en Sanity.');
}

const client = createClient({
  projectId: VITE_SANITY_PROJECT_ID,
  dataset: VITE_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-05-03",
  token: VITE_SANITY_TOKEN, // Necesario para operaciones de escritura
});

async function upload() {
  try {
    console.log(`🔄 Subiendo ${lotes.length} lotes a Sanity...`);
    
    const transaction = lotes.map((lote) => ({
      createOrReplace: {
        ...lote,
        _type: "lote",
      },
    }));

    await client.transaction(transaction).commit();
    console.log("✅ Datos subidos a Sanity exitosamente");
  } catch (error) {
    console.error("❌ Error al subir datos a Sanity:", error);
  }
}

upload();