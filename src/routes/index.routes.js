const { Router } = require('express');
const  controller  = require('../controller/contactController')

const router = Router();

router.get('/', controller.homeController )
      .post('/new-contact',controller.createController)
      .get('/delete/:id',controller.delete);

module.exports = router;