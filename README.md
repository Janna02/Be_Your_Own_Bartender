# Веб-приложение "Сам себе бармен"
## Обзор:
Это веб-приложение представляет собой книгу рецептов, позволяющую пользователям создавать, просматривать, редактировать и удалять рецепты. Оно предоставляет удобный интерфейс для эффективного управления и организации рецептов.

## Используемые технологии:
Vue.js: Фронтенд-фреймворк для построения пользовательского интерфейса и компонентов.
Materialize CSS: CSS-фреймворк для стилизации приложения.
Firebase: Бэкенд-сервис для обработки аутентификации пользователей и хранения данных о рецептах.
Vuex: Библиотека управления состоянием для управления состоянием приложения.

## Возможности:
**Аутентификация пользователя:** Безопасная аутентификация пользователей с использованием Firebase.  

**Создание рецепта:** Пользователи могут создавать новые рецепты, заполняя необходимые детали.  

**Просмотр рецептов:** Список рецептов с подробностями.  

**Редактирование рецепта:** Пользователи могут изменять существующие рецепты, обновлять ингредиенты и шаги.  

**Удаление рецепта:** Позволяет пользователям удалять рецепты, которые им больше не нужны.  


### Начало работы:
1. Клонировать репозиторий: gh repo clone Janna02/Be_Your_Own_Bartender
2. Установить зависимости: npm install
3. Создайте файл src/firebase.js (Внутри папки с Проектом есть Readme с описанием его создания)
4. Запустить приложение: npm run serve
5. Открыть браузер и посетить http://localhost:8080


# cookbook

Перед запуском, необходимо создать файл   
**src/firebase.js** с вашей конфигурацией
  
``` JavaScript

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp);

export default {
  install: (app) => {
    app.config.globalProperties.$auth = auth;
    app.config.globalProperties.$db = db;
  },
};


```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```




