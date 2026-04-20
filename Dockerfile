FROM node:20

WORKDIR /app

# Copie les deps d'abord pour profiter du cache Docker
COPY package*.json ./

RUN npm install

# Copie le reste du code
COPY . .

# Vite utilise le port 5173 par défaut
EXPOSE 5173

# Important : --host pour écouter sur 0.0.0.0 et pas seulement localhost
CMD ["npm", "run", "dev", "--", "--host","0.0.0.0"]
