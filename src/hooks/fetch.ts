// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const url = require('url');
const got = require('got');
const cheerio = require('cheerio');

import { Hook, HookContext } from '@feathersjs/feathers';

export default (options = {}): Hook => {
  return async (context: HookContext) => {
    try {
      const response = await got(context.data.url);
      const $ = cheerio.load(response.body);
      const imgs: any = [];
      const elsImgs = $('img');
      for (let i = 0; i < elsImgs.length; i += 1) {
        let el = elsImgs.eq(i);
        let url = new URL(el.attr('src'), context.data.url);
        imgs.push(url.href);
      }
      context.data.imgs = imgs;
      return context;
    } catch (error) {
      return context;
    }
  };
}
