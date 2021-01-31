const express = require('express');
const router = express.Router();
const Role = require('../helpers/role');
// Controllers
const AuthController = require('../controllers/AuthController');


const veriyToken = require('../middlewares/verufy-token');

const authorize = require('../middlewares/Authorize');




router.post('/auth/register', AuthController.register);

router.post('/auth/login', AuthController.login);

router.post('/protected', veriyToken, AuthController.login);

router.get('/protected', authorize([Role.user,Role.Admin]), (req, res) => {
    res.send("ruta protegida");
});

router.get('/users', authorize([Role.Admin]), UserController.getAll);
router.get('/users/:id', authorize([Role.Admin]), UserController.getById);
router.delete('/users/:id', authorize([Role.Admin]), UserController.delete);


module.exports = router;