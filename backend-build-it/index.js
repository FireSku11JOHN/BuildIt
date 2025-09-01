import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

// 🚀 Inicia o servidor
const app = express();
app.use(cors());
app.use(express.json());

// 🔑 Conexão com o Supabase
const supabase = createClient(
    "https://ocuyxmstkwuxesanifyy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jdXl4bXN0a3d1eGVzYW5pZnl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3MzY1NDYsImV4cCI6MjA3MjMxMjU0Nn0.BMkuTU54QQU806mRFw-bSQjYxvf1Yr8xQpkQ-itmsPE"
);

// 📌 Rota de teste
app.get("/", (req, res) => {
    res.send("Servidor está rodando!");
});

// 📌 Rota para listar usuários
app.get("/usuarios", async (req, res) => {
    const { data, error } = await supabase.from("usuarios").select("*");

    if (error) return res.status(400).json({ error: error.message });

    res.json(data);
});

// 📌 Rota para cadastrar usuário
app.post("/usuarios", async (req, res) => {
    const { nome, email, senha } = req.body;

    const { data, error } = await supabase
    .from("usuarios")
    .insert([{ nome, email, senha }])
    .select(); // 👈 garante que retorna o usuário criado

    // if (error) return res.status(400).json({ error: error.message });

    // res.json(data);
    if (error) {
        return res.status(400).json({ error: error.message });
    }

    res.json(data[0]); // retorna o usuário recém criado
});

// 🚀 Rodar servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
