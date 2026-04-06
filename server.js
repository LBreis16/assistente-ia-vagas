const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/analisar", (req, res) => {
    const { texto } = req.body;

    if (!texto) {
        return res.status(400).json({ erro: "Envie um texto" });
    }

    let sugestao = "";

    if (texto.toLowerCase().includes("java")) {
        sugestao = "Você pode aplicar para vagas de Back-end Java";
    } else if (texto.toLowerCase().includes("javascript")) {
        sugestao = "Você pode aplicar para vagas de Node.js ou Front-end";
    } else {
        sugestao = "Considere estudar Java ou JavaScript para mais oportunidades";
    }

    res.json({
        mensagem: "Análise feita com sucesso",
        sugestao
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});