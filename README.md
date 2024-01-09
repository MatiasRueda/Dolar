# Dolar 
![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)


## Introducción
Proyecto personal creado para mostrar mis conocimientos en React TypeScript. Este pequeño proyecto ofrece al usuario una calculadora del dólar, para poder ayudar en sus cuentas.

## Tipo de proyecto
Proyecto individual

## Capturas de pantalla 
<img src="https://i.postimg.cc/CL9VrfCY/DOLAR.png">

## Estrategias
### Smart y Dumb Component
Se separaron los componentes que se utilizan en el proyecto en smart  y dumb component según la responsabilidad que tengan. Esto lo hice con el objetivo de obtener un código mas conciso y una mejor legibilidad </br> 
Smart:  Tendrán la lógica del componente, operaciones complejas , gestionan eventos y acciones del usuario.</br>
Dumb: No manejan la lógica, se encargan únicamente de la presentación.


## Tecnologías usadas
- React
- CSS
- TypeScript

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
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en).</br>
Una vez descargado o clonado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
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

