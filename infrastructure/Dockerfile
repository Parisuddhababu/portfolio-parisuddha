
# Stage 1: Build
FROM node:20 as build-stage
RUN apt-get update && apt-get install -y nano git
WORKDIR /app
ENV VITE_PORT=50035
ENV VITE_PREVIEW=50035
ENV VITE_APP_SECRET_KEY=6d371473b231ce5b683a1e11111c0890e3798dbe
ENV VITE_APP_API_URL=https://api-ecommerce.glasier.co.in
ENV VITE_API_URL=https://ecommerce.glasier.co.in
ENV GENERATE_SOURCEMAP=false
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g pm2
ARG ENV_FILE
COPY infrastructure/envs/${ENV_FILE} .env
RUN npm run build:prod
# Stage 2: Run with PM2
FROM node:20-slim
RUN npm install -g pm2
WORKDIR /app
COPY --from=build-stage /app /app
CMD ["pm2-runtime", "start", "ecosystem.config.cjs"]
