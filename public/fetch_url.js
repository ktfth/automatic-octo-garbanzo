'use strict';

// Socket.io is exposed as the `io` global.
const socket = io('http://localhost:3030');
// @feathersjs/client is exposed as the `feathers` global.
const app = feathers();

// Set up Socket.io client with the socket
app.configure(feathers.socketio(socket));

// Receive real-time events through Socket.io
app.service('v1/urls')
  .on('created', message => console.log('New message created', message));

const e = React.createElement;

class URLInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { url: '' };
  }

  handleChange(e) {
    this.setState({url: e.target.value});
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      console.log('Trigger action: ' + this.state.url);
      app.service('v1/urls').create({
        text: this.state.url
      });
    }
  }

  render() {
    const url = this.state.url;
    return e('input', {
      placeholder: 'URL',
      value: this.state.url,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown,
    });
  }
}

const domContainer = document.querySelector('#fetch_data_url');
ReactDOM.render(e(URLInput), domContainer);
