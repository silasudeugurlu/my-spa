// server.js
const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

// History API fallback (işte burası olayı çözüyor)
app.use(history());

// Public klasör (vite build çıktısı)
app.use(express.static(path.join(__dirname, 'dist')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SPA sunucusu http://localhost:${PORT}`);
});
