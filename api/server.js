import app from "./app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor iniciado e rodando na porta ${PORT}`));