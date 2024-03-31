const express = require('express');
// 导入cors
const cors = require('cors');

var bodyParse = require('body-parser');
const app = express();
// 
// 全局挂载
app.use(cors());

// extended: false只处理数组或者字符串，当为true时，值可以任意类型
app.use(bodyParse.urlencoded({ extended: false }));

// 处理json文件， parse application/json
app.use(bodyParse.json())

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});