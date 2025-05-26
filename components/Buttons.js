import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Buttons() {
    return (
        <View>
            <TouchableOpacity style={[styles.ingresar, styles.buttons]}><Text>INGRESAR</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text>¿Olvidaste tu contraseña?</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text>Crear cuenta</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
	buttons:{
		alignItems: 'center',
		justifyContent: 'center',
		width: 300,
		height: 30
	},
	ingresar:{
		backgroundColor: '#8E5DFB',
	},
});
