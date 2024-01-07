# Dolar (front-end)

![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)


## Introducción
Proyecto personal creado para mostrar mis en React TypeScript. Este pequeño Proyecto ofrece al usuario una calculadora del dólar, para poder ayudar en sus cuentas.

## Tipo de proyecto
Proyecto individual

## Tecnologías usadas
- React
- CSS
- TypeScript

## Capturas de pantalla 
<img src="https://i.postimg.cc/CL9VrfCY/DOLAR.png">

## Estructura

```
Dolar
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ componente
│  │  ├─ dumb
│  │  │  ├─ DCalculadora.tsx
│  │  │  ├─ DDolar.tsx
│  │  │  ├─ Header.tsx
│  │  │  └─ Main.tsx
│  │  └─ smart
│  │     └─ SCalculadora.tsx
│  ├─ estilo
│  │  ├─ App.css
│  │  └─ Calculadora.css
│  ├─ hook
│  │  └─ useObtenerInformacion.tsx
│  ├─ main.tsx
│  ├─ type
│  │  └─ type.ts
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```

## Instalación 
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en).
Una vez descargado o clanado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
```
npm i
```
Esto instalara las dependencias que necesite el proyecto.

## Uso
En caso de haber seguido los pasos de la instalación solo debe ejecutar el siguiente comando:
```
npm run dev
```
y dirigirse a la dirección que se muestra en consola

En caso de saltarse los paso de instalación y querer probar el proyecto en linea visitar el siguiente link: https://startling-stardust-162ed8.netlify.app

