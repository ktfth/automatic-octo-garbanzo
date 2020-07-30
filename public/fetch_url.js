'use strict';

const e = React.createElement;

class URLInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {url: ''};
  }

  handleChange(e) {
    this.setState({url: e.target.value});
  }

  render() {
    const url = this.state.url;
    return e('input', {
      placeholder: 'URL',
      value: this.state.url,
      onChange: this.handleChange,
    });
  }
}

const domContainer = document.querySelector('#fetch_data_url');
ReactDOM.render(e(URLInput), domContainer);
