const fs = require("fs");
const folders = [
  "src/controllers",
  "src/services",
  "src/entities",
  "src/routes",
  "src/database",
  "src/utils"
];

const files = {
  "src/controllers/artigo.controller.ts": "",
  "src/services/artigo.service.ts": "",
  "src/entities/Artigo.ts": "",
  "src/routes/artigo.routes.ts": "",
  "src/database/data-source.ts": "",
  "src/utils/summaryGenerator.ts": "",
  "src/app.ts": "",
  "src/index.ts": ""
};

folders.forEach((folder) => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
    console.log(`📁 Pasta criada: ${folder}`);
  }
});

Object.entries(files).forEach(([file, content]) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, content);
    console.log(`📄 Arquivo criado: ${file}`);
  }
});