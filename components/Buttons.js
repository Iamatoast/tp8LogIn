import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Buttons() {
    return (
        <View style={styles.viewButtons}>
            <TouchableOpacity style={[styles.ingresar, styles.buttons]}><Text style={styles.text}>INGRESAR</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text>¿Olvidaste tu contraseña?</Text></TouchableOpacity>
            <TouchableOpacity style={styles.buttons}><Text>Crear cuenta</Text></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
	viewButtons:{
		marginTop: 18
	},
	buttons:{
		alignItems: 'center',
		justifyContent: 'center',
		width: 300,
		marginTop: 7
	},
	ingresar:{
		backgroundColor: '#8E5DFB',
		borderRadius: 4,
		padding: 10
	},
	text:{
		color: 'white'
	}
});
