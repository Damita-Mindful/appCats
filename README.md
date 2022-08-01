# Project - Cats

## Objetivo del Proyecto

- Construicción de una App utlizando React, Redux, Node y Sequelize.


## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

El contenido de `client` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver distintas razas de gatos junto con información relevante de las mismas utilizando la api externa [the cat api](https://thecatapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar gatos
  - Filtrarlos / Ordenarlos
  - Agregar nuevos gatos

__IMPORTANTE__: Para poder utilizar esta API externa es necesario crearse una cuenta para obtener una API Key que luego debera ser incluida en todos los request que hagamos a rawg simplemente agregando `?api_key={YOUR_API_KEY}` al final de cada endpoint. Agregar la clave en el archivo `.env` para que la misma no se suba al repositorio por cuestiones de seguridad y utilizarla desde allí.

__IMPORTANTE__: No se utilizan librerías externas para aplicar estilos a la aplicación. (CSS puro, CSS Modules o Styled Components)

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

- [ ] Botón para ingresar al home (`Ruta principal`)
- [ ] Input de búsqueda para encontrar razas de gatos por nombre
- [ ] Área donde se verá el listado de razas de gatos. 
- [ ] Botones/Opciones para filtrar por:
    - Temperamento 
    - Raza existente (es decir las que vienen de la API) o agregada por nosotros (creadas mediante el form)
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de gato por:
    - Orden alfabético 
- [ ] Paginado para ir buscando y mostrando las siguientes razas.

__Ruta de creación de raza de perro__: 
- [ ] Un formulario __controlado con JavaScript__ 
- [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
- [ ] Botón/Opción para crear una nueva raza de gato

> Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Que el nombre de la raza no pueda contener números o símbolos, que el peso mínimo no pueda ser mayor al máximo y viceversa, etc.
 
#### Base de datos

Entidades:

- [ ] Raza 
- [ ] Temperamento 

La relación entre ambas entidades es de muchos a muchos ya que una raza de gato puede tener varios "temperamentos" en simultaneo y, a su vez, un "temperamento" puede corresponder a múltiples razas de gato distintas. 

#### Backend

Servidor desarrollado en Node/Express con las siguientes rutas:

- [ ] __GET /cats__:
  - Obtener un listado de las razas de gato
- [ ] __GET /cats?name="..."__:
  - Obtener un listado de las razas de gato que contengan la palabra ingresada como query parameter
  - Si no existe ninguna raza de gato mostrar un mensaje adecuado
- [ ] __GET /cats/{idRaza}__:
  - Obtener el detalle de una raza de gato en particular
  - Incluir los temperamentos asociados
- [ ] __GET /temperament__:
  - Obtener todos los temperamentos posibles
- [ ] __POST /cat__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de cat por body
  - Crea una raza de gato en la base de datos

#### Testing
- [ ] Al menos tener un componente del frontend con sus tests respectivos
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests respectivos
