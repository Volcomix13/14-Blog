const User = require('./user');
const Comment = require('./comment');
const Post = require ('./post')

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Comment, Post };
