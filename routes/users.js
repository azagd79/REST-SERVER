const {Router} = require('express');

const router = Router();
const controllers = require('../controllers/users');

router.get('/data',controllers.get);
router.post('/',controllers.post);
router.put('/',controllers.put);
router.delete('/',controllers.delete);

module.exports = router;
