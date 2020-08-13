 const proffys = [
     { name: "Geraldo Neto", 
     avatar: "https://avatars3.githubusercontent.com/u/49910898?s=460&u=260139cb9800ec1d6e54821d9c9ebfd8f9716938&v=4", 
     whatsapp: "81995195308", 
     bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
      subject: "Química",
      cost: "20" ,
      weekday: [0] ,
      time_from: [720],
      time_to: [1220] 
    }
 ]

 const proffys = [
    { name: "Walter Brito", 
    avatar: "https://avatars3.githubusercontent.com/u/49910898?s=460&u=260139cb9800ec1d6e54821d9c9ebfd8f9716938&v=4", 
    whatsapp: "81995195308", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
     subject: "História",
     cost: "20" ,
     weekday: [1] ,
     time_from: [720],
     time_to: [1220] 
   }
]
 
 const express = require('express')
 const server = express()
server.use(express.static("public"))

.get("/", (req, res) => { /* Envia o arquivo pra web (REQUISIÇÃO E RESPOSTA)*/
    return res.sendFile(__dirname + "/views/index.html")
})

.get("/study", (req, res) => {
    return res.sendFile(__dirname + "/views/study.html")
})

.get("/give-classes", (req, res) => {
    return res.sendFile(__dirname + "/views/give-classes.html")
})

.listen(5500)