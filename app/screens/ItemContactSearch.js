import { StyleSheet, Text, View } from 'react-native';
import { ListItemProps, ListItem, Button, Icon } from 'react-native-elements';
import React from 'react';


export const ItemContactSearch = ({contact}) => {
    return (
        <ListItem containerStyle={styles.contactStyle} bottomDivider>
            <Icon name='user' type='entypo' size={30} />
            <ListItem.Content style={{ flexDirection: 'column' }}>
                <ListItem.Title>{contact.name} {contact.lastname}</ListItem.Title>
                <ListItem.Subtitle>{contact.id} | {contact.phone}</ListItem.Subtitle>

            </ListItem.Content>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    contactStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'lavender',
        justifyContent: 'center',
        minWidth: 350,
        maxHeight: 70,
        marginBottom: 5,
        alignItems: 'stretch'
    }
})