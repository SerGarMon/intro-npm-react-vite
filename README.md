# Sobre este proyecto. 

Este es un proyecto que explica brevemente un stack de trabajo para hacer un proyecto en react:

- `npm` para gestionar dependencias y hacer la build
- `vite` para iniciar el proyecto y el servidor
- `react` como framework usado

Propongo una actividad en [Enunciado.md](Enunciado.md).

## Aprende React (un poco)

No nos centraremos mucho en el funcionamiento interno de React. Aun así, echa un ojo a los archivos `.jsx`. Son una mezcla de html y javascript. 
Echa un ojo a cómo están hechos los componentes ComponentePersonalizado y TopWikipedia. El primero está incluido en el archivo base (`src/App.jsx`). Para el segundo, si que lo hemos separado en un archivo suelto (`src/components/TopWikipedia.jsx`). Por eso, hemos tenido que incluir en `App.jsx` la línea: 

```js
import TopWikipedia from './components/TopWikipedia';
```

Para ver cómo es la web, basta con clonar este repositorio, entrar en una terminal en este proyecto y ejecutar `npm run dev`. Consultalo en la url que te aparece.
