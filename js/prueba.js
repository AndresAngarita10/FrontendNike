import { getEntitiesSinFilter } from './crud.js';

/* const URL = "http://localhost:5272/api";
 */
async function procesarDatos() {
    try {
        const bodegaData = await getEntitiesSinFilter('producto');
        console.log('Datos de la entidad "Bodega":', bodegaData);
    } catch (error) {
        console.error('Error al obtener datos de la entidad "Bodega":', error.message);
    }
}
 procesarDatos();
 


