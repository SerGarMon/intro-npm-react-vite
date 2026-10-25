# Sobre este proyecto. Aprende React (un poco)

No nos centraremos mucho en el funcionamiento interno de React. Aun así, echa un ojo a los archivos `.jsx`. Son una mezcla de html y javascript. 
Echa un ojo a cómo están hechos los componentes ComponentePersonalizado y TopWikipedia. El primero está incluido en el archivo base (`src/App.jsx`). Para el segundo, si que lo hemos separado en un archivo suelto (`src/components/TopWikipedia.jsx`). Por eso, hemos tenido que incluir en `App.jsx` la línea: 

```js
import TopWikipedia from './components/TopWikipedia';
```

Para ver cómo es la web, basta con entrar en una terminal en este proyecto y ejecutar `npm run dev`

# Crea tu proyecto
Empezaremos con `npm create vite@latest`. Se creará una nueva carpeta en el proceso. Selecciona React como framework y JavaScript como lenguaje. 
Para el linter usaremos ESLint, que es más nuevo (esto es malo) pero más rápido (esto es bueno).

En el último paso (instalar y ejecutar servidor) diremos que NO.

Comprueba que se ha creado, entre otras cosas, un package.json que contiene las dependencias necesarias

- ## Inicia el sitio
Con `npm install`, y después `npm run`. Consultalo en la url que te aparece.

- ## Edita el gitignore
Han aparecido dos carpetas que serán excluidas del repositorio. Añade comentarios remarcando cuales son, y qué riesgos o inconvenientes tendría no excluirlas.

- ## Inicia el repositorio y haz un primer commit

- ## Añade un componente en una nueva branch
Podemos añadir dependencias con `npm install <nombre>`.
Añade la dependencia `react-confetti`. Para usarla, basta con añadir a las primeras líneas de `App.jsx`:

```js
import Confetti from 'react-confetti'
```

y después, en la app principal puedes añadir un componente llamado `<Confetti/>`. Si te agobia tanto confetti, puedes hacerlo finito con `<Confetti recycle={false} />`

Al acabar este proceso, haz un **commit en una nueva rama llamada react-confetti**.
(📷 Saca captura de como se ve tu web)


- ## Vuelve al estado en el que se quedó la rama main. Desde aquí, tienes que añadir otro componente.
Esta vez se llama `canvas-confetti`. Haz una captura a lo que aparece en tu package.json.

En el archivo `App.jsx`, crea un botón que lance confetti (puedes duplicar el botón ya existente quitando su código de la sección `onclick`). El codigo que debe ejecutar pulsar este boton (`onclick`) es
```js
confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 }
        });
``` 
Puedes ayudarte de una IA para ver la sintaxis completa (aunque no es necesario, confía en tí). Si usas una IA, recuerda no copiar y pegar a lo loco: queremos un historial limpio, que cambie las líneas concretas que necesitamos cambiar

Al acabar este proceso, haz un **commit en una nueva rama llamada canvas-confetti**.
(📷 Saca captura de tu web)

- ## De nuevo, vuelve a la rama main y añade un tercer componente.
El componente es una escena 3D.
Esta vez, debes separar el código en otro componente
Se adjunta el componente `PlanetScene.jsx` y un archivo con los modelos y animaciones `.glb`. El archivo `.glb` debe ir a la carpeta `public/`. Esta carpeta es duplicada en la build final.

El componente necesita una dependencia de

El componente es el fondo de la web, por lo que da igual dónde lo añadas.


(📷 Saca captura cuando consigas añadir el componente y la escena 3D de fondo de pantalla)
Al acabar este proceso, haz un **commit en una nueva rama llamada three**.


De manera **opcional**, modifica index.css para que adopte el modo oscuro por defecto (copiar los estilos de 'prefered-dark-mode' en la 'root' principal)

- ## Elige uno de los dos confettis. Haz merge a la rama principal
Haz merge del confetti elegido a la rama principal. Después, **borra/desinstala la dependencia de confetti que hayas descartado**. Esto se hace con `npm remove <nombre>` o `npm uninstall <nombre>`. Haz un commit cuyo asunto sea solamente el borrado del componente.


- ## Haz merge de la escena 3D a la rama principal.
Aunque en principio debería ser un merge sencillo, dependiendo de cómo hayas añadido cada componente podrías tener un conflicto. Solucionalo si es el caso.

- ## Sube tu repositorio a github, asegurandote que se vean la rama principal + las 3 ramas secundarias
Posiblemente debas hacer `git push origin <rama-1>`, `git push origin <rama-2>`, ...

Debes incuir un readme con:
- Las 3 capturas (mínimo) que he pedido
- La respuesta a la siguiente pregunta:

___Si la carpeta `node_modules/` está excluida, ¿borrar una dependencia hace alguna acción sobre el repositorio? ¿Cuál?___

- Link a la web desplegada en internet (ver paso siguiente)

- ## Haz la build y un pequeño despliegue.
Haciendo `npm run build` crearas una versión comprimida, estática, pensada para el despliegue de la web en la carpeta `dist/`. 

Crea un repositorio nuevo (no habrá conflicto con el anterior porque esta carpeta está excluida del otro repositorio). Después, subelo a github para poder hacer un despliegue en github pages. 

Hay una posibilidad de que no encuentre la ruta del archivo `.glb` correctamente. Si es así, intenta leer la consola de la web y modificar la ruta en la build para encontrarlo correctamente.