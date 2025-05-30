import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'

export default function Inputs() {
    return (
        <View>
            <TextInput style={styles.inputs} placeholder="Correo electrónico"></TextInput>
            <TextInput style={styles.inputs} placeholder="Contraseña" secureTextEntry={true}></TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
	inputs:{
        borderWidth: 1,
        borderColor: '#8E5DFB',
        padding: 10,
        borderRadius: 4,
        marginTop: 7
    }
});