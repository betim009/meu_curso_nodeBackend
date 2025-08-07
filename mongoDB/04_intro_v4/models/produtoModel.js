const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  produto: {
    type: String,
    required: true,
    trim: true
  },
  preco: {
    type: Number,
    required: true,
    min: 0
  },
  unidade: {
    type: String,
    enum: ['kg', 'saca', 'tonelada'],
    required: true
  },
  peso: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Produto', ProdutoSchema);