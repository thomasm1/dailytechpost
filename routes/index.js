import express from 'express'; 

export const router = express.Router();  // Router class

/* GET home page. */
router.get('/', (req, res) => {
  res.render('login', { 
    layout: 'login' 
  }) // login == dir

});
  