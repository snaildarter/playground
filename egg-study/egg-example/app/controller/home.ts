import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    console.log(newsList)
    ctx.body = newsList;
    // await ctx.render('news/list.tpl', { list: newsList });
  }
}
