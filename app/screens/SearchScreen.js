import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { Button, SearchBar, Text } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getContacts, searchUser } from '../services/ContactsServices';
import { ItemContactSearch } from './ItemContactSearch';

export const SearchScreen = () => {
    const [contacts, setContacts] = React.useState([]);
    const [text, setText] = React.useState(null);
    const refreshScreen = (contactsRetrieved) => {
        setContacts(contactsRetrieved);
    }
    getContacts(refreshScreen);
    return (
        <View style={styles.container}>
            <Text h3 style={{ marginBottom: 15 }}>LISTA DE CONTACTOS</Text>
            <View style={{ marginTop: 15 }}>
                <SearchBar placeholder="Ingrese datos"
                    containerStyle={styles.searchBar}
                    inputContainerStyle={{ backgroundColor: 'white' }}
                    value={text}
                    onChangeText={setText}
                />
                <Button title="Buscar"
                    onPress={() => {
                        searchUser(text)
                    }
                    }

                />

            </View>
            <ScrollView style={{marginTop: 15 }}>
                    <FlatList
                        data={contacts}
                        renderItem={({ item }) => {
                            return (
                                <ItemContactSearch contact={item} />

                            );
                        }}
                    />

                </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingTop: 50,
        paddingHorizontal: 30
    }, searchBar: {
        backgroundColor: 'white', borderWidth: 1, borderRadius: 5, marginBottom: 25
    }
});