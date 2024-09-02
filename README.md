# Sistema de Administración de Turnos Veterinarios

Este proyecto consiste en un sistema de administración de turnos para una clínica veterinaria. Permite a los usuarios crear, ver y eliminar turnos para sus mascotas de manera sencilla y organizada.

El sistema está construido utilizando HTML, CSS y JavaScript. No se requiere ningún framework adicional para su funcionamiento. Los datos de los turnos se almacenan localmente en el navegador utilizando el almacenamiento local.

## Características principales

- **Crear turno**: Los usuarios pueden completar un formulario con información sobre ellos mismos y su mascota para crear un nuevo turno. Los campos incluyen nombre del titular, nombre de la mascota, tipo de animal, edad, motivo de consulta y fecha y hora de preferencia.

- **Ver turnos creados**: Existe una sección donde se muestran todos los turnos creados hasta el momento. Los datos se obtienen de un archivo JSON local que contiene la información de los turnos guardados.

- **Eliminar turnos**: Los usuarios tienen la opción de eliminar un turno específico de la lista de turnos creados. Al hacer clic en el botón "Eliminar turno" junto a cada turno, se borra el turno seleccionado de la lista y se actualiza la vista.

- **Interfaz de usuario intuitiva**: La interfaz de usuario es simple y fácil de usar. Los usuarios pueden navegar entre las diferentes secciones del sistema utilizando los botones disponibles y completar el formulario de creación de turno de manera clara.

## Cómo utilizar el sistema

1. Descarga los archivos HTML, CSS y JavaScript proporcionados.

2. Abre el archivo HTML en tu navegador web.

3. En la página principal, encontrarás los siguientes botones:
   - "Ver turnos creados": Muestra todos los turnos previamente creados.
   - "Crear nuevo turno": Permite crear un nuevo turno completando un formulario.
   - "Eliminar un turno creado": Permite eliminar un turno específico de la lista de turnos creados.

4. Haz clic en los botones correspondientes para realizar las acciones deseadas.

5. Completa el formulario de creación de turno con la información requerida y haz clic en "Crear turno" para agregarlo a la lista de turnos.

6. Si deseas eliminar un turno, haz clic en el botón "Eliminar turno" junto al turno que deseas eliminar.

## Dependencias externas

El proyecto utiliza las siguientes dependencias externas:

- [SweetAlert2](https://sweetalert2.github.io/): Una biblioteca de JavaScript que proporciona hermosos cuadros de diálogo modales y alertas personalizadas. Se utiliza para mostrar mensajes de éxito al crear o eliminar turnos.
