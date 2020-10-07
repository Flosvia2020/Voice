const acount = require("../../../models/acount");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { id, password, nickname } = req.body;
  let newUser = null;

  const create = (user) => {
    if (user) {
      throw new Error("아이디가 존재합니다.");
    } else {
      return acount.create(id, password, nickname);
    }
  };

  const count = (user) => {
    const secret = req.app.get("jwt-secret");
    newUser = user;
    const p = jwt.sign(
      {
        _id: user._id,
        id: user.id,
        admin: user.admin,
      },
      secret,
      {
        expiresIn: "7d",
        issuer: "voice.com",
        subject: "userInfo",
      }
    );
    res.json({
      token: p,
    });
    return acount.count({}).exec();
  };

  const assign = (count) => {
    if (count === 1) {
      return newUser.assignAdmin();
    } else {
      return Promise.resolve(false);
    }
  };

  const respond = (isAdmin) => {
    res.json({
      message: "registered successfully",
      admin: isAdmin ? true : false,
    });
  };

  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    });
  };

  acount
    .findOneByUsername(id)
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError);
};

exports.login = (req, res) => {
  const { id, password } = req.body;
  const secret = req.app.get("jwt-secret");

  const check = (user) => {
    if (!user) {
      console.log("qwe");
      throw new Error("로그인 실패");
    } else {
      if (user.verify(password)) {
        const p = new Promise((resolve, reject) => {
          jwt.sign(
            {
              _id: user._id,
              id: user.id,
              admin: user.admin,
            },
            secret,
            {
              expiresIn: "7d",
              issuer: "voice.com",
              subject: "userInfo",
            },
            (err, token) => {
              if (err) reject(err);
              resolve(token);
            }
          );
        });
        return p;
      } else {
        throw new Error("로그인 실패");
      }
    }
  };

  const respond = (token) => {
    res.json({
      message: "로그인 성공",
      token,
    });
  };

  const onError = (error) => {
    res.status(403).json({
      message: error.message,
    });
  };

  acount.findOneByUsername(id).then(check).then(respond).catch(onError);
};

exports.check = (req, res) => {
  res.json({
    success: true,
    info: req.decoded,
  });
};

exports.logout = (req, res) => {
  res.json({
    success: true,
    info: req.decoded,
  });
};
