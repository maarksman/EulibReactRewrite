var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json([{
            id :1,
            topic:"topic1",
            type:"type1",
            field:"field1",
            level: 'General',
            content:"content1",
            image:{hasimage:true,
                  path:"imagepath1"},
            footerids: [2, 3, 4, 5, 1]
          }]);
});

module.exports = router;
