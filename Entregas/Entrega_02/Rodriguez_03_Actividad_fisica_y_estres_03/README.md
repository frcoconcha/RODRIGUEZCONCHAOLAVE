# Proceso de limpieza de datos

## i. Vicente Rodríguez
## ii. Explicación del proceso
1. Primero que todo, tuve que buscar una base de datos para trabajar, específicamente una que evidenciara la relación entre la actividad física y el estrés. El estudio ["Relación entre nivel de actividad física, ansiedad, estrés y depresión en adultos chilenos en contexto de pandemia por el virus covid-19"](https://revistas.uautonoma.cl/index.php/reaf/article/view/1885/1295), fue el seleccionado y de este extraje la base de datos. 

2. Al leer el estudio se podían observar ciertas tablas con datos interpretados en texto. Desde este punto inicié la limpieza de datos.

3. El estudio tenía como propósito "determinar la relación entre la actividad física y los niveles de estrés, ansiedad y depresión". Los resultados evidenciaron que "no  existe  relación  entre  los  niveles  de  actividad  física  y  ansiedad", por lo que toda información ligada al factor de ansiedad no sirve para nuestro proyecto. Por su parte, el estudio concluyó que "a mayor nivel de actividad física menores son los niveles de estrés y depresión en los sujetos  encuestados"; esto me guió para decidir usar el factor de estrés, ya que el de depresión fue cubierto por mis compañeros. 

4. Considerando lo anterior, seleccioné la tabla 1 del estudio, la cual mostraba los niveles de cada factor del grupo evaluado. Para limpiar esta tabla, ingresé los datos revelados en Excel. El formato no me permitió copiar y pegar, entonces tuve que crear una nueva tabla en el programa, poniendo los datos uno por uno. Decidí incluir el factor de ansiedad en este proceso, para después limpiar la tabla final en Google Colab. 

5. Después seleccioné la tabla 2 del estudio, que revelaba la relación entre nivel de actividad física, ansiedad, depresión y estrés. Excluí el factor de depresión y repetí el proceso que hice en la tabla 1.

6. Luego seleccioné la tabla 4 del estudio, que cruzaba específicamente los niveles de actividad física con los de estrés. Repetí el mismo proceso, aunque la limpieza de datos en Excel fue más simple, ya que la única modificación que se hizo fue alinear los títulos con los datos para mejorar el orden.

7. En el Excel tuve algunas complicaciones para organizar bien los datos por columnas y filas, pero se logró un buen resultado en términos de orden.

8. Al entrar en Google Colab, primero importé pandas y luego la primera tabla trabajada en Excel. Como esa tabla tenía datos nulos, los detecté con la herramienta "isnull". Una vez reconocidos, no había problema en eliminar las filas enteras, por lo que usé la herramienta "dropna". Esto me permitió dejar totalmente limpia la tabla.

9. Al importar la segunda tabla, no existían datos nulos, ni complicaciones tras haber limpiado los datos en Excel, por lo que no fue necesario alguna modificación. 

10. Al importar la tercera tabla, existían algunos datos nulos. Los detecté con la herramienta "isnull" y los eliminé con la herramienta "dropna", ya que esa información estaba relacionada al factor de ansiedad y no alteraba las variables de actividad física y estrés.

11. Finalmente, apliqué códigos para preparar la conversión de las tablas limpias de Google Colab a archivos csv. Luego importé los documentos.

Una vez terminada la limpieza, puedo decir que fue un proceso bastante complejo y que me tomó mucho tiempo, a pesar de no haber realizado tantos procedimientos. 

A modo de resumen se realizó una limpieza de datos a través de Excel de manera manual, es decir, sin la ayuda de códigos; y a través de Google Colab, con el uso de ciertas herramientas aprendidas en clases. 

## iii. Fuentes utilizadas
En mi caso, la fuente utilizada es el estudio ["Relación entre nivel de actividad física, ansiedad, estrés y depresión en adultos chilenos en contexto de pandemia por el virus covid-19"](https://revistas.uautonoma.cl/index.php/reaf/article/view/1885/1295). Como expliqué anteriormente, esta fuente fue escogida porque era necesario evidenciar la relación entre la actividad física y el estrés, según el replanteo de nuestra hipótesis. El estudio logró demostrar que "a mayor nivel de actividad física menores son los niveles de estrés y depresión en los sujetos  encuestados": Los datos seleccionados sirven para ilustrar el grupo de 71 personas estudiadas y para revelar la correlación de variables a través de datos duros, según escalas medibles que son propias de las encuestas aplicadas en la metodología del estudio.

## iv. Preguntas que puede responder la base de datos limpia

- De las 71 personas, ¿cómo se divide el nivel de actividad física y estrés, según la escala de rangos aplicada? 
- ¿Qué ocurre con el nivel de estrés de las personas que tienen un nivel de actividad física bajo?
-  ¿Qué ocurre con el nivel de estrés de las personas que tienen un nivel de actividad física alto?

