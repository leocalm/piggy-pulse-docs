window.onload = function () {
  window.ui = SwaggerUIBundle({
    url: "https://api.piggy-pulse/api/v1/openapi.json",
    dom_id: "#swagger-ui",
    deepLinking: true,
    displayRequestDuration: true,
    docExpansion: "none",
    defaultModelsExpandDepth: 1,
    defaultModelExpandDepth: 1,
    showExtensions: false,
    showCommonExtensions: false,
    tryItOutEnabled: false, // disable live calls by default
  });
};
