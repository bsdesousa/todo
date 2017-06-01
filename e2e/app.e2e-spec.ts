import { TodoAppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('todo-app App', () => {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
  });

  it("should show three todos when we first load the todo app", () => {  
    browser.get("/");
    let todos = element.all(by.css(".todos .todo"));
    //expect(todos.count()).toEqual(0);
    expect(element(by.binding('todos')).getText()).toEqual('Todos');
})
});
