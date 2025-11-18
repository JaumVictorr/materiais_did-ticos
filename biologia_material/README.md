# Sistema de Materiais Didáticos de Biologia

Um website educacional em HTML, CSS e JavaScript puro para estudar os cinco principais temas de Biologia do 1º ano do Ensino Médio.

## 📋 Conteúdo

O sistema contém materiais didáticos sobre:

1. **Zoologia** - O estudo dos animais e sua classificação
2. **Anatomia Básica** - A estrutura do corpo humano
3. **Ecologia** - As interações entre seres vivos e o ambiente
4. **Citologia** - O estudo das células
5. **Botânica** - O estudo das plantas

## 📁 Estrutura do Projeto

```
biologia_site_html/
├── index.html          # Página inicial com as capas dos materiais
├── zoologia.html       # Conteúdo de Zoologia
├── anatomia.html       # Conteúdo de Anatomia Básica
├── ecologia.html       # Conteúdo de Ecologia
├── citologia.html      # Conteúdo de Citologia
├── botanica.html       # Conteúdo de Botânica
├── styles.css          # Estilos CSS para todo o site
├── script.js           # Funcionalidades JavaScript
├── images/             # Pasta com as imagens das capas
│   ├── zoologia.png
│   ├── anatomia.png
│   ├── ecologia.png
│   ├── citologia.png
│   └── botanica.png
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente no Navegador

1. Extraia o arquivo ZIP em uma pasta de sua preferência
2. Abra a pasta no seu explorador de arquivos
3. Clique duas vezes no arquivo `index.html`
4. O site abrirá no seu navegador padrão

### Opção 2: Usar um Servidor Local (Recomendado)

Se você tiver Python instalado:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Depois, abra seu navegador e acesse: `http://localhost:8000`

Se você tiver Node.js instalado:

```bash
# Instale o http-server globalmente
npm install -g http-server

# Execute na pasta do projeto
http-server
```

## 🎨 Características

- ✅ Design responsivo (funciona em celulares, tablets e desktops)
- ✅ Interface intuitiva com cards interativos
- ✅ Conteúdo didático estruturado com tabelas e listas
- ✅ Navegação fácil entre páginas
- ✅ Sem dependências externas (apenas HTML, CSS e JavaScript puro)
- ✅ Carregamento rápido
- ✅ Compatível com todos os navegadores modernos

## 📝 Conteúdo de Cada Página

### Página Inicial (index.html)
- Exibe as 5 capas dos materiais em cards interativos
- Informações sobre o sistema
- Links para acessar cada tema

### Páginas de Conteúdo
Cada página de tema contém:
- Definição e conceitos fundamentais
- Listas organizadas de características
- Tabelas informativas
- Exemplos práticos
- Botão para voltar à página inicial

## 🛠️ Personalização

### Mudar Cores
Abra o arquivo `styles.css` e procure pelas cores nos gradientes:
- `.material-title.zoologia` - Cor de Zoologia
- `.material-title.anatomia` - Cor de Anatomia
- `.material-title.ecologia` - Cor de Ecologia
- `.material-title.citologia` - Cor de Citologia
- `.material-title.botanica` - Cor de Botânica

### Adicionar Novo Conteúdo
1. Crie um novo arquivo HTML (ex: `novo_tema.html`)
2. Copie a estrutura de uma página existente
3. Modifique o conteúdo
4. Adicione um novo card na página inicial (index.html)

### Mudar Imagens
Substitua os arquivos PNG na pasta `images/` mantendo os mesmos nomes.

## 💻 Requisitos

- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação adicional necessária!

## 📱 Responsividade

O site se adapta automaticamente para:
- **Desktop** (1200px+) - Layout em 3 colunas
- **Tablet** (768px - 1199px) - Layout em 2 colunas
- **Mobile** (até 767px) - Layout em 1 coluna

## 🔧 Suporte Técnico

Se encontrar algum problema:

1. Verifique se todos os arquivos estão na mesma pasta
2. Certifique-se de que a pasta `images/` contém todas as imagens
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Tente abrir em outro navegador

## 📄 Licença

Este material é fornecido para fins educacionais.

## ✨ Dicas de Uso

- Use a função de impressão (Ctrl+P) para salvar as páginas como PDF
- O site funciona offline após o carregamento inicial
- Todos os links são internos, não requerem conexão com a internet

---

**Desenvolvido para facilitar o aprendizado de Biologia no 1º ano do Ensino Médio**
