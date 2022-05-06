import React from 'react';
import { 
    TouchableOpacity, 
    TouchableOpacityProps,
    Text, 
    StyleSheet } from 'react-native';
/*
 {onPress} - A propriedade onPress e uma prop descontruida que e uma função externa que e chamada para ser executada de forma externa 
*/ 

/*
- props:  '...rest' -  significa que vai ser passada de forma dinamica todas as props do elementos   
*/

/* 
- interface: Neste caso e criado o tipo ButtonProps que e extendida a 'TouchableOpacityProps' para assim também ter herdado as 
propriedades e se criar um novo parametro title que também vai ser enviado como uma props que vai ser adicionado ao botão de
forma dinamica
*/
interface ButtonProps extends TouchableOpacityProps{
    title: string
}

export function Button({ title, ...rest } : ButtonProps) {
 return (
    <TouchableOpacity 
    style={styles.button}
    {...rest}
    >
        <Text style={styles.buttonText}>{ title }</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#A370F7',
        padding: 12,
        borderRadius: 7,
        alignItems:'center',
        marginTop: 20
    },
    buttonText:{
        color: '#FFF',
        fontSize:17,
        fontWeight:'bold'
    },
})