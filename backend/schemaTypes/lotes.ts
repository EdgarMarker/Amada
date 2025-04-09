import {defineType} from 'sanity'
export default defineType({
    name: 'lote',
    title: 'Lote',
    type: 'document',
    fields:[
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string'
        },
        {
            name: 'ciudad',
            title: 'Ciudad',
            type: 'string'
        },
        {
            name: 'edad',
            title: 'Edad',
            type: 'number'
        }
    ]
})
