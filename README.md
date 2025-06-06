# 🤝 Detecta BB — Front-end

---

## 🧰 Programas Necessários

| Ferramenta         | Link                                                             |
| ------------------ | ---------------------------------------------------------------- |
| Git                | [https://git-scm.com/downloads](https://git-scm.com/downloads)   |
| Visual Studio Code | [https://code.visualstudio.com/](https://code.visualstudio.com/) |
| Node.js            | [https://nodejs.org/pt/download](https://nodejs.org/pt/download) |
| Ionic CLI          | [https://ionicframework.com/](https://ionicframework.com/)       |

### ✔️ O que cada ferramenta faz:

* **Git**: controle de versão e clonagem dos repositórios do backend e frontend.
* **VS Code**: editor recomendado para desenvolvimento.
* **Node.js**: necessário para executar o `npm`, que instala dependências e executa scripts.
* **Ionic CLI**: executa o projeto Ionic (baseado em Angular, React ou Vue) e inicia o servidor de desenvolvimento.

---

## 🚀 Passo a Passo para Executar o Frontend

### 1. Clonar o Repositório

Abra o terminal (Git Bash, PowerShell, etc.) e execute:

```bash
# Clonar o repositório do frontend
git clone https://github.com/Matheuscroft/detectaBB.git
cd detectaBB
```

---

### 2. Instalar as Dependências

Dentro da pasta `detectaBB`, execute:

```bash
npm install        # Instala todas as dependências do projeto
```

---

### 3. Iniciar o Servidor de Desenvolvimento

```bash
ionic serve        # Inicia o servidor local (modo desenvolvimento)
```

> A aplicação estará disponível em `http://localhost:8100` ou na porta indicada no terminal.

---

### 4. Simular em Dispositivo Móvel

Para testar como o app se comporta em um celular:

1. Acesse `http://localhost:8100`.
2. Pressione **F12** para abrir as ferramentas de desenvolvedor.
3. Clique no ícone de **dispositivo móvel** (📱).
4. No topo da tela, escolha um modelo, como **Samsung Galaxy S20** ou outro similar.
5. Atualize a página se necessário.

---

## 📁 Estrutura do Repositório

```
detectaBB/
├── src/                        # Código-fonte do aplicativo
├── package.json               # Lista de dependências e scripts npm
├── ionic.config.json          # Configurações do projeto Ionic
└── ...
```

---

## ❓ Dúvidas

Se tiver dúvidas ou problemas durante a instalação ou execução:

* Consulte a documentação oficial das ferramentas citadas.
* Verifique se todas as dependências foram instaladas corretamente.
* Abra uma issue no repositório caso algo esteja quebrado ou não documentado.
