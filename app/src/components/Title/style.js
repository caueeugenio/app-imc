import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    boxTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding:10,
    },
    textTitle: {
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    image: {
        width: 100, // largura da imagem
        height: 100, // altura da imagem
        resizeMode: 'cover', // modo de redimensionamento
    },
});

export default styles;