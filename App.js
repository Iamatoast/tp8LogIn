import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import Form from './components/Form.js'

export default function App() {
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.header}>
	<Text style={styles.headerText}>Login App</Text>
      </View>
      <View style={styles.container}>
	<Image source={require('./assets/doom.jpg')} style={{height: 300, width: 350}} />
	<Form />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#612FFC'
  },
  headerText: {
    color: 'white',
    fontSize: 20
  }
});
