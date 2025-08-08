import App from 'src/component';


export default () => {
  mi.registerApp('overview', App);

  if (window.DEV_MICEO_NAME === 'overview') {
    ReactDOM.render(<App />, document.getElementById('app'));
  }
};

