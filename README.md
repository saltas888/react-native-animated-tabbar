# Animated Tabbar

This component is just a combination of [React-native-tab-navigator](https://github.com/exponent/react-native-tab-navigator)
and [React-native-animatable](https://github.com/exponent/react-native-animatable) in order to add
easily animation effects on your Tabbar.

You can choose any of the [React-native-animatable](https://github.com/exponent/react-native-animatable) animations or the youtube-like pulse animation

It works for both iOS & Android


Inspiration
-------

Highly Inspired by [React-native-tab-navigator](https://github.com/exponent/react-native-tab-navigator) &
[React-native-animatable](https://github.com/exponent/react-native-tab-navigator) 



Install
-------

Make sure that you are in your React Native project directory and run:

```npm install react-native-animated-tabbar --save```

## Usage

Import TabNavigator as a JavaScript module:

```js
import TabNavigator from 'react-native-animated-tabbar';
```

This is an example of how to use the component and some of the commonly used props that it supports:

```js
<TabNavigator>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'home'}
    title="Home"
    animation="rotate"
    renderIcon={() => <Image source={...} />}
    renderSelectedIcon={() => <Image source={...} />}
    badgeText="1"
    onPress={() => this.setState({ selectedTab: 'home' })}>
    {homeView}
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'profile'}
    title="Profile"
    animation="zoomIn"
    renderIcon={() => <Image source={...} />}
    renderSelectedIcon={() => <Image source={...} />}
    renderBadge={() => <CustomBadgeView />}
    onPress={() => this.setState({ selectedTab: 'profile' })}>
    {profileView}
  </TabNavigator.Item>
</TabNavigator>
```

See TabNavigatorItem's supported props for more info.

### Hiding the Tab Bar

You can hide the tab bar by using styles. For example:
```js
let tabBarHeight = 0;
<TabNavigator
  tabBarStyle={{ height: tabBarHeight, overflow: 'hidden' }}
  sceneStyle={{ paddingBottom: tabBarHeight }}
/>
```

### Props

TabNavigator props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| sceneStyle | inherited | object (style) | define for rendered scene |
| tabBarStyle | inherited | object (style) | define style for TabBar |
| tabBarShadowStyle | inherited | object (style) | define shadow style for tabBar |
| hidesTabTouch | false | boolean | disable onPress opacity for Tab |

TabNavigator **Animation** props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| animationDuration | 500 | number | transition time of animation |

TabNavigator.Item props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| renderIcon | none | function | returns Item icon |
| renderSelectedIcon | none | function | returns selected Item icon |
| badgeText | none | string or number | text for Item badge |
| renderBadge | none | function | returns Item badge |
| title | none | string | Item title |
| titleStyle | inherited | style | styling for Item title |
| selectedTitleStyle | none | style | styling for selected Item title |
| tabStyle | inherited | style | styling for tab |
| selected | none | boolean | return whether the item is selected |
| onPress | none | function | onPress method for Item |
| allowFontScaling | false | boolean | allow font scaling for title |

TabNavigator.Item  **Animation** props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| animation | none | string | One of animation types from react-native-animatable OR 'youtubePulse' |
| pulseColor | #f4010d | string | Pulse hex color when animation is youtubePulse |
