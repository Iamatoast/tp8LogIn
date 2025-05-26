import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Buttons() {
    return (
        <View>
            <TouchableOpacity><Text>INGRESAR</Text></TouchableOpacity>
            <TouchableOpacity><Text>¿Olvidaste tu contraseña?</Text></TouchableOpacity>
            <TouchableOpacity><Text>Crear cuenta</Text></TouchableOpacity>
        </View>
    )
}