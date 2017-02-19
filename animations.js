import * as Animatable from 'react-native-animatable';

const youtubePulse = {
  0: {
    opacity: 0.0,
    scale: 0.1,
  },
  0.5: {
    opacity: 1.0,
  },
  1: {
    opacity: 0.0,
    scale: 1.2,
  },
};

Animatable.initializeRegistryWithDefinitions({youtubePulse});