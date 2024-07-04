# Información general

Para esta entrega se realizó una presentación con un video.

## Toma de decisiones

Siguiendo la estructura planteada anteriormente, la webstory fue diseñada hacia abajo en formato de cuadros a la izquierda y derecha de manera alternada.

1. En primer lugar, se diseño el inicio de la página con header y .activalogo a su izquierda. Anteriormente el diseño de la página se había planteado con tonalidades de azul, pero fue cambiado a un verde que representara un tono más esperanzador acompañado de un gris para que la página no se sobrecargara de tonos demasiado brillantes. Además, se agregó una fuente no considerada anteriormente: PT Sans. Las fuentes que habíamos pensado no le daban fuerza al titulo al ser demasiado parecidas entre ellas, por lo que se buscó una diferente y con mayor estilo.

2. En segundo lugar, se programó la bienvenida a la página web con .inicio. Aquí sí fue utilizada una fuente que habíamos considerado en nuestro manual de marca: Assistant. Además, como se había planeado, el texto se encuentra al centro junto a 3 imágenes debajo de él para que capten la atención del espectador. Por lo mismo, se les dio un borde y sombra con .imagenes (border, border-radius y box-shadow) y una animación donde al pasar el clic encima se agrandaran (transform: scale).

3. Posteriormente, se creó una class con .secciones para estructura el resto de la página web. Cabe destacar que se intentaron utilizar elementos como float y max-width para poder poner las imágenes y gráficos al lado de un párrafo. Sin embargo, como no se lograron alinear correctamente, se utilizó display: flex, align-items y flex-direction: row. Además, se decidió que se usaría la función overflow: hidden porque muchas veces los elementos se salían de la página web alargándola horizontalmente, lo cual no creemos que sea lo correcto.

4. En cuarto lugar, se decidió alternar constantemente las visualizaciones (imágenes y gráficos) con el párrafo para que no estuvieran siempre en un mismo lado, además de cambiar el color. Cabe destacar que las visualizaciones 2, 3, 4 y 5 fueron hechas nuevamente para que pudieran ser interactivas y saber los datos exactos al pasar el cursor sobre ellas. Por otra parte, la visualización 6 fue cambiada completamente en un nuevo gráfico para que pudieran entenderse mejor los datos, ya que antes se perdían entre demasiados indicadores.

5. En quinto lugar, se decidió terminar con un párrafo que explícitamente indica los beneficios que tiene una mayor cantidad de horas de ejercicio físico en estos indicadores de salud mental (ansiedad, estrés, autoestima y depresión). Además, se decidió agregar enlaces a videos en Youtube para que la gente se motivara a hacer ejercicio incluso desde casa, uno de los objetivos de la página. Por otra parte, se determinó que las referencias se encontrarían a un lado para que no se perdieran en una esquina de la página (como se había planeado en un principio).

6. Finalmente, se decidió hacer más interactiva la página web con animaciones hechas gracias a jQuery y W3Schools. El logo y el título de la página no presentan transiciones para que sean lo primero que vea la persona al entrar. Por lo mismo, a la bienvenida que viene debajo se le agregó un fadein para que aparezca unos segundos más tarde. Por otra parte, se decidió que el resto de los elementos de la página irían apareciendo a medida que las personas vayan scrolleando (basándonos en la información encontrada en W3Schools en secciones como Smooth Scroll usando scrollReveal). De esta manera, la página se verá más fluida y atractiva para los usuarios.
