require('dotenv').config(); // Читаем переменные окружения из .env

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.spec.{js,jsx,ts,tsx}', // Шаблон для нахождения тестов
    supportFile: 'cypress/support/index.js',                     // Поддерживающий файл
    fixturesFolder: 'cypress/fixtures',                          // Папка с фикстурами
    screenshotsFolder: 'cypress/screenshots',                    // Скриншоты
    videosFolder: 'cypress/videos',                              // Видео-записи
  },
});
