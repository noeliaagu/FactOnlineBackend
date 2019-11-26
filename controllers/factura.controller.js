import Factura from  '../models/factura';
import Item from  '../models/item';

export async function obtenerFacturas(req, res){
try {
    const factura = await Factura.findAll( { include: ['items'] }  ); 
            res.status(200).json(factura);
    }catch(e){
        res.status(500).json(
            {error:  e.message}
        )
    }
}

export async function grabarFactura(req, res){
    try {
        Factura.create({
            tipo: req.body.tipo,
            fecha: req.body.fecha,  
            pto: req.body.pto,
            numero: req.body.numero,
            clienteId: req.body.clienteId,
            total: req.body.total
        }).then((result) => {
            let items = req.body.items.map( item => {
                return Item.create({
                    idfact: result.id,
                    idprod: item.idprod,    
                    cant: item.cant, 
                    codigo: item.codigo, 
                    descripcion: item.descripcion, 
                    precio: item.precio,
                    iva: item.iva, 
                    subtotal: item.subtotal
                })
            })
            Promise.all(items).then(
                res.status(201).json({
                   result
                })
            )
        }).catch((err) => {
            console.log(err)
            res.status(400).json({
                error: err.message
            })
        });
    }catch(e){
        res.status(500).json(
            {error:  e.message}
        )
    }
}

export async function obtenerFacturaPorId(req, res){
    try {
        const factura = await Factura.findOne(
            {  where: { id: req.params.id },include:  ['items']},   
        );
        res.status(200).json(factura);
}catch(e){
    res.status(500).json(
        {error:  e.message}
    )
    }
}
    
export async function eliminarFactura(req, res){
    try {
        await Factura.destroy({
            where: { id: req.params.id }
        });
        res.status(204).json({
            message: 'Se elimino la factura'
        })
    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
}