# Proceso de instalación Amada


## Intalación y clonado del proyecto

1.- Ejecute en la carpeta donde quiere guardar la carpeta del proyecto Amada:
`git clone https://github.com/EdgarMarker/Amada.git`
2.- Instale las variables de entorno moviendonos a la carpeta "frontend" desde la terminal:
`cd frontend/`
`git clone [URL_GIST] .env_secrets && cp .env_secrets/Amada.txt .env && rm -rf .env_secrets`
3.- Instalar las dependencias de node_modules:
    ·Desde la carpeta carpeta actual "frontend" ejecutamos:
    `npm i`
    ·Luego nos pasamos al backend y instalamos las dependencias:
    `cd ..`
    `cd backend`
    `npm i`
4.- Instalación completa! 👌🏽

NOTA: En caso de tener problemas con las dependencias, evitemos forzar la instalación con `npm i --force` o `npm i --legacy-per-dephs` y actualizemos astro con sanity/astro

