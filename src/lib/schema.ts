import mongoose from 'mongoose';

const QuestoesSchema = new mongoose.Schema({
  pergunta: String,
  urlImage: String,
  respostas: [String],
  descricaoImagem: String,
  referenciaImagem: String,
  urlVideo: String,
  respostaCorreta: Number,
  textoAuxiliar: String,
  referenciaTexto: String,
});

const AtividadeSchema = new mongoose.Schema({
  nome: String,
  questoes: [QuestoesSchema]
});

const Atividade = mongoose.models.Atividade || mongoose.model('Atividade', AtividadeSchema);

export default Atividade;
