/* @flow */

import React, { PureComponent } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import PanelPage from './PanelPage';
import type { NavigationState } from 'react-native-tab-view/types';
import PanelItem from './PanelItem';
type Route = {
  key: string,
  title: string,
  //icon: string,
};

type State = NavigationState<Route>;

export default class TopBarIconExample extends PureComponent<void, *, State> {
  static title = 'Bottom Tab Demo -- Activities';
  static appbarElevation = 4;

  state: State = {
    index: 0,
    routes: [
      { key: '1', title: 'All'/*, icon: 'ios-speedometer' */},
      { key: '2', title: 'Upcoming'/*, icon: 'ios-game-controller-b' */},
      { key: '3', title: 'Completed'/*, icon: 'ios-basketball' */},
    ],
  };

  _handleIndexChange = index => {
    this.setState({
      index,
    });
  };

/*  _renderIcon = ({ route }) => {
    return <Ionicons name={route.icon} size={24} style={styles.icon} />;
  };*/

  _renderFooter = props => {
    return (
      <TabBar
        {...props}
        //renderIcon={this._renderIcon}
        style={styles.tabbar}
        tabStyle={styles.tab}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case '1':
        return (
          <PanelPage
            state={this.state}
          />
        );
      case '2':
        return (
          <PanelPage
            state={this.state}
          />
        );
      case '3':
        return (
          <PanelPage
            state={this.state}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[styles.container, this.props.style]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#222',
  },
  tab: {
    padding: 0,
  },
  icon: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  count: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2,
  },
});