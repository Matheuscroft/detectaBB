## 🤝 Guia para Colaboradores - Projeto `detectaBB`

Bem-vindo ao time! Este guia vai te ajudar a configurar tudo que precisa para começar a contribuir com o projeto.

---

### 🟢 1. Acesso ao Repositório
Antes de começar, envie seu nome de usuário do **GitHub** para o responsável pelo projeto, para ser adicionado como colaborador.

🔗 Link do projeto: [https://github.com/Matheuscroft/detectaBB.git](https://github.com/Matheuscroft/detectaBB.git)

---

### 🧩 2. Clonar o Projeto

Abra o terminal e digite:

```bash
git clone https://github.com/Matheuscroft/detectaBB.git
cd detectaBB
```

---

### 💻 3. Abrir no VS Code

No terminal:

```bash
code .
```

---

### ⚙️ 4. Instalar Dependências

```bash
npm install
```

---

### 🚀 5. Rodar o Projeto

```bash
ionic serve
```

O navegador abrirá automaticamente com o app rodando localmente.

---

### 🗂️ 6. Estrutura do Projeto

- `src/app/` → estrutura principal do app
  - `pages/` → onde ficam as telas principais
  - `components/` → componentes reutilizáveis
- `theme/` → cores e estilos globais
- `assets/` → imagens e arquivos estáticos
- `app-routing.module.ts` → define as rotas das páginas

---

### ✏️ 7. Criar uma Nova Página

Use o comando:

```bash
ionic generate page pages/NomeDaPagina
```

Exemplo:

```bash
ionic generate page pages/login
```

---

### 🔀 8. Registrar a Nova Rota (se necessário)

Edite o arquivo `src/app/app-routing.module.ts`:

```ts
{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
}
```

---

### 🎨 9. Referência Visual (Figma)

Utilize este link para reproduzir as telas:
[Figma - SQD 37 | BB](https://www.figma.com/design/8Bc0l4AFIMzrhu25doP3Ng/%F0%9F%92%9BSQD-37-%7C-BB?node-id=0-1&p=f)

---

### ☁️ 10. Enviar para o GitHub

Depois de fazer alterações:

```bash
git add .
git commit -m "Descreva aqui o que foi feito"
git push origin main
```

---

### ✅ Resumo Final

- Clonar o projeto
- Rodar com `ionic serve`
- Criar telas com `ionic generate page`
- Seguir o Figma
- Fazer push pro GitHub

Qualquer dúvida, chama no grupo! 🚀

