const express =  require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: "Usando GET na rota de produtos"
    });
});

router.get('/:id_produto', (req, res, next) =>{
    const id = req.params.id_produto
    
    if (id === 'especial'){
        res.status(200).send({
            mensagem: "Este é o ID ESPECIAL!!!"
        });
    }else{
        res.status(200).send({
            mensagem: "Você passou um ID"
        })
    }
    
});

router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando POST na rota de produtos"
    });
});

router.patch('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando PATCH na rota de produtos"
    });
});

router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: "Usando DELETE na rota de produtos"
    });
});

module.exports = router