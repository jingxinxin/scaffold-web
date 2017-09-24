import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Dropdown
} from 'semantic-ui-react';

import _ from 'lodash';

require('./index.scss');

export default class Navigator extends Component {

  constructor(props, context) {
    super(props, context);
    this.state     = {};
    this._getMenus = this._getMenus.bind(this);
    this._getItems = this._getItems.bind(this);
  }

  _getDropDownItem(item) {

    return (
      <Dropdown item text="Categories">
        <Dropdown.Menu>
          <Dropdown.Item>Electronics</Dropdown.Item>
          <Dropdown.Item>Automotive</Dropdown.Item>
          <Dropdown.Item>Home</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  _getChildren(children) {
    const items = this._getItems(children);

    return <Menu.Menu>{items}</Menu.Menu>
  }

  _getItemHeader(item) {
    if (item.url) {
      return <Link to={item.url}
                   activeClassName="active" className="item">{item.name}</Link>
    }
    else {
      return <Menu.Header>{item.name}</Menu.Header>
    }
  }

  _getItems(menus) {
    const { activeItem } = this.state;

    return menus.map(
      item => {
        if (item.display !== 'none') {
          let children = null;
          if (item.children && _.size(item.children) > 0) {
            children = this._getChildren(item.children);
            return (
              <Menu.Item key={item.name} name={item.name} as={'div'}
              >
                {this._getItemHeader(item)}
                {children}
              </Menu.Item>
            )
          }
          return (
            <Menu.Item key={item.url} name={item.url} as={'div'}
                       active={activeItem === item.url}
                       onClick={(e, { name }) => this.setState({ activeItem: name })}
            >
              {this._getItemHeader(item)}
              {children}
            </Menu.Item>
          )
        }
      }
    )
  }

  _getMenus(classes) {
    const { menus } = this.props;
    const items     = this._getItems(menus);

    return (
      <Menu vertical
            className={`${classes} theme-default`}
      >
        {items}
      </Menu>
    );
  }

  render() {
    const classes = this.props.className;

    return (
      <aside className="aside-wrapper">
        {this._getMenus(classes)}
      </aside>
    );
  }
}
