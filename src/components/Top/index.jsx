import React, {
  Component
} from 'react';
import {
  Menu,
  Image
} from 'semantic-ui-react'
import PropTypes from 'prop-types';

require('./index.scss');

export default class Top extends Component {

  constructor(props, context) {
    super(props, context);
    this._handleItemClick = this._handleItemClick.bind(this);
  }

  _getRightItems(items, activeItem) {
    return items.map(item => {
      return <Menu.Item
        position="right"
        key={item.name}
        name={item.name}
        onClick={this._handleItemClick}/>
    });
  }

  _handleItemClick(e, { name }) {
    const { handleItemClick } = this.props;

    if (handleItemClick) {
      handleItemClick(name);
    }
  }

  render() {
    const { title, items, className } = this.props;

    return (
      <div className="header-wrapper">
        <Menu secondary className={className}>
          <Menu.Item header>
            <Image
              src="../img/logo.png"
              verticalAlign="middle"
              className="xjf-logo"
            />
            <Image
              src="../img/slogan.png"
              verticalAlign="middle"
            />
          </Menu.Item>
          {this._getRightItems(items)}
          {this.props.children}
        </Menu>
      </div>
    )
  }
}

Top.propTypes = {
  title          : PropTypes.string,
  items          : PropTypes.arrayOf(React.PropTypes.shape({
    name: PropTypes.string
  })),
  className      : PropTypes.string,
  handleItemClick: PropTypes.func
};
