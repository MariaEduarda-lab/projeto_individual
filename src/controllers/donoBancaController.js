const DonoBancaService = require('../services/donoBancaService');

module.exports = {
    async index(req, res) {
        try {
            const donos = await DonoBancaService.getAll();
            res.json(donos); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async show(req, res) {
        try {
            const { id } = req.params;
            const dono = await DonoBancaService.getById(id);
            if (!dono) {
                return res.status(404).json({ error: 'Dono não encontrado' });
            }
            res.json(dono); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async store(req, res) {
        try {
            const novoDono = await DonoBancaService.create(req.body);

            // Se for fetch/AJAX, responda com JSON
            if (req.xhr || req.headers.accept.indexOf('json') > -1) {
                return res.status(201).json({ message: 'Cadastro realizado com sucesso!' });
            }

            // Se for formulário tradicional, redirecione
            res.redirect('/mercadoria/minhas');
        } catch (error) {
            // Se for fetch/AJAX, responda com JSON de erro
            if (req.xhr || req.headers.accept.indexOf('json') > -1) {
                return res.status(400).json({ error: error.message });
            }
            // Se for formulário tradicional, renderize a view com erro
            res.render('donoBanca/cadastro', { error: error.message });
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params;
            const donoAtualizado = await DonoBancaService.update(id, req.body);
            res.json(donoAtualizado); 
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    exibirLogin(req, res) {
        res.render('donoBanca/login', { error: null });
    },

    exibirCadastro(req, res) {
        res.render('donoBanca/cadastro', { error: null });
    },

    async entrar(req, res) {
    try {
        const { nome, email } = req.body;
        res.redirect('/mercadoria/minhas');
    } catch (error) {
        res.render('donoBanca/login', { error: 'Erro ao fazer login' });
    }
},

async exibirPerfil(req, res) {
    const donoId = req.session?.donoId || 1; 
    const dono = await DonoBancaService.getById(donoId);
    res.render('donoBanca/perfil', { dono, edit: false, error: null });
},

async editarPerfil(req, res) {
    const donoId = req.session?.donoId || 1;
    const dono = await DonoBancaService.getById(donoId);
    res.render('donoBanca/perfil', { dono, edit: true, error: null });
},

async atualizarPerfil(req, res) {
    const donoId = req.session?.donoId || 1;
    const { nome, email, telefone, senha } = req.body;
    try {
        await DonoBancaService.update(donoId, { nome, email, telefone, senha });
        res.redirect('/dono/perfil');
    } catch (error) {
        const dono = await DonoBancaService.getById(donoId);
        res.render('donoBanca/perfil', { dono, edit: true, error: error.message });
    }
}

};