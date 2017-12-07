import * as React from 'react';
import {Link} from 'react-router-dom';
import {observer, inject} from 'mobx-react';
import './Com.less';

@inject('Counter')
@observer
class Com extends React.Component<any> {

  constructor(props: any) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.navigateToAbout = this.navigateToAbout.bind(this);
  }

  navigateToAbout(): void {
    this.props.Counter.navigateToAbout();
  }

  handleIncrement(): void {
    this.props.Counter.increment();
  }

  handleDecrement(): void {
    this.props.Counter.decrement();
  }

  render(): JSX.Element {
    return (
      <div>
        <div className={'containerTest'}>This is page test {this.props.Counter.count}</div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.navigateToAbout}>nav</button>
        <Link to={'/'}>-></Link>
      </div>
    );
  }
}

export default Com;