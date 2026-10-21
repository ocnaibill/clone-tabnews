# clone-tabnews

## Setup

O projeto depende das variáveis de ambiente do Postgres para subir o serviço de
banco de dados local. Elas **não** são versionadas — copie o arquivo de exemplo e
ajuste com as suas credenciais:

```bash
cp .env.example .env.development
```

Depois suba os serviços e rode a aplicação:

```bash
npm run services:up
npm run dev
```
