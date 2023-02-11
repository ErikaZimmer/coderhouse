# 13. Efectos y animaciones con Jquery

## Formato
Código fuente en JavaScript, Sublime Text o VisualStudio.  

## Sugerencia
Ten en cuenta que los métodos de jQuery show, hide, fadeIn, fadeOut, slideUp, slideDown y toggle ofrecen animaciones con comportamiento predefinido. 

Si quieres armar tus propias animaciones, deberás usar animate.

También recuerda que los métodos jQuery pueden encadenarse: http://www.w3big.com/es/jquery/jquery-chaining.html
 
## Consigna 📝
Codifica animaciones concatenadas sobre uno o más elementos. Es decir que luego de finalizar una animación en su función callback, se especifica la llamada a otra animación.

## Aspectos a incluir en el entregable
Archivo HTML y archivo JavaScript referenciado, que incluya la definición de dos o más animaciones y sus respectivas funciones callback.

## Ejemplo de secuencia de animación
1. Mostrar un elemento con fadeIn() y al concluir su transición, ocultar otro elemento con fadeOut(). 
2. Aumentar el margen de un elemento con animate() y al concluir su transición, disminuir el margen del mismo elemento con animate().
3. Disminuir la altura de un elemento con animate() y al concluir su transición, esperar con delay() unos ms, y volver al tamaño original.
