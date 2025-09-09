import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

// 🚀 Inicia o servidor
const app = express();
app.use(cors());
app.use(express.json());

// 🔑 Conexão com o Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
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
