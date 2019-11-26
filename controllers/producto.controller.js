import Producto from '../models/producto'

export async function obtenerProductos(req, res) {
    try {
        const producto = await Producto.findAll({ order: [['id', 'ASC']] });
        res.status(200).json(producto);
    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
}

export async function grabarProducto(req, res) {
    try {
        const producto = await Producto.create({
            codigo: req.body.codigo,
            descripcion: req.body.descripcion,
            precio: req.body.precio
        });
        res.status(201).json(producto);
    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
}

export async function editarProducto(req, res) {
    try {
        const producto = await Producto.findOne({
            where: { id: req.params.id }
        });
        if (producto) {
            const modif = await producto.update({
                codigo: req.body.codigo,
                descripcion: req.body.descripcion,
                precio: req.body.precio
            })
            res.status(200).json({
                data: producto
            })
        } else {
            res.status(400).json({
                error: 'producto no encontrado'
            })
        }

    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
}

export async function obtenerProductosPorId(req, res) {
    try {
        const producto = await Producto.findOne({
            where: { id: req.params.id }
        });
        res.status(200).json(producto)
    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
}

export async function eliminarProducto(req, res) {
    try {
        await Producto.destroy({
            where: { id: req.params.id }
        });
        res.status(204).json({
            message: 'Se elimino el producto'
        })
    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
}