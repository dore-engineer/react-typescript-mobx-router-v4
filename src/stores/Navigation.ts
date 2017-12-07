import {observable, action} from 'mobx';
import createBrowserHistory from 'history/createBrowserHistory';

export class Navigation {
  @observable location = null;
  history = createBrowserHistory();

  @action
  push(location: string) {
    this.history.push(location);
  }

  @action
  replace(location: string) {
    this.history.replace(location);
  }

  @action
  go(n: number) {
    this.history.go(n);
  }

  @action
  goBack() {
    this.history.goBack();
  }

  @action
  goForward() {
    this.history.goForward();
  }
}

export default new Navigation();