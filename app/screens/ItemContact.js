import { StyleSheet, Text, View } from 'react-native';
import { ListItemProps, ListItem, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { deleteContact, getContacts } from '../services/ContactsServices';
import React from 'react';
export const ItemContact = ({ contact, refreshFn }) => {
    const [selected, isSelected] = React.useState(false);
    const navigation = useNavigation();
    return (
        <ListItem containerStyle={styles.contactStyle} bottomDivider>
            <Icon name='user' type='entypo' size={30} />
            <ListItem.Content style={{ flexDirection: 'column' }}>
                <ListItem.Title>{contact.name} {contact.lastname}</ListItem.Title>
                <ListItem.Subtitle>{contact.id}</ListItem.Subtitle>

            </ListItem.Content>

            <Icon
                name='edit'
                type='ant-design'
                color='black'
                onPress={() => {
                    navigation.navigate("ContactForm", { contactSelected: contact, refreshFn: refreshFn });
                    isSelected(true);
                    // console.log("Selected:",contact)
                }}
            />
            <Icon
                name='delete'
                type='ant-design'
                color='red'
                onPress={() => {
                    deleteContact(contact);
                    getContacts(refreshFn);
                }}
            />



        </ListItem>
    );
};

const styles = StyleSheet.create({
    contactStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#BBD9D5',
        justifyContent: 'center',
        minWidth: 350,
        maxHeight: 70,
        marginBottom: 5,
        alignItems: 'stretch'
    }, button: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 10
    }
})