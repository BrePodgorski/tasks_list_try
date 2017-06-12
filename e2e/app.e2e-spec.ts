import { TasksProjPage } from './app.po';

describe('tasks-proj App', () => {
  let page: TasksProjPage;

  beforeEach(() => {
    page = new TasksProjPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
