import React, { Component } from 'react';
import { connect } from 'react-redux';

import Top from 'components/Top';
import Navigator from 'components/Navigator';
import menus from 'const/menu';

require('./App.scss');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header : [
        {
          "name": "网站",
          "url" : "http://www.local.xijinfa.com"
        }
      ]
    }

  }

  render() {
    return (
      <div>等级分克里斯朵夫
        <Top
          items={this.state.header}
          title={'析金法'}
          className={'xjf-theme xjf-header fixed inverted'}
        >
          退出
        </Top>
        <Navigator
          menus={menus.content}
          className="xjf-sidebar fixed inverted"
        />
        <div className="xjf-container">
          {/*{this.props.children && React.cloneElement(this.props.children, {*/}
            {/*key: this.props.location.pathname*/}
          {/*})}*/}
        </div>
      </div>
    );
  }

}

export default App;
