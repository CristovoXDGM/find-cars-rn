import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Button, Image } from 'react-native';
import carIcon from '../../../assets/images/carIcon.png'
import { FAB } from 'react-native-paper';


function CardCard({ tipo, marca, ano, valor, onPres, onPressDelete }) {




    return (
        <View style={styles.container}>
            <View style={styles.headerCard}>
                <Text style={styles.editar}>Editar</Text>
                <Button style={styles.buttonEditar} title="Edit" onPress={onPres}> </Button>
                <Button style={styles.buttonEditar} title="Delete" onPress={onPressDelete}> </Button>
            </View>

            <View style={styles.areaInfoCar}>
                <Image source={carIcon} />
                <View style={styles.columnText}>
                    <Text style={styles.tipo}>Tipo: {tipo}</Text>
                    <Text style={styles.marca}>Marca: {marca}</Text>
                </View>

            </View>
            <View style={styles.divider} />
            <View style={styles.yearCost}>
                <Text style={styles.ano}>Ano: {ano}</Text>
                <Text style={styles.valor}>Valor: R$ {valor},00</Text>
            </View>

        </View>
    );
}

export default CardCard;

const styles = StyleSheet.create({

    columnText: {
        display: 'flex',
        flexDirection: "column",
        marginLeft: 40,
        justifyContent: "space-around"
    },
    headerCard: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        height: 30
    },
    yearCost: {
        marginTop: 15,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    buttonEditar: {
        marginLeft: 10
    },
    divider: {
        alignSelf: "center",
        justifyContent: "center",
        borderBottomColor: "#B0B0B0",
        borderBottomWidth: 1,
        width: Dimensions.get('screen').width / 1.2
    },
    areaInfoCar: {

        display: 'flex',
        flexDirection: "row",
        marginLeft: 20,

    },
    container: {
        marginVertical: 10,
        backgroundColor: '#fff',
        height: 170,
        padding: 20,
        shadowColor: "#000",
        width: Dimensions.get('window').width / 1.2,
        borderRadius: 12

    },
    editar: {
        color: "rgb(107, 107, 107)",
        fontSize: 12,
        textAlign: "center",
        marginTop: 10,
        marginRight: 20
    },
    valor: {
        color: "rgb(6, 160, 12)",
        fontSize: 14,
        fontWeight: "700",
    },
    ano: {
        color: "rgb(0, 0, 0)",
        fontSize: 12,
        fontWeight: "700",
    },
    marca: {
        color: "rgb(0, 0, 0)",
        fontSize: 12,
        fontWeight: "700",
        textAlign: "left",
    },
    tipo: {
        color: "rgb(0, 0, 0)",
        fontSize: 12,
        fontWeight: "700",
        textAlign: "left",
    }
});

