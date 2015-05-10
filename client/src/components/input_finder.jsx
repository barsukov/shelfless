require('select-less')
var Select = require('react-select');

var InputFinder = React.createClass({

  getInitialState: function() {
      return {
        options:
          [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
          ]
      };
    },

    componentDidMount: function() {
      $.get(this.props.source, function(result) {
        var options = result;
        if (this.isMounted()) {
          this.setState({
            options: options.authors,
          });
        }
      }.bind(this));
    },

  logChange: function (val) {
    console.log("Selected: " + val);
  },

  render: function() {
    return (
      <div>
         <Select className="form-group string optional book_author_name"
            name="book[author_attributes][name]"
            value="one"
            options={this.state.options}
            onChange={this.logChange}/>
      </div>
    );
  }
});
module.exports = InputFinder;
