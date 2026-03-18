markdown
# Dragon Ball App 🐉

Um aplicativo web responsivo de Dragon Ball que consome a Dragon Ball API para exibir informações aleatórias de personagens da série.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como atividade acadêmica, com o objetivo de praticar:
- Consumo de APIs REST
- JavaScript assíncrono (async/await)
- Design responsivo
- Manipulação do DOM

## 🚀 Funcionalidades

- **Sorteio aleatório de personagens**: Ao clicar na esfera do dragão, um personagem aleatório é exibido
- **Exibição de informações detalhadas**:
  - Imagem do personagem
  - Nome
  - Raça
  - Gênero
  - Ki base
  - Ki total
  - Afiliação
  - Planeta de origem

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- [Dragon Ball API](https://dragonball-api.com/)

## 📦 Estrutura do Projeto
dragon-ball-app/
│
├── index.html # Página principal
├── script.js # Lógica do aplicativo
├── style.css # Estilos personalizados
└── README.md # Documentação



## 🎯 Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/dragon-ball-app.git
Abra o arquivo index.html em seu navegador

Clique na esfera do dragão para sortear um personagem aleatório!

## 🔍 Detalhes da Implementação
O aplicativo utiliza a Dragon Ball API para buscar informações dos personagens. Ao clicar na esfera, é gerado um ID aleatório entre 1 e 35, que é usado para fazer uma requisição à API e exibir os dados do personagem correspondente.

javascript
// Trecho principal da funcionalidade
async function getAnime(){
    const idAleatorio = Math.floor(Math.random() * 35) + 1;
    let response = await fetch(`https://dragonball-api.com/api/characters/${idAleatorio}`);
    let data = await response.json();
    // Exibição dos dados...
}
## 📱 Responsividade
O aplicativo foi desenvolvido com foco na responsividade, adaptando-se a diferentes tamanhos de tela para proporcionar uma boa experiência tanto em dispositivos móveis quanto em desktops.

## 👨‍🏫 Créditos
Projeto desenvolvido para a disciplina de Desenvolvimento Web, sob orientação do professor.

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Divirta-se explorando o universo de Dragon Ball! 🐉
