'use strict';

describe('ClientApp', function () {
  var ClientApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ClientApp = require('../components/client_app.js');
    component = React.createElement(ClientApp);
  });

  it('should create a new instance of ClientApp', function () {
    expect(component).toBeDefined();
  });
});
