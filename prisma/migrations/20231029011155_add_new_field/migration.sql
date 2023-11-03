/*
  Warnings:

  - Added the required column `idAtividadeMongoDB` to the `Atividade` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Atividade" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "prazo" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cor" TEXT NOT NULL DEFAULT 'bg-primary-500',
    "urlImagem" TEXT NOT NULL DEFAULT 'https://media.istockphoto.com/id/1095003184/vector/vector-bag-with-school-stationery.jpg?s=612x612&w=0&k=20&c=mAtn0PnqRVR8iQeBQ7TUlUD2kh4O9s-dGTpknyOwDTc=',
    "idAtividadeMongoDB" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    CONSTRAINT "Atividade_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Atividade" ("cor", "disciplinaId", "id", "nome", "prazo", "urlImagem") SELECT "cor", "disciplinaId", "id", "nome", "prazo", "urlImagem" FROM "Atividade";
DROP TABLE "Atividade";
ALTER TABLE "new_Atividade" RENAME TO "Atividade";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
