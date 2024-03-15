import mongoose from 'mongoose';

const QuestoesSchema = new mongoose.Schema({
  pergunta: String,
  texto: String,
  urlImage: String,
  descricaoImagem: String,
  urlVideo: String,
  respostas: [String],
  respostaCorreta: Number
});

const AtividadeSchema = new mongoose.Schema({
  nome: String,
  questoes: [QuestoesSchema]
});

const Atividade = mongoose.models.Atividade || mongoose.model('Atividade', AtividadeSchema);

export default Atividade;
