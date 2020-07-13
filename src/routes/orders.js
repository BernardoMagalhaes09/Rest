const {Router} = require('express')
const router = new Router();

const routeName = '/orders'
//Lista todos os pedidos
router.get(routeName, (req, res) => {
    res.json([{
        message: 'Vai retornar todos os pedidos',
    }])
});

//Retorna um pedido expecifico
router.get(`${routeName}/:id`, (req, res) => {
        res.json([{message: 'Vai retornar os dados de um pedidos com um id', 
        id: req.params.id,
    }])
});

// Cria um pedido novo
router.post(routeName, (req, res) => {
    const pedido = {
        idProduto: req.body.idProduto,
        quantidade: req.body.quantidade
    }

    res.status(201).json({
        message: 'Vai criar um pedido',
        pedidoCriado: pedido
    });
});

//Edita os dados de um pedido
router.patch(`${routeName}/:id`, (req, res) => {
    res.json({
        message: 'Vai editar od dados de um pedido baseado em um id',
        id: req.params.id,
    })
})

//Deleta um pedido baseado no id
router.delete(`${routeName}/:id`, (req, res) => {
    res.status(204).end()
})

module.exports = router