# ClosuresScopeJS
## Curso sobre los closures y el scope en Javascript.

### Scope: 
Es el alcance que va a tener una variable dentro del código. En otras palabras, el Scope se encargará de decidir a que bloques de código va a acceder una variable.

### Global Scope: 
No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.
- Con var podemos re-asignar una variable pero es una mala práctica.
- Con let y const no podemos, aparecerá un error.
- Es una mala práctica crear una variable sin las palabras reservadas: var, let y const.
- Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
- La doble asignación de una variable también es una mala práctica.

### Local Scope: 
Se refiere a la variable o función que esta dentro de un bloque o función especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entorno en donde conviven.

### Ámbito léxico: 
Se refiere a que una función puede acceder a una función o variable fuera de ella. Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.

**Siempre es recomendable utilizar let y const en vez de var.**

![alt text](https://static.platzi.com/media/user_upload/Capture-7a10c51f-5616-47c4-9519-470898d82cea.jpg)

### Closure
La definición sería algo como la combinación de una función y el ámbito léxico en el que ha sido declarada una función, es decir, el closure recuerda el ámbito en el que ha sido creado.