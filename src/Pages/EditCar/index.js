import React, { useState, useEffect } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import api from '../../services/api';


function EditCar({ route, navigation }) {

    const { id } = route.params != null ? route.params : '';
    const { isEditable } = route.params || false;
    console.log(id);




    const [title, setTitle] = useState();
    const [brand, setBrand] = useState();
    const [price, setPrice] = useState();
    const [year, setYear] = useState(0);

    const getCarData = async () => {
        const res = await api.get(`cars/${id}`);
        console.log(res.data);
        setYear(res.data.age);
        setTitle(res.data.title);
        setBrand(res.data.brand);
        setPrice(res.data.price);

    }

    useEffect(() => {
        if (id == "") {
            console.log(false);
        } else {
            console.log(true)
            getCarData();
        }


    }, [id])

    const handleEditar = async () => {
        const res = await api.put(`/cars/${id}`, {
            title: title,
            price: price,
            age: year,
            brand: brand
        });
        navigation.goBack();
        console.log(res.data);
        Keyboard.dismiss();
    }


    const handleCadastrar = async () => {
        const res = await api.post('/cars', {
            title: title,
            price: price,
            age: year,
            brand: brand
        });
        navigation.goBack();
        console.log(res.data);
        Keyboard.dismiss();
    }

    return (
        <View>
            <View>
                <TextInput
                    placeholder="Tipo do carro"
                    value={title}
                    onChangeText={
                        (v) => setTitle(v)
                    }
                    label="Tipo" />
                <TextInput
                    onChangeText={
                        (v) => setBrand(v)
                    }
                    placeholder="Marca do carro"
                    value={brand}
                    label="Marca" />
                <TextInput
                    onChangeText={
                        (v) => setYear(v)
                    }
                    placeholder="Ano do carro"
                    value={year.toString()}
                    keyboardType={'number-pad'}

                    label="Ano" />
                <TextInput
                    onChangeText={
                        (v) => setPrice(v)
                    }
                    placeholder="valor do carro"
                    value={price}
                    keyboardType={'number-pad'}
                    label="Valor" />
            </View>
            {isEditable ?

                <Button onPress={handleEditar} style={{ margin: 20, backgroundColor: "rgb(6, 160, 12)" }} >
                    <Text style={{ color: "#fff" }}>Cadastrar </Text>
                </Button>
                :
                <Button onPress={handleCadastrar} style={{ margin: 20, backgroundColor: "#2B559B" }} >
                    <Text style={{ color: "#fff" }}> Editar</Text>
                </Button>
            }
        </View>
    );
}

export default EditCar;