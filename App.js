import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Form from './components/Form.js'

export default function App() {
  return (
    <SafeViewArea style={styles.view}>
      <View style={styles.header}>
	<Text>Login App</Text>
      </View>
      <View style={styles.container}>
	<Image source={require('./assets/ultrakill-v1.gif')} />
	<Form />
      </View>
      <StatusBar style="auto" />
    </SafeViewArea>
  );
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
  },
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center'
  },
});
