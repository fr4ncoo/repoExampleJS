let seccionMuestra = document.getElementById("sectionMuestra");
let seccionCrear = document.getElementById("sectionCrear");
let seccionEliminar = document.getElementById("sectionEliminar");

function escuchadores() {
  let botonVerTurnos = document.getElementById("botonVerTurnos");
  botonVerTurnos.addEventListener("click", mostrarTurnos);
  let botonCrearTurno = document.getElementById("botonCrearTurno");
  botonCrearTurno.addEventListener("click", mostrarFormulario);
  let botonEliminarTurno = document.getElementById("botonEliminarTurno");
  botonEliminarTurno.addEventListener("click", mostrarEliminarTurno);
}

function mostrarFormulario() {
  seccionMuestra.style.display = "none";
  seccionEliminar.style.display = "none";
  seccionCrear.style.display = "block";
}

function mostrarTurnos() {
  seccionCrear.style.display = "none";
  seccionEliminar.style.display = "none";
  seccionMuestra.style.display = "block";
  seccionMuestra.innerHTML = "";

  fetch("../data/db-turnos.json")
    .then((response) => response.json())
    .then((data) => {
      if (data && data.turnos && Array.isArray(data.turnos)) {
        data.turnos.forEach((turno) => {
          const turnoElement = document.createElement("div");
          turnoElement.classList.add("turno");

          const nombreCliente = document.createElement("p");
          nombreCliente.textContent = "Nombre del cliente: " + turno.nombreCliente;
          turnoElement.appendChild(nombreCliente);

          const nombreMascota = document.createElement("p");
          nombreMascota.textContent = "Nombre de la mascota: " + turno.nombreMascota;
          turnoElement.appendChild(nombreMascota);

          const tipoAnimal = document.createElement("p");
          tipoAnimal.textContent = "Tipo de animal: " + turno.tipoAnimal;
          turnoElement.appendChild(tipoAnimal);

          const edad = document.createElement("p");
          edad.textContent = "Edad: " + turno.edad;
          turnoElement.appendChild(edad);

          const fechaHora = document.createElement("p");
          fechaHora.textContent = "Fecha y hora: " + turno.fechaHora;
          turnoElement.appendChild(fechaHora);

          const motivoConsulta = document.createElement("p");
          motivoConsulta.classList.add("motivoClass");
          motivoConsulta.textContent = "Motivo de consulta: " + turno.motivoConsulta;
          turnoElement.appendChild(motivoConsulta);

          seccionMuestra.appendChild(turnoElement);
        });
      } else {
        console.error("Esto es por si no funciona el JSON");
      }
    })
    .catch((error) => {
      console.error("Error al cargar los turnos", error);
    });

  mostrarTurnosDeLocalStorage();
}

function mostrarEliminarTurno() {
  seccionCrear.style.display = "none";
  seccionMuestra.style.display = "none";
  seccionEliminar.style.display = "block";
  seccionEliminar.innerHTML = "";

  mostrarTurnosDeLocalStorage(true);
}

let formulario = document.getElementById("formularioTurnoNuevo");
formulario.addEventListener("submit", guardarTurnoNuevoEnLocal, mostrarTurnosDeLocalStorage);

function guardarTurnoNuevoEnLocal(event) {
  event.preventDefault();

  let nombreTitular = document.getElementById("nombreDelDuenio").value;
  let nombreMascota = document.getElementById("nombreDeLaMascota").value;
  let tipoDeAnimal = document.getElementById("tipoDeAnimal").value;
  let edad = document.getElementById("edad").value;
  let motivoDeConsulta = document.getElementById("motivoDeConsulta").value;
  let fechaHora = document.getElementById("fechaHora").value;

  let turnoNuevo = {
    nombreTitular: nombreTitular,
    nombreMascota: nombreMascota,
    tipoDeAnimal: tipoDeAnimal,
    edad: edad,
    motivoDeConsulta: motivoDeConsulta,
    fechaHora: fechaHora,
  };

  let turnosGuardados = localStorage.getItem("turnosGuardados");
  let turnos = [];
  if (turnosGuardados !== null) {
    turnos = JSON.parse(turnosGuardados);
  }

  turnos.push(turnoNuevo);

  let turnosGuardadosJSON = JSON.stringify(turnos);

  localStorage.setItem("turnosGuardados", turnosGuardadosJSON);

  console.log("Datos del turno guardados correctamente.");

  Swal.fire({
    title: '¡Listo!',
    text: 'Turno guardado correctamente.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });

  formulario.reset();
}

function mostrarTurnosDeLocalStorage(isDeletingTurnos = false) {
  let turnosGuardados = localStorage.getItem("turnosGuardados");
  if (turnosGuardados !== null) {
    let turnos = JSON.parse(turnosGuardados);
    turnos.forEach((turno, index) => {
      const turnoElement = document.createElement("div");
      turnoElement.classList.add("turno");

      const nombreTitular = document.createElement("p");
      nombreTitular.textContent = "Nombre del titular: " + turno.nombreTitular;
      turnoElement.appendChild(nombreTitular);

      const nombreMascota = document.createElement("p");
      nombreMascota.textContent = "Nombre de la mascota: " + turno.nombreMascota;
      turnoElement.appendChild(nombreMascota);

      const tipoAnimal = document.createElement("p");
      tipoAnimal.textContent = "Tipo de animal: " + turno.tipoDeAnimal;
      turnoElement.appendChild(tipoAnimal);

      const edad = document.createElement("p");
      edad.textContent = "Edad: " + turno.edad;
      turnoElement.appendChild(edad);

      const fechaHora = document.createElement("p");
      fechaHora.textContent = "Fecha y hora: " + turno.fechaHora;
      turnoElement.appendChild(fechaHora);

      const motivoConsulta = document.createElement("p");
      motivoConsulta.classList.add("motivoClass");
      motivoConsulta.textContent = "Motivo de consulta: " + turno.motivoDeConsulta;
      turnoElement.appendChild(motivoConsulta);

      if (isDeletingTurnos) {
        const botonEliminar = document.createElement("div");
        botonEliminar.classList.add("botonEliminar")
        botonEliminar.textContent = "Eliminar turno";
        botonEliminar.addEventListener("click", () => eliminarTurno(index));
        turnoElement.appendChild(botonEliminar);
      }

      seccionEliminar.appendChild(turnoElement);
    });
  }
}

function eliminarTurno(index) {
  let turnosGuardados = localStorage.getItem("turnosGuardados");
  if (turnosGuardados !== null) {
    let turnos = JSON.parse(turnosGuardados);

    if (index >= 0 && index < turnos.length) {
      turnos.splice(index, 1);
      localStorage.setItem("turnosGuardados", JSON.stringify(turnos));

      seccionEliminar.innerHTML = "";

      mostrarTurnosDeLocalStorage(true);

      Swal.fire({
        title: '¡Listo!',
        text: 'Turno borrado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } else {
      console.error("Índice de turno no válido.");
    }
  }
}

escuchadores();
mostrarTurnosDeLocalStorage(true);
