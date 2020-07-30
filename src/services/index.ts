import { Application } from '../declarations';
import v1Urls from './v1/urls/urls.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(v1Urls);
}
