import React, { Component, PropTypes } from 'react'
import {reduxForm} from 'redux-form';
export const fields = ['searchTerm'];

class SearchForm extends Component {
  render() {
    const {
      fields: {searchTerm},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;
    return (
      <form className="form" onSubmit={handleSubmit(this.props.submitSearch)}>
        <div className="form-group">
          <div className="col-md-10">
            <input type="text"
              className="form-control"
              placeholder="Title / Category / Author / City / Language"  {...searchTerm}/>
          </div>
          <div className="col-md-2">
             <button type="submit" className="btn btn-primary" disabled={submitting}>
               {submitting ? <i/> : <i/>} Search
             </button>
          </div>
        </div>
      </form>
    )
  }
}
SearchForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

module.exports = reduxForm({
  form: 'search',
  fields
})(SearchForm);
