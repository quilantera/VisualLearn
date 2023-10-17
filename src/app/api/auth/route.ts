import {  NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../../lib/prisma'
export async function POST(req : Request ) {
    const formData = await req.json()
    const email: string = formData.get('email')
    const password : string = formData.get('password')


  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json({ error: 'Usuário não encontrado' },{status:401});
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return NextResponse.json({ error: 'Credenciais inválidas' },{status:401});
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
    expiresIn: '5h',
  });

  NextResponse.json({ token });
};
