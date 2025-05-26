import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Inputs() {
    return (
        <View>
            <TextInput placeholder="Correo electrónico"></TextInput>
            <TextInput placeholder="Contraseña" secureTextEntry="true"></TextInput>
        </View>
    )
}