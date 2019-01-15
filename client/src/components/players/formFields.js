export default [
  {
    name: "name",
    label: "Nombre (s)",
    elementType: "input",
    elementConfig: {
      type: "text"
    },
    className: "col s12 m6"
  },
  {
    name: "lastName",
    label: "Apellido",
    elementType: "input",
    elementConfig: {
      type: "text"
    },
    className: "col s12 m6"
  },
  {
    name: "dateOfBirth",
    label: "Fecha de nacimiento",
    elementType: "input",
    elementConfig: {
      type: "text"
    },
    className: "datepicker col s12 m12"
  },
  {
    name: "sex",
    label: "Sexo",
    elementType: "select",
    elementConfig: {
      options: [
        { value: "Hombre", displayValue: "Hombre" },
        { value: "Mujer", displayValue: "Mujer" }
      ]
    },
    className: "col s12 m12"
  },
  {
    name: "number",
    label: "Numero",
    elementType: "input",
    elementConfig: {
      type: "number",
      min: 0
    },
    className: "col s12 m12"
  },
  {
    name: "division",
    label: "Division",
    elementType: "select",
    elementConfig: {
      options: [
        { value: "Gold", displayValue: "Gold" },
        { value: "Silver", displayValue: "Silver" },
        { value: "Top", displayValue: "Top" }
      ]
    },
    className: "col s12 m12"
  },
  {
    name: "isActive",
    label: "Status",
    elementType: "select",
    elementConfig: {
      options: [
        { value: "True", displayValue: "Activo" },
        { value: "False", displayValue: "Inactivo" }
      ]
    },
    className: "col s12 m12"
  }
];
