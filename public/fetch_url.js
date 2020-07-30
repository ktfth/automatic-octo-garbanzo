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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { url: '', imgs: [] };
  }

  handleChange(e) {
    this.setState({url: e.target.value});
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      console.log('Trigger action: ' + this.state.url);
      app.service('v1/urls').find({ query: { url: this.state.url } }).then(res => {
        if (res.total === 0) {
          app.service('v1/urls').create({
            url: this.state.url
          }).then(res => {
            this.setState({ url: this.state.url, imgs: res.imgs });
          });
        } else {
          this.setState({ url: this.state.url, imgs: res.data[0].imgs });
        }
      });
    }
  }

  render() {
    const url = this.state.url;
    let urlInput = e('input', {
      placeholder: 'URL',
      value: this.state.url,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown,
    });
    let imgs = [];
    for (let img of this.state.imgs) {
      imgs.push(e('li', null, e('img', { src: img })));
    }
    let ul = e('ul', null, imgs);

    return e('div', null, urlInput, ul);
  }
}

const fetchDataUrlDomContainer = document.querySelector('#fetch_data_url');
ReactDOM.render(e(App), fetchDataUrlDomContainer);
