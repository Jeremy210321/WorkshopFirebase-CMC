import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Button, FAB, Text } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons';
import { ItemContact } from './ItemContact';
import { getContacts } from '../services/ContactsServices';
import { YellowBox } from 'react-native-web';

export const ContactsScreen = ({ navigation }) => {
    const [visible, setVisible] = React.useState(true);
    const [contacts, setContacts] = React.useState([]);
    
    const refreshScreen = (contactsRetrieved) => {
        setContacts(contactsRetrieved);
    }

    getContacts(refreshScreen);
    return (

        <View style={styles.container}>
            <Text h3 style={{marginBottom:15}}>LISTA DE CONTACTOS</Text>
            <Button title="Consultar" onPress={() => {
                getContacts(refreshScreen);
            }}
            buttonStyle={{ backgroundColor: 'rgba(127, 220, 103, 1)' , borderRadius:20}} />
            {/* <Text>size: {contacts.length}</Text> */}
            <View style={{marginTop:15}}>

                <FlatList
                    data={contacts}
                    renderItem={({ item }) => {
                        return (
                            <ItemContact contact={item} refreshFn={refreshScreen} />

                        );
                    }}
                />
            </View>
            <FAB
                visible={visible}
                icon={{ name: 'add', color: 'white' }}
                color="green"
                placement='right'
                onPress={() => {
                    navigation.navigate("ContactForm", { refreshFn: refreshScreen });
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 90
    },
});
