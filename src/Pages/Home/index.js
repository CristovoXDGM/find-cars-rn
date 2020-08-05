import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CardCard from '../../components/CardCard';
import { FAB } from 'react-native-paper';
import api from '../../services/api';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { Container } from './styles';

function Home({ navigation }) {
    const [cars, setCars] = useState();

    const deleteData = async (id) => {
        const res = await api.delete(`cars/${id}`);
    }

    const getData = async () => {
        const result = await api.get("cars");
        // console.log(result.data);
        setCars(result.data);
    }

    useEffect(() => {
        getData();
        // console.log(cars);
    }, [cars]);

    return (

        <SafeAreaView style={styles.container}>

            <FlatList data={cars} renderItem={(renderItem) =>
                <CardCard
                    ano={renderItem.item.age}
                    valor={renderItem.item.price}
                    tipo={renderItem.item.title}
                    marca={renderItem.item.brand}
                    onPres={() => { navigation.push('Edit', { id: renderItem.item._id, isEditable: true }) }}
                    onPressDelete={() => { deleteData(renderItem.item._id) }}
                />}
                keyExtractor={item => item._id} />
            <FAB
                style={styles.fab}
                small
                icon="plus"
                onPress={() => navigation.push('Edit')}
            />
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3E8EF',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: "column",

    },
    fab: {
        position: 'absolute',
        backgroundColor: "#2B559B",
        margin: 18,
        right: 0,
        bottom: 0,
    },
});