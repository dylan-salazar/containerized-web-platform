const http = require('http');

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Proyecto DevOps1 - Fase 2</title>
      <style>
        body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .card { background: #1e293b; padding: 2.5rem; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #334155; text-align: center; max-width: 450px; }
        h1 { color: #38bdf8; margin-bottom: 0.5rem; font-size: 1.8rem; }
        p { color: #94a3b8; font-size: 0.95rem; }
        .badge { display: inline-block; padding: 0.35rem 0.8rem; background: #0284c7; color: white; border-radius: 20px; font-size: 0.85rem; font-weight: bold; margin-top: 1rem; }
        .status { margin-top: 1.5rem; font-size: 0.85rem; color: #4ade80; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1> Servidor Web Activo</h1>
        <p>Aplicación empaquetada en Docker y sirviendo tráfico correctamente.</p>
        <span class="badge">Entorno: ${ENV}</span>
        <div class="status">● Sistema Operativo: Linux (Containerized)</div>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`[INFO] Servidor corriendo en el puerto ${PORT} (Modo: ${ENV})`);
});
