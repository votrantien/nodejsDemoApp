//import thư viện
const express = require('express')
//khai báo đối tượng web
const app = express()
//khai báo port
const port = 3000
//route
app.get('/', (req, res) => {
    //trả về http Hello World!
  res.send('Hello World! 11')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})