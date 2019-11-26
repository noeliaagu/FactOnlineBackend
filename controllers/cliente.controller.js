import Cliente from '../models/cliente'

export async function obtenerClientes(req, res) {
    try {
        const cliente = await Cliente.findAll({ order: [['nombre', 'ASC']] });
        res.status(200).json(cliente);
    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
}

export async function grabarCliente(req, res) {
    try {
        const cliente = await Cliente.create({
            nombre: req.body.nombre,
            direccion: req.body.direccion,
            cuit: req.body.cuit
        });
        res.status(201).json(cliente);
    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
}

export async function editarCliente(req, res) {
    try {
        const cliente = await Cliente.findOne({
            where: { id: req.params.id }
        });
        if (cliente) {
            const modif = await cliente.update({
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                cuit: req.body.cuit,
            })
            res.status(200).json({
                data: cliente
            })
        } else {
            res.status(400).json({
                error: 'cliente no encontrado'
            })
        }

    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
}

export async function obtenerClientesPorId(req, res) {
    try {
        const cliente = await Cliente.findOne({
            where: { id: req.params.id }
        });
        res.status(200).json(cliente)
    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
} 

export async function eliminarCliente (req,res){
    try {
        await Cliente.destroy({
            where: { id: req.params.id }
        });
        res.status(204).json({
            message: 'Se elimino el cliente'
        })
    } catch (e) {
        res.status(500).json(
            { error: e.message }
        )
    }
}