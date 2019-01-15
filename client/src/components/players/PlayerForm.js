import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import PlayerField from "./PlayerField";
import { Link } from "react-router-dom";
import formFields from "./formFields";
import "../../style/index.css";

class PlayerForm extends Component {
  componentDidMount() {}

  renderFields() {
    return _.map(
      formFields,
      ({ name, label, elementType, elementConfig, className }) => {
        return (
          <Field
            key={name}
            name={name}
            label={label}
            elementType={elementType}
            elementConfig={elementConfig}
            component={PlayerField}
            className={className}
          />
        );
      }
    );
  }

  render() {
    return (
      <div style={{ margin: "20px 0px" }}>
        <form onSubmit={this.props.handleSubmit(this.props.onPlayerSubmit)}>
          <div className="row">{this.renderFields()}</div>
          <Link to="/players" className="red btn-flat btn-small white-text">
            Cancelar
            <i className="material-icons right">cancel</i>
          </Link>
          <button
            type="submit"
            className="teal btn-flat btn-small right white-text"
          >
            Siguiente
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name, label }) => {
    if (!values[name]) {
      errors[name] = "Requerido";
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "playerForm",
  destroyOnUnmount: false
})(PlayerForm);

// <div style={{ margin: "20px 0px" }}>
//   <form onSubmit={this.props.handleSubmit(this.props.onPlayerSubmit)}>
//     <div className="row">
//       <div className="col s12">
//         <label>Nombre(s):</label>
//         <input type="text" />
//       </div>
//       <div className="col s12">
//         <label>Apellido:</label>
//         <input type="text" />
//       </div>
//       <div className="col s12">
//         <label>Fecha de nacimiento:</label>
//         <input type="text" className="datepicker" />
//       </div>
//       <div className="col s12">
//         <div className="input-field col s12">
//           <select>
//             <option value="1">Golden</option>
//             <option value="2">Silver</option>
//             <option value="3">Top</option>
//           </select>
//           <label>Division:</label>
//         </div>
//       </div>
//       <div className="col s12 inlineFlex">
//         <label>Sexo:</label>
//         <p style={{ padding: "10px 0" }}>
//           <label>
//             <input name="group1" type="radio" defaultChecked />
//             <span>Hombre</span>
//           </label>
//         </p>
//         <p style={{ padding: "10px 0" }}>
//           <label>
//             <input name="group1" type="radio" />
//             <span>Mujer</span>
//           </label>
//         </p>
//       </div>
//       <div className="col s12">
//         <label>Estado:</label>
//         <div className="switch" style={{ padding: "10px 0 20px 0" }}>
//           <label>
//             Inactivo
//             <input type="checkbox" />
//             <span className="lever" />
//             Activo
//           </label>
//         </div>
//       </div>
//
//       <div className="col s12">
//         <div className="input-field col s12">
//           <select multiple>
//             <option value="1">Option 1</option>
//             <option value="2">Option 2</option>
//             <option value="3">Option 3</option>
//           </select>
//           <label>Equipo(s):</label>
//         </div>
//       </div>
//     </div>
//     <Link to="/players" className="red btn-flat btn-small white-text">
//       Cancelar
//       <i className="material-icons right">cancel</i>
//     </Link>
//     <button
//       type="submit"
//       className="teal btn-flat btn-small right white-text"
//     >
//       Siguiente
//       <i className="material-icons right">done</i>
//     </button>
//   </form>
// </div>
