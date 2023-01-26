import {Text,View,TouchableOpacity, Modal,StyleSheet,Pressable,TextInput,FlatList} from "react-native";
import React, {useEffect, useState} from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import Device from "./Device";
import AsyncStorage from '@react-native-async-storage/async-storage';


function Devices({}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [command, setCommand] = useState('');
    const [devices, setDevices] = useState([]);



    const addDevice = async () => {
        const device = {id: name, place: place}
        const updatedDevices = [...devices, device];
        setDevices(updatedDevices)
        setModalVisible(!modalVisible)
        return await AsyncStorage.setItem('devices', JSON.stringify(updatedDevices))



    }

    const findDevice = async () => {
       const result =  await AsyncStorage.getItem('devices');
       if(result !== null)
           setDevices((JSON).parse(result))


    }

    useEffect(() => {
        findDevice();
        }

    )

    return (

        <View style={{flex: 1, backgroundColor: "#eeeeee"}}>
            <View style={{flex:2, flexDirection: "column", justifyContent: "space-around"}}>
                <FlatList data={devices}
                          keyExtractor={item => item.id.toString()}
                          renderItem={({item}) => <Device item={item}/>}
                />
            </View>
            <View style={styles.positionPlus}>
                <TouchableOpacity style={styles.openModal} onPress={() => setModalVisible(!modalVisible)} >
                    <View >
                        <Icon name={'plus'} size={25} color={'black'}
                        />
                    </View>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>

                <View style={styles.modalView}>
                    <View style={styles.inputView}>

                        <TextInput
                            style={styles.textInputMargin}
                            placeholder="Name"
                            onChangeText={name => setName(name)}
                            defaultValue={name}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Place"
                            onChangeText={place => setPlace(place)}
                            defaultValue={place}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Command"
                            onChangeText={command => setCommand(command)}
                            defaultValue={command}
                        />
                        <View style={styles.buttonStyles}>
                        <Pressable
                            style={styles.pressableStyle}

                            onPress={() => setModalVisible(!modalVisible) }
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                            <Pressable
                                style={styles.pressableStyle}
                                onPress={() => addDevice()}
                            >
                                <Text style={styles.textStyle}>Save</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>

    );
}

const styles = StyleSheet.create({
    openModal: {
        backgroundColor: '#eeeeee',
        borderWidth: 1,
        borderRadius: 10,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center"
    },
    positionPlus: {
        flex: 1,
        justifyContent: 'center',
        alignItems:"center",
        marginTop: 250
    },
    modalView: {
        flex:1,
        backgroundColor: "#eeeeee"
    },
    inputView: {
        flex: 3,
        flexDirection: "column",
        width: "90%",
        alignSelf: "center",
        padding: 20
    },
    textInput: {
        height: 60,
        backgroundColor: "white",
        borderWidth: 1,
        marginBottom: 20, 
    },
    textInputMargin: {
        height: 60,
        backgroundColor: "white",
        marginBottom: 20,
        marginTop: 70,
        borderWidth: 1
    },
    buttonStyles: {
        flex: 1,
        justifyContent:"space-between",
        padding: 50, alignContent: "center",
        flexDirection: "row",
        fontFamily: "Caveat-VariableFont_wght",
        marginTop: 100,
        padding: 10
    },
    textStyle: {
        color: "black",
        textAlign: "center",
        fontSize: 25,
        fontFamily: "Caveat-VariableFont_wght"
    },
    pressableStyle: {
        width: 100,
        backgroundColor: "white",
        borderWidth: 1,
        height: 60,
        justifyContent: "space-around",
    }

});
export default Devices;