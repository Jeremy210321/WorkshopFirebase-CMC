import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, FAB, Input, Text } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import { getContacts, saveContact } from '../services/ContactsServices';

export const ContactFormScreen = ({ route ,navigation}) => {
    let contactSelected=null;
    const [selected,isSelected] = React.useState(false);
    let selectedContact=true;
    let refreshFn=null;
    console.log("route params",route.params)
    if (route != null && route.params != null && route.params.contactSelected != null) {
        contactSelected = route.params.contactSelected;
    }else{
        contactSelected ={id:null,name:null,lastname:null,phone:null}
        
    }
    refreshFn = route.params.refreshFn;
    const [id, setId] = React.useState(contactSelected.id);
    const [name, setName] = React.useState(contactSelected.name);
    const [lastname, setLastname] = React.useState(contactSelected.lastname);
    const [phoneNumber, setPhoneNumber] = React.useState(contactSelected.phone);

    return (
        <View style={styles.container}>
            <Text h3> Información del contacto</Text>
            <Input
                value={id}
                onChangeText={setId}
                label="Cédula"
                placeholder="Ingrese la cédula"
                keyboardType='number-pad'
                editable={!selected}
            />
            <Input
                value={name}
                onChangeText={setName}
                label="Nombre"
                placeholder="Ingrese el nombre"
            />
            <Input
                value={lastname}
                onChangeText={setLastname}
                label="Apellido"
                placeholder="Ingrese el apellido"
            />
            <Input
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                label="Teléfono"
                placeholder="Ingrese el teléfono"
                keyboardType='phone-pad'
            />
            <Button title="Guardar" onPress={() => {
                let contact = {
                    id: id,
                    name: name,
                    lastname: lastname,
                    phone: phoneNumber,

                }
                saveContact(contact);
                getContacts(refreshFn);
                navigation.goBack();
            }} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'

    },
});
