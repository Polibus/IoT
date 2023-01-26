import {Text, View} from "react-native";
import React from 'react';

const Device = ({item}) => {
    const {id, place} = item;
    return (
        <View style={{flex: 2, justifyContent: "space-around", padding: 20, backgroundColor: "white", width: "90%", alignSelf: "center", marginTop: 20,  borderWidth: 1, }}>
            <Text style={{fontSize: 25, fontFamily: "ChivoMono-Italic-VariableFont_wght", color: "black" }}>{id}</Text>
            <Text style={{fontSize: 16, fontFamily: "Caveat-Bold", color: "black" }}>{place}</Text>
        </View>
    )
}
export default Device;