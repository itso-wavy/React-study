// database.js
const database = [{ id: 1, username: 'abc', password: 'abc' }];

module.exports = database;

// middleware/auth.js
const validUser = (req, res, next) => {
  const { access_token } = req.cookies;
  if (!access_token) {
    // 토큰 유무 확인
    res.status(401).send('access token이 없습니다.');
  }

  try {
    const { username } = jwt.verify(access_token, 'secure'); // 복호화
    const userInfo = database.find(data => data.username === username);
    if (!userInfo) {
      // 토큰 유효성 확인
      throw 'user info가 없습니다.';
    }

    next();
  } catch (err) {
    res.status(401).send('유효한 access token이 아닙니다.');
  }
};

module.exports = validUser;

// app.js
const express = require('express');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { validUser } = require('./middleware/auth');
const database = require('./database');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(__dirname + '/views/index.html');
});

app.post('/signup', async (req, res) => {
  const { username, password, age, birthday } = req.body;
  const hash = await argon2.hash(password); // 비밀번호 암호화

  database.push({
    username,
    password: hash,
    age,
    birthday,
  });
  res.send('success');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = database.filter(u => {
    return u.username === username;
  });
  if (user.length === 0) {
    res.status(403).send('해당하는 id가 없습니다.'); // 상태코드 메서드 체이닝
    return;
  }
  if (!(await argon2.verify(user[0].password, 'password'))) {
    res.status(403).send('패스워드가 틀립니다.'); // 비밀번호 복호화 + 상태코드 추가
    return;
  }
  const access_token = jwt.sign({ username }, 'secret'); // 토큰 발급
  res.cookie('access_token', access_token, {
    // 쿠키에 name, value 형태로 전달
    httpOnly: true, // 클라이언트에서 쿠키를 읽을 수 없도록 함
  });

  res.send('로그인 성공!');
});

app.get('/secure_data', validUser, (req, res) => {
  res.send('인증된 사용자만 사용할 수 있는 API');
});

app.listen(3000, () => {
  console.log('server on!');
});
