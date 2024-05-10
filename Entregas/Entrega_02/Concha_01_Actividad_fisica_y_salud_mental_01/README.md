# Documentación del proceso de limpieza de datos

## Nombre

La base de datos limpiada fue la Tabla 3 “Comparación de variables entre los diferentes grupos de horas invertidas en el ejercicio” del estudio “Relación entre la Actividad Física e Indicadores de Salud Mental” realizado por Ekaterina del Conde Schnaider, Cinthya Vanessa López-Sánchez y Pedro Wolfgang Velasco Matus.

## Explicación del proceso 

### Excel 

1. Para limpiar los datos, se traspasó la Tabla 3 “Comparación de variables entre los diferentes grupos de horas invertidas en el ejercicio” a Excel copiando y pegando.
La tabla presenta en las filas los niveles de las variables de *Estrés*, *Ansiedad-Estado*, *Autoestima (total, positiva y negativa)* y *Autoconcepto (total, social, físico, emocional e intelectual)* para cada grupo en las columnas, los cuales son divididos por la frecuencia de ejercicio que realizan (de la A a la F).

2. Sin embargo, al ser traspasadas a Excel las variables con más de una palabra (como *Ansiedad-Estado*) se duplicaron en dos celdas, en vez de ser contadas como una. Por ello, se limpió eliminando las celdas adicionales y haciendo que las variables estuvieran en la fila acorde con sus datos.

3. Además, se eliminaron las columnas de Desviación Estándar para cada grupo, ya que nos centraremos en analizar y comparar las Medias de cada grupo.

### Google Colab

1. Posteriormente, la tabla resultante fue traspasada a Google Colab para trabajar con Pandas y Python. Para ello, se utilizó el código **“import pandas as pd”** y **“df = pd.read_excel(/content/…)”**.

2. En el programa se eliminaron las columnas *F (6,230)* y *p*. Esto se realizó con el código **“df = df.drop(["F (6,230)", "p", "Post- hoc", "η²"], axis=1)”**. 
Se eliminó la columna *F* correspondiente al análisis de varianza simple, ya que evalúa si la variabilidad entre grupos es significativamente mayor que la variabilidad dentro de los grupos, mientras que a nosotros nos interesa comparar entre los grupos específicamente. La columna *p*, que muestra la probabilidad de que esta variabilidad sea significativa, fue eliminada por consecuencia.

3. Además, se eliminaron las columnas *Post-hoc* y *η²*. Aunque, respectivamente, comparaban los valores de cada grupo y la magnitud de sus diferencias, al tener tantas comparaciones de todos los grupos los datos podrían enredar al público. En vez de presentar todas las comparaciones en la tabla, las diferencias necesarias y relevantes pueden ser mostradas de otra manera o podrían explicitarse. 

4. Las filas con las variables de *Autoconcepto (total, social, físico, emocional e intelectual)* fueron eliminadas porque no es un parámetro en el que nos queramos concentrar.

5. Además, como se eliminaron columnas, quedaron muchas filas sin datos. Por ello, todas estas filas se eliminaron utilizando el código **“df = df.drop([1, 4, 5, 6, 7, 8, 9…], axis=0)”**.

6. Posteriormente, la tabla resultante fue descargada en formato csv asignándole un nombre y usando el código **“files.download("datos_limpios.csv")**.

### Pasos adicionales

1. Luego, nuevamente en Excel, se cambiaron los nombres de los grupos que iban de la letra A hasta la F por la frecuencia de actividad física de cada grupo. Por ejemplo, el *Grupo A (M)* fue cambiado por *“No realizó ejercicio (M)”*.

2. En Visual Studio Code se arreglaron algunas correcciones ortográficas en los nombres de las columnas que se generaron al pasar el archivo a csv.

3. Cabe destacar que los niveles de las variables fueron dejados intactos. No se traspasaron a porcentaje porque mientras variables como *Estrés* fueron estudiadas con una encuesta de escala de 0 a 4, *Ansiedad-Estado* y *Autoestima (total, positiva y negativa)* fueron encuestadas con una escala de 1 a 4. Para prever posibles normalizaciones de los datos que se pudieron haber hecho para compararlos en la misma tabla y no tergiversarlos se dejaron los niveles de media intactos. 

## Razones

El Estudio escogido fue “Relación entre la Actividad Física e Indicadores de Salud Mental” hecho por Ekaterina del Conde Schnaider, Cinthya Vanessa López-Sánchez y Pedro Wolfgang Velasco Matus. Este se puede encontrar en [Scielo](https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-48322022000200106).

Su razón fue que es una investigación transversal que abarca diversas variables de salud mental y las vincula directamente con grupos de acuerdo a su frecuencia de actividad física. Cada una de las variables como estrés, ansiedad, autoestima y autoconcepto se asocian directamente en una tabla con si las personas hacen 1, 2, 3 o más horas de ejercicio. Es una investigación que abarca tanto los indicadores de salud mental como de actividad física profundamente. Además, la encuesta se realiza a población adulta, a la cual queremos apuntar.

Por otra parte, en la tabla donde se vinculan los datos se entrega la media o promedio de cada variable con la frecuencia de actividad física. Por lo tanto, con estos datos podremos indicar si una persona que hace más horas de actividad física a la semana tiene mayores niveles de cada uno de los indicadores de salud mental. De esta manera, se podría decir si el aumento de los niveles de estrés, ansiedad y autoestima se ve afectado o no por hacer ejercicio.

## Preguntas

Con estos datos se pueden plantear preguntas como: 

1. ¿Una mayor frecuencia de actividad física se relaciona con menores niveles de estrés?
2. ¿Entre la variable Ansiedad-Estado y la frecuencia de actividad física de cada grupo existe alguna relación?
3. ¿Una mayor frecuencia de actividad física se relaciona con mayores niveles de Autoestima general?
4. ¿Una mayor frecuencia de actividad física se relaciona con mayores niveles de Autoestima positiva?
