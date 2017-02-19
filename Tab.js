'use strict';
import React, {
  PropTypes,
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Layout from './Layout';
import * as Animatable from 'react-native-animatable';
import * as Utils from './utils'

//initialize custom animations
require('./animations')

export default class Tab extends React.Component {
  static propTypes = {
    testID : PropTypes.string,
    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    badge: PropTypes.element,
    onPress: PropTypes.func,
    hidesTabTouch: PropTypes.bool,
    animation: PropTypes.string,
    pulseColor:PropTypes.string,
    duration: PropTypes.number,
    allowFontScaling: PropTypes.bool,
    style: View.propTypes.style,
  };

  static defaultProps = {
    duration: 500,
    pulseColor:'#f4010d'
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      size: 0,
    }
    this._handlePress = this._handlePress.bind(this);
  }

  render() {
    let { title, badge } = this.props;
    let icon = null;
    if (React.Children.count(this.props.children) > 0) {
      icon = React.Children.only(this.props.children);
    }

    if (title) {
      title =
        <Text
          numberOfLines={1}
          allowFontScaling={!!this.props.allowFontScaling}
          style={[styles.title, this.props.titleStyle]}>
          {title}
        </Text>;
    }

    if (badge) {
      badge = React.cloneElement(badge, {
        style: [styles.badge, badge.props.style],
      });
    }

    let tabStyle = [
      styles.container,
      title ? null : styles.untitledContainer,
      this.props.style,
    ];
    return (
      <TouchableOpacity
        testID={this.props.testID}
        activeOpacity={this.props.hidesTabTouch ? 1.0 : 0.8}
        onPress={this._handlePress}
        style={tabStyle}>
        <View style={styles.tabItemsContainer} onLayout={e=>{
          const {width, height} = e.nativeEvent.layout
          const backgroundSize = Math.max(height, width)
          this.setState({size: height})
        }}>
          <Animatable.View ref="view">
            {icon}
            {badge}
          </Animatable.View>
          {title}
          <Animatable.View ref="backgroundView" 
            style={{
              backgroundColor:Utils.hex2rgbaConvert(this.props.pulseColor, 50), 
              opacity:0,
              bottom:0,
              left:this.state.size/2,
              position:'absolute', 
              width:this.state.size,
              height:this.state.size,
              borderRadius: this.state.size/2}}/>
        </View>
      </TouchableOpacity>
    );
  }

  _handlePress = (event) => {
    if(this.props.animation === 'youtubePulse'){
      this.refs.backgroundView['youtubePulse'](this.props.duration)
    }
    else if(this.props.animation){
      try{
        this.refs.view[this.props.animation](this.props.duration)
      }
      catch(e){
        console.warn('Unknown provided animation')
      }
    }
    if (this.props.onPress) {
      this.props.onPress(event);
    }
  }
}

let styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -6,
    right: -10,
  },
  tabItemsContainer:{
    backgroundColor:'transparent',
    flex:1,
    alignSelf:'stretch',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  untitledContainer: {
    paddingBottom: 13,
  },
  title: {
    color: '#929292',
    fontSize: 10,
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: 4,
    marginBottom: 1 + Layout.pixel,
  },
});
