//add a post and delete route
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
  Comment.findAll()
    .then((dbCommentData)=> res.json(dbCommentData))
    .catch((err) =>{
      console.log(err);
      res.status(500).json(err);
    })
  });

  router.post('/', withAuth, (res,req) =>{
    if(req.session){
      Comment.create({
        ...req.body,
        user_id:req.session.user_id
      })
      .then(dbCommentData => res.json(dbCommentData))
      .catch((err) =>{
        console.log(err);
        req.status(500).json(err);
      });
    }
  });
module.exports = router;
