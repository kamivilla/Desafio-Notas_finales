//letibles:
//Pedir nombre y carrera
let nombreEstudiante = prompt("Nombre estudiante: ");
let carretaEstudiante = prompt("Carrera Cursada: ");

// Pedir nombre de ramos
let nombreRamoUno = prompt("Nombre primer ramo");
let nombreRamoDos = prompt("Nombre segundo ramo");
let nombreRamoTres = prompt("Nombre tercer ramo");

//Pedir notas HTML
let notaUnoHTML = parseInt(prompt(`Primera nota de ${nombreRamoUno}`));
let notaDosHTML = parseInt(prompt(`Segunda nota de ${nombreRamoUno}`));
let notaTresHTML = parseInt(prompt(`Tercera nota de ${nombreRamoUno}`));

// Pedir notas CSS
let notaUnoCSS = parseInt(prompt(`Primera nota de ${nombreRamoDos}`));
let notaDosCSS = parseInt(prompt(`Segunda nota de ${nombreRamoDos}`));
let notaTresCSS = parseInt(prompt(`Tercera nota de ${nombreRamoDos}`));

//Pedir notas JS
let notaUnoJS = parseInt(prompt(`Primera nota de ${nombreRamoTres}`));
let notaDosJS = parseInt(prompt(`Segunda nota de ${nombreRamoTres}`));

// Nota para aprobar
let aprobado = parseInt(prompt("Ingresa nota para aprobar"));

//Calcular promedios
let promedioHTML = (notaUnoHTML + notaDosHTML + notaTresHTML) / 3;
let promedioCSS = (notaUnoCSS + notaDosCSS + notaTresCSS) / 3;
let promedioJS = (notaUnoJS + notaDosJS) / 2;

//Calcular cuanto falta para aprobar
let notaParaAprobar = aprobado * 3 - notaUnoJS - notaDosJS;

// EL titulo de la plantilla: Notas finales.
document.write("<header>");
document.write("<h1>Notas Finales</h1>");
document.write("</header>");

// Sección con el nombre del/la estudiante y carrera.
document.write("<section>");
document.write('<div class="container-fluid">');
document.write('<div class="row">');
document.write('<div class="col-12 col-lg-2">');
document.write('<p class="fw-bold">Nombre</p>');
document.write("</div>");
document.write('<div class="col-12 col-lg-10">');
document.write(`<p>${nombreEstudiante}</p>`);
document.write("</div>");
document.write('<div class="col-12 col-lg-2">');
document.write('<p class="fw-bold">Carrera</p>');
document.write("</div>");
document.write('<div class="col-12 col-lg-10">');
document.write(`<p>${carretaEstudiante}</p>`);

document.write("</div></div></div></section>");

//Inicio de la sección tabla: Ramos y notas
document.write("<section>");
document.write('<table class="table">');
document.write("<thead class='table-dark'>");
document.write("<tr>");
document.write('<th scope="col">Ramo</th>');
document.write('<th scope="col">Nota 1</th>');
document.write('<th scope="col">Nota 2</th>');
document.write('<th scope="col">Nota 3</th>');
document.write('<th scope="col">Promedio</th>');
document.write("</tr>");
document.write("</thead>");

// Tabla sección: Notas de HTML
document.write("<tbody>");
document.write("<tr>");
document.write(`<th scope="row">${nombreRamoUno}</th>`);
document.write(`<td>${notaUnoHTML}</td>`);
document.write(`<td>${notaDosHTML}</td>`);
document.write(`<td>${notaTresHTML}</td>`);
document.write(`<td>${promedioHTML.toFixed(2)}</td>`);
document.write("</tr>");

// Tabla sección: Notas de CSS
document.write("<tr>");
document.write(`<th scope="row">${nombreRamoDos}</th>`);
document.write(`<td>${notaUnoCSS}</td>`);
document.write(`<td>${notaDosCSS}</td>`);
document.write(`<td>${notaTresCSS}</td>`);
document.write(`<td>${promedioCSS.toFixed(2)}</td>`);
document.write("</tr>");

// Tabla sección: Notas de JS
document.write("<tr>");
document.write(`<th scope="row">${nombreRamoTres}</th>`);
document.write(`<td>${notaUnoJS}</td>`);
document.write(`<td>${notaDosJS}</td>`);
document.write(`<td>-</td>`);
document.write(`<td>-</td>`);
document.write("</tr>");
document.write("</tbody>");
document.write("</table>");

//Fin sección
document.write("</section>");

//Mensaje: Sino necesita más puntaje se le dira, y si necesita más puntaje dirá cuanto falta.
if (notaParaAprobar <= 0) {
  document.write("<div>");
  document.write(
    `<p>Para aprobar el ramo ${nombreRamoTres} se necesita un ${aprobado} como mínimo. No necesitas más puntaje.</p>`
  );
  document.write("</div>");
} else {
  document.write("<div>");
  document.write(
    `<p>Para aprobar el ramo JS con nota ${aprobado} necesitas un ${notaParaAprobar.toFixed(
      2
    )} en la nota 3</p>`
  );
  document.write("</div>");
}
