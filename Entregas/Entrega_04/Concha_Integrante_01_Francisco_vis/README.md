# Información

## Nombre

El Estudio escogido fue “Relación entre la Actividad Física e Indicadores de Salud Mental” hecho por Ekaterina del Conde Schnaider, Cinthya Vanessa López-Sánchez y Pedro Wolfgang Velasco Matus. Este se puede encontrar en [Scielo](https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-48322022000200106). El gráfico fue realizado por Francisco Concha.

## Explicación

1. En primer lugar, se seleccionó un gráfico de líneas por ser el más útil para mostrar datos que van cambiando a lo largo de un tiempo o rango. Permite ver el panorama general de cada indicador, cuál es más alto o más bajo, y cómo va cambiando cada uno, ya que la base de datos nos muestra cómo los niveles de ansiedad, estrés y autoestima van variando entre más horas de ejercicio hace una persona a la semana.

2. En segundo lugar, se decidió utilizar la librería de altair por ser la más simple pasada en clases y tener varios ejemplos de gráficos disponibles junto a su código. En la página de altair, se seleccionó el gráfico de líneas “Bump Chart” para tomar como base el código que se presentaba de ejemplo.

3. En tercer lugar, se asignaron los nombres a X e Y llamándolos “Horas de ejercicio a la semana” y “Promedio” respectivamente. Se intentó que el gráfico se generara siguiendo la base del “alt.Chart” de la página de altair, pero no se pudo. Por ello, se le aplicó el formato de “df.melt” para facilitarle el trabajo al programa haciendo que cada información estuviera en una línea separada. Aquí se le asigno a “id_vars” el nombre Variables, que corresponden a Estrés, Ansiedad y Autoestima. A “var_name” se le llamó “Horas de ejercicio” para que representara las columnas de la base de datos original (como “Menos de 1 hora, 1 a 2 horas, 2 a 3 horas). Finalmente, a “value_name” se le llamó “Promedios” para que correspondiera a las medias y cifras de las variables, o sea, la información en las filas.

4. En cuarto lugar, el gráfico se pudo generar, pero adicionalmente se creó un código de “colores” para fijarle un color a cada Variable o Indicador. Después se agregó con “color=alt.color”. Esta decisión se tomó para poder darle tonalidades parecidas a los indicadores de “Autoestima total”, “Autoestima positiva” y “Autoestima negativa”, facilitando la visualización del gráfico y que estuviera menos cargado. De esta manera, a la ansiedad se le aplicó un tono azul, al estrés uno rojo y a los indicadores de autoestima se le indicaron distintas tonalidades de verde.

5. En quinto lugar, el eje vertical iba de 0 a 4. Sin embargo, los promedios de los indicadores varían entre 2 y 4. Por ello, al eje vertical se le aplicó un scale=alt.Scale(domain=) para que solo se viera entre estos números.
En sexto lugar, se utilizó el comando “.properties” para indicarle un título y achicar el ancho, ya que el gráfico se veía muy grande. Además, se usó el comando “.interactive” para que se pudieran ver los valores en cada punto y las personas tuvieran claridad de cuánto disminuían o aumentaban los promedios.

## Base de datos

Como se comentó en la entrega pasada, se seleccionó este estudio por ser una investigación transversal que abarca diversas variables de salud mental y las vincula directamente con grupos de acuerdo a su frecuencia de actividad física. Cada una de las variables como estrés, ansiedad, autoestima y autoconcepto se asocian directamente en una tabla con si las personas hacen 1, 2, 3 o más horas de ejercicio. De esta manera, podemos analizar y visualizar si los promedios de los niveles de estrés, ansiedad y autoestima se ven afectados o no por hacer ejercicio fácilmente.

Originalmente, se eliminaron las columnas de Desviación Estándar, F (6,230), p (el análisis de varianza simple y la probabilidad de que esta variabilidad sea significativa), Post-hoc y η², ya que nos centraremos en analizar y comparar las Medias de cada grupo.  Además, se eliminó la variable Autoconcepto (total, social, físico, emocional e intelectual) porque no es un parámetro en el que nos queramos concentrar.

Adicionalmente, en esta entrega se realizó otro proceso. Comparado a la entrega anterior, me pude dar cuenta al tener listo el gráfico que alguna información resultaba redundante. Anteriormente, en las columnas se leía “Menos de 1 hora a la semana, 1 a 2 horas a la semana…”. Como al eje x se le puso el nombre “Horas de ejercicio a la semana” en el gráfico, resultaba redundante y sobrecargaba la visualización. Por lo tanto, se decidió modificar un poco la base de datos y los nombres de las columnas se cambiaron a “Menos de 1 hora, 1 a 2 horas…”.

## Preguntas 
Algunos ejemplos de preguntas que podemos responder con este gráfico son:

1. ¿Al ir aumentando las horas de ejercicio a la semana cómo varían niveles de estrés?
2. ¿La ansiedad en las personas varía significativamente al ir aumentando las horas de ejercicio?
3. ¿Al ir aumentando las horas de ejercicio físico las personas mejoran sus niveles de Autoestima total?
4. En la misma línea, ¿mayor actividad física hace que las personas tengan mayores niveles de Autoestima positiva?