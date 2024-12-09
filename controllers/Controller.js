const MessageModel = require('../models/messageModel');

module.exports = function (app) {
    app.get('/', (req, res) => {
        const messageModel = new MessageModel();
        let message = messageModel.getMessage();

        // Verificar se há um parâmetro na URL
        const name = req.query.name;
        if (name) {
            message = `Olá, ${name}! ${message}`;
        }

        res.render('index', { message: message });
    });
};
