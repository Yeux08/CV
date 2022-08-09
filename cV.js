window.html2canvas = html2canvas;
window.jsPDF = window.jspdf.jsPDF;

function makepdf() {
  html2canvas(document.querySelector("#cbgcv"), {
    allowTaint: true,
    useCORS: true,
    scale: 1,
  }).then((canvas) => {
    var img = canvas.toDataURL("image/png");

    var doc = new jsPDF();
    doc.addImage(img, "PNG", 0, 0, 0, 300);
    doc.save("CV-Cristian-Ballen");
  });
}

/**
 * Ejemplo 4 de html2canvas para convertir el HTML de una web
 * a un elemento canvas - Descargar la captura como imagen PNG
 *
 * @author parzibyte
 */
//Definimos el botón para escuchar su click
const $boton = document.querySelector("#btnCapturar"), // El botón que desencadena
  $objetivo = document.getElementById("cbgcv"); // A qué le tomamos la fotocanvas
// Nota: no necesitamos contenedor, pues vamos a descargarla

// Agregar el listener al botón
$boton.addEventListener("click", () => {
  html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
    .then((canvas) => {
      // Cuando se resuelva la promesa traerá el canvas
      // Crear un elemento <a>
      let enlace = document.createElement("a");
      enlace.download = "CV-Cristian-Ballen.png";
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
    });
});
