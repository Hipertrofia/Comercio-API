const express =  require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Retorna a lista de pedidos"
    });
});

router.get('/:id_pedido', (req, res, next) =>{
    const id = req.params.id_pedido
    
    res.status(200).send({
        mensagem: "Detalhes do pedido",
        id_pedido: id
    });
    
    
});

router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Pedido criado"
    });
});

router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Pedido excluido"
    });
});

module.exports = router