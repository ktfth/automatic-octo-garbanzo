// Initializes the `v1/urls` service on path `/v1/urls`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../../declarations';
import { Urls } from './urls.class';
import createModel from '../../../models/urls.model';
import hooks from './urls.hooks';

// Add this service to the service type index
declare module '../../../declarations' {
  interface ServiceTypes {
    'v1/urls': Urls & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/urls', new Urls(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/urls');

  service.hooks(hooks);
}
