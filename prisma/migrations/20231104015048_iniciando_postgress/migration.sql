-- CreateTable
CREATE TABLE "Escola" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "urlLogo" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Escola_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "urlAvatar" TEXT,
    "papel" TEXT NOT NULL DEFAULT 'ALUNO',
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "escolaId" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Turma" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "anoEscolar" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "escolaId" TEXT NOT NULL,

    CONSTRAINT "Turma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cor" TEXT NOT NULL DEFAULT 'bg-primary-500',
    "urlImagem" TEXT NOT NULL DEFAULT 'https://media.istockphoto.com/id/1095003184/vector/vector-bag-with-school-stationery.jpg?s=612x612&w=0&k=20&c=mAtn0PnqRVR8iQeBQ7TUlUD2kh4O9s-dGTpknyOwDTc=',
    "professorId" TEXT NOT NULL,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atividade" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "prazo" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cor" TEXT NOT NULL DEFAULT 'bg-primary-500',
    "urlImagem" TEXT NOT NULL DEFAULT 'https://media.istockphoto.com/id/1095003184/vector/vector-bag-with-school-stationery.jpg?s=612x612&w=0&k=20&c=mAtn0PnqRVR8iQeBQ7TUlUD2kh4O9s-dGTpknyOwDTc=',
    "idAtividadeMongoDB" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,

    CONSTRAINT "Atividade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AtividadeAluno" (
    "id" SERIAL NOT NULL,
    "dataEntrega" TIMESTAMP(3),
    "nota" INTEGER,
    "atividadeId" TEXT NOT NULL,
    "alunoId" TEXT NOT NULL,

    CONSTRAINT "AtividadeAluno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TurmaToUsuario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_DisciplinaToTurma" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Escola_cnpj_key" ON "Escola"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_TurmaToUsuario_AB_unique" ON "_TurmaToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_TurmaToUsuario_B_index" ON "_TurmaToUsuario"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_DisciplinaToTurma_AB_unique" ON "_DisciplinaToTurma"("A", "B");

-- CreateIndex
CREATE INDEX "_DisciplinaToTurma_B_index" ON "_DisciplinaToTurma"("B");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_escolaId_fkey" FOREIGN KEY ("escolaId") REFERENCES "Escola"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Turma" ADD CONSTRAINT "Turma_escolaId_fkey" FOREIGN KEY ("escolaId") REFERENCES "Escola"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtividadeAluno" ADD CONSTRAINT "AtividadeAluno_atividadeId_fkey" FOREIGN KEY ("atividadeId") REFERENCES "Atividade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AtividadeAluno" ADD CONSTRAINT "AtividadeAluno_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TurmaToUsuario" ADD CONSTRAINT "_TurmaToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TurmaToUsuario" ADD CONSTRAINT "_TurmaToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplinaToTurma" ADD CONSTRAINT "_DisciplinaToTurma_A_fkey" FOREIGN KEY ("A") REFERENCES "Disciplina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DisciplinaToTurma" ADD CONSTRAINT "_DisciplinaToTurma_B_fkey" FOREIGN KEY ("B") REFERENCES "Turma"("id") ON DELETE CASCADE ON UPDATE CASCADE;
