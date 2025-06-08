const MercadoriaService = require('../services/mercadoriaService');

module.exports = {
    async index(req, res) {
        try {
            const mercadorias = await MercadoriaService.getAll();
            res.status(200).json(mercadorias);
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao listar mercadorias',
                details: error.message
            });
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params;
            const mercadoria = await MercadoriaService.getById(id);
            
            if (!mercadoria) {
                return res.status(404).json({
                    error: 'Mercadoria não encontrada'
                });
            }
            
            res.status(200).json(mercadoria);
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao buscar mercadoria',
                details: error.message
            });
        }
    },

    async store(req, res) {
    try {
        const novoDono = await DonoBancaService.create(req.body);
        res.redirect('/mercadoria'); 
    } catch (error) {
        res.render('donoBanca/cadastro', { error: error.message });
    }
},

    async update(req, res) {
        try {
            const { id } = req.params;
            const mercadoriaAtualizada = await MercadoriaService.update(id, req.body);
            res.status(200).json(mercadoriaAtualizada);
        } catch (error) {
            res.status(400).json({
                error: 'Erro ao atualizar mercadoria',
                details: error.message
            });
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params;
            await MercadoriaService.delete(id);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({
                error: 'Erro ao excluir mercadoria',
                details: error.message
            });
        }
    },

    async exibirMinhasMercadorias(req, res) {
    try {
        const mercadorias = await MercadoriaService.getAll();

        // Converte preco_por_kg para número (caso venha como string)
        const mercadoriasFormatadas = mercadorias.map(m => ({
            ...m,
            preco_por_kg: parseFloat(m.preco_por_kg) || 0
        }));

        const idParaEditar = req.query.editar;
        const idParaExcluir = req.query.excluir;

        let form = {};
        let botao = "Cadastrar";

        if (idParaEditar) {
            const mercadoria = await MercadoriaService.getById(idParaEditar);
            if (mercadoria) {
                form = {
                    ...mercadoria,
                    preco_por_kg: parseFloat(mercadoria.preco_por_kg) || 0
                };
                botao = "Atualizar";
            }
        }

        if (idParaExcluir) {
            await MercadoriaService.delete(idParaExcluir);
            return res.redirect('/mercadoria/minhas');
        }

        res.render('mercadoria/minhas', {
            mercadorias: mercadoriasFormatadas,
            form,
            botao,
            error: null
        });

    } catch (error) {
        res.render('mercadoria/minhas', {
            mercadorias: [],
            form: req.body || {},
            botao: req.body?.id ? "Atualizar" : "Cadastrar",
            error: error.message
        });
    }
},

    async salvarMercadoria(req, res) {
        try {
            const { id, nome, preco_por_kg, dono_banca_id } = req.body;

            let resultado;
            if (id) {
                resultado = await MercadoriaService.update(id, { nome, preco_por_kg, dono_banca_id });
            } else {
                resultado = await MercadoriaService.create({ nome, preco_por_kg, dono_banca_id });
            }

            res.redirect('/mercadoria/minhas');

        } catch (error) {
            res.render('mercadoria/minhas', {
                mercadorias: await MercadoriaService.getAll(),
                form: req.body,
                botao: req.body.id ? "Atualizar" : "Cadastrar",
                error: error.message
            });
        }
    }
};