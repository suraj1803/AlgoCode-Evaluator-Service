# 🚀 Setup TypeScript + Express Project

### 1️⃣ Initialize project

```bash
npm init -y
```

### 2️⃣ Install dependencies

```bash
npm install express
npm install -D typescript ts-node nodemon concurrently @types/node @types/express
```

### 3️⃣ Setup TypeScript

```bash
npx tsc --init
```

**Recommended `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",

    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "resolveJsonModule": true,

    "strict": true,
    "strictNullChecks": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,

    "sourceMap": true,

    "types": ["node"],

    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 4️⃣ Folder structure

```
src/
 └── index.ts
```

**Example `index.ts`:**

```ts
import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.get("/", (_, res) => res.send("Hello TypeScript + Express!"));
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
```

### 5️⃣ Add scripts to `package.json`

```json
"scripts": {
  "build": "tsc",
  "start": "nodemon dist/index.js",
  "dev": "concurrently \"npm run build -- -w\" \"npm start\""
}
```

### 6️⃣ Run the server

```bash
npm run dev
```

✅ Auto-compiles TypeScript + auto-restarts on save.
