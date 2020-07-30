'use strict';

const e = React.createElement;

class URLInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e('input', {placeholder: 'URL'});
  }
}

const domContainer = document.querySelector('#fetch_data_url');
ReactDOM.render(e(URLInput), domContainer);
