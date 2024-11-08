# Этап сборки
FROM node:18.18.0-alpine AS build

# Установим рабочую директорию
WORKDIR /app

# Копируем файлы с зависимостями
COPY package*.json ./

# Устанавливаем все зависимости (убрали флаг --production)
RUN npm install

# Копируем все файлы приложения
COPY . .

# Строим приложение
RUN npm run build

# Этап выполнения
FROM node:18.18.0-alpine

# Установим рабочую директорию
WORKDIR /app

# Копируем только необходимые файлы из этапа сборки
COPY --from=build /app ./

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]
