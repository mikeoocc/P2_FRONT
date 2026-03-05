This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Explorador de países

# Estructura

-> src

  -> app
  
    -> page.tsx - Página principal con lista y buscador de países.
    
    -> country
    
      -> [name]
      
        -> page.tsx - Página dinámica con detalle de un país.
        
  -> components
  
    -> CountryCard.tsx - Componente reutilizable para mostrar cada país.
    
  -> lib
  
    -> api
    
      -> countries.ts - Funciones para utilizar la API.

  -> types
  
    -> country.ts - Definición de tipos, en concreto para el objeto que almacene los datos de cada país según la API y el enunciado.

# Guía

  1. Clonar el repo: git clone https://github.com/mikeoocc/P2_FRONT/edit/master/p2front.git
  2. Entrar en la carpeta
  3. Instalar dependencias: npm install
  4. Ejecutar: npm run dev
  5. Abrir en http://localhost:3000

