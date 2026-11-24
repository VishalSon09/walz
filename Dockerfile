# ---------- build stage ----------
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Vite inlines VITE_* variables at BUILD time, so they must be passed as build args.
# (EmailJS service/template/public keys are shipped to the browser by design.)
ARG VITE_APP_EMAILJS_SERVICE_ID
ARG VITE_APP_EMAILJS_TEMPLATE_ID
ARG VITE_APP_EMAILJS_PUBLIC_KEY
ENV VITE_APP_EMAILJS_SERVICE_ID=$VITE_APP_EMAILJS_SERVICE_ID \
    VITE_APP_EMAILJS_TEMPLATE_ID=$VITE_APP_EMAILJS_TEMPLATE_ID \
    VITE_APP_EMAILJS_PUBLIC_KEY=$VITE_APP_EMAILJS_PUBLIC_KEY

RUN npm run build

# ---------- serve stage ----------
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
