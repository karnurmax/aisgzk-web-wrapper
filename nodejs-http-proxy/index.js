const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "localhost";
const AISGZK_URL = process.env.AISGZK_URL || "https://aisgzk.kz";
const V2_URL = process.env.V2_URL || "http://localhost:5168";
// Logging
app.use(morgan('dev'));

// Authorization
// app.use('', (req, res, next) => {
//     if (req.headers.authorization) {
//         next();
//     } else {
//         res.sendStatus(403);
//     }
// });

app.use('/v2', createProxyMiddleware({
    target: V2_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/v2`]: '',
    },
}));
app.use('', createProxyMiddleware({
    target: AISGZK_URL,
    changeOrigin: true,
    // pathRewrite: {
    //     [`^/v2`]: '',
    // },
}));

// Start Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});