import React from 'react';
import { Button, Alert, ToastAndroid, Plataform} from   'react-native';

export default props => {
    const notificar = msg => {
        if (Platform.OS === 'android'){ //pde testar pra ios
            ToastAndroid.show(msg, ToastAndroid.LONG)
        } else {
            Alert.alert('Informação', msg)
        }
    }

    return (
        <Button title='Plataforma?'
            onPress={() => notificar('Parabéns!')} /> 
    )
}