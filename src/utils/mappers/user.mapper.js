const userMapper = new Object();
userMapper.mapUser = (user, token) => {
  return {
    fullName: user.fullName,
    email: user.email,
    token: token,
  };
};

module.exports = userMapper;
