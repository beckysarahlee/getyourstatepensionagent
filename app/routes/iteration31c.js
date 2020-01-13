const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  ; 

  router.post('/iteration31c/change-status', function(req, res) {
    if ( req.body['maritalstatus'] === 'married' ) {
      res.redirect('marital-details');
    } if ( req.body['maritalstatus'] === 'civil-partnership' ) {
      res.redirect('CP-details');
    } 
  });

  router.post('/iteration31c/verify', function(req, res) {
    if ( req.body['verified-or-notverified'] === 'verified' ) {
      res.redirect('CP-detailsV');
    } else {
      res.redirect('new-date');
    }
  });



  module.exports = router;