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


---

# ✅ Passo a passo: Rodar projeto Ionic no Android (Capacitor)

---

## 🧰 1. Pré-requisitos: Instalar ferramentas necessárias

### 🔧 Node.js e npm

* Necessário para o Ionic funcionar.
* [Baixar Node.js (LTS)](https://nodejs.org/)
* Verificar instalação:

  ```bash
  node -v
  npm -v
  ```

---

### 🧪 Java JDK (Java Development Kit)

* Necessário para o Android Studio e Gradle funcionarem.
* Baixar e instalar o **JDK 17** (ou o mais recente suportado pelo Android Studio).

#### ➕ Adicionar ao ambiente:

* Criar variável de ambiente:

  * `JAVA_HOME` → Exemplo: `C:\Program Files\Java\jdk-17`
* Adicionar ao `Path`:

  * `%JAVA_HOME%\bin`

---

### 🤖 Android Studio

* Baixar do site oficial: [https://developer.android.com/studio](https://developer.android.com/studio)
* Durante a instalação, marcar:

  * Android SDK
  * Android SDK Command-line Tools
  * Android Emulator
  * Android Build Tools
* Instalar com os caminhos padrão (ex: `C:\Program Files\Android\Android Studio`)

#### ➕ Variáveis de ambiente:

* `ANDROID_HOME` → Exemplo: `C:\Users\<seu-usuário>\AppData\Local\Android\Sdk`
* Adicionar ao `Path`:

  * `%ANDROID_HOME%\platform-tools`
  * `%ANDROID_HOME%\emulator`
  * `%ANDROID_HOME%\cmdline-tools\latest\bin`

---

### 📱 Dispositivo Android

* Ativar **modo desenvolvedor**
* Ativar **depuração USB**
* Conectar o celular via USB

---

## 📦 2. Preparar o projeto Ionic

### Abra o projeto no VSCode

```bash
cd detectaBB
```

### Instalar dependências

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

---

## ⚙️ 3. Configurar o Capacitor

### Inicializar o Capacitor (se ainda não foi feito)

```bash
npx cap init
```

* Nome: Nome do seu app (Ex: `DetectaBB`)
* ID: Pacote Android (Ex: `com.exemplo.detectabb`)

### Configurar `capacitor.config.ts` ou `capacitor.config.json`

* A propriedade `webDir` deve ser `"www"`:

```ts
export default {
  appId: 'com.exemplo.detectabb',
  appName: 'DetectaBB',
  webDir: 'www',
  bundledWebRuntime: false
};
```

---

## 🛠️ 4. Adicionar a plataforma Android

```bash
npx cap add android
```

---

## 🧱 5. Fazer o build do app Ionic

```bash
ionic build
```

* Isso criará a pasta `www/` com os arquivos prontos para o app Android.

---

## 🔄 6. Copiar os arquivos para o projeto Android

```bash
npx cap copy
```

---

## 💻 7. Abrir o Android Studio

```bash
npx cap open android
```

* O Android Studio abrirá automaticamente o projeto na pasta `android/`.

---

## ▶️ 8. Rodar o app no celular

1. Certifique-se de que o celular está conectado e reconhecido.
2. No Android Studio, clique em **Run > app** (botão ▶️).
3. Escolha o dispositivo real.
4. O app será instalado e executado no celular.

---

## ✅ Pronto!

Seu projeto Ionic está rodando no seu dispositivo Android.

---

# Atualizar app Ionic + Capacitor no Android depois das mudanças

1. **Faça suas alterações no código do Ionic (Angular)**

2. **Compile o projeto para gerar os arquivos web atualizados:**

```bash
ionic build
```

3. **Copie os arquivos compilados para o projeto Android:**

```bash
npx cap copy
```

4. **(Opcional) Se você alterou plugins ou adicionou plataformas, rode:**

```bash
npx cap sync android
```

— mas geralmente só o `copy` basta para alterações no frontend.

5. **No Android Studio:**

* Se o app já estiver aberto, clique em **Run** (▶️) para reinstalar o app atualizado no dispositivo.
* Ou use o botão de **Deploy** para enviar a nova versão para o celular.

---

# Resumo rápido:

* Modificou o código → `ionic build` → `npx cap copy` → rodar no Android Studio

* **Não precisa rodar `npx cap add android` ou `npx cap open android` novamente, a menos que crie a plataforma do zero.**

---

Se quiser facilitar ainda mais, pode usar o comando `npx cap copy android` para copiar só para Android.

Quer que eu te ajude a criar um script para automatizar isso?


Qualquer dúvida, chama no grupo! 🚀