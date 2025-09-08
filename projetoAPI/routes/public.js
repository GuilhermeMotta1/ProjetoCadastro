import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { PrismaClient } from '@prisma/client'




const JWT_SECRET = process.env.JWT_SECRET
const prisma = new PrismaClient()
const router = express.Router()

// =======================
// Rota de cadastro
// =======================
router.post('/cadastro', async (req, res) => {
    try {
        const { id, name, email, password } = req.body

        // Validação mínima
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Envie name, email e password corretamente' })
        }

        // Criptografar a senha
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // Salvar usuário no banco
        const userDB = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashPassword
            }
        })

        res.status(201).json({ message: "Usuário criado", user: userDB })
    } catch (err) {
        console.error("Erro no cadastro:", err)
        res.status(500).json({ message: 'Erro no Servidor, tente novamente', error: err.message })
    }
})

// =======================
// Rota de login
// =======================
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'Envie email e password corretamente' })
        }

        // Buscar usuário no banco
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' })
        }

        

        // Verificar senha
        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) {
            return res.status(401).json({ message: 'Senha incorreta' })
        }




//gerar token JWT (jason web token)
//token que mostra que o usuario fez o logim bem sucedido e pode ter acesso ao conteudo

const token =   jwt.sign({sub: user.id}, JWT_SECRET, {expiresIn: '7d'}  )



        res.status(200).json({token})
    } catch (err) {
        console.error("Erro no login:", err)
        res.status(500).json({ message: 'Erro no Servidor, tente novamente', error: err.message })
    }
})

export default router
