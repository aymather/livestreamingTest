import React, { Component } from 'react';
import { NodeCameraView } from 'react-native-nodemediaclient';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);

    this.vb = null;
  }

  onClick = () => {
    console.log('Clicked');
    console.log(this.vb);
  }

  render(){
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={this.onClick} style={styles.btn}>
          <Text>Click Me</Text>
        </TouchableOpacity>
        <NodeCameraView
          style={styles.camera}
          ref={(vb) => { this.vb = vb; }}
          outputUrl = {'rtmps://global-live.mux.com/app/V2q01sOv3HTxI02tl4wkp2fjI47RV7020299seNBb7fWZkU'}
          camera={{ cameraId: 1, cameraFrontMirror: true }}
          audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
          video={{ preset: 12, bitrate: 400000, profile: 1, fps: 15, videoFrontMirror: false }}
          autopreview={true}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  btn: {
    height: 50,
    width: 50,
    backgroundColor: '#ccc',
  },
});

export default App;
