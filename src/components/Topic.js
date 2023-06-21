import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { WP, HP } from '../services';

const Topic = ({ name, style, onPress, source }) => {
    const [isClicked, setIsClicked] = useState(false);



    const handleButtonClick = () => {
        setIsClicked(prevState => !prevState);
        // Perform other actions when the button is clicked
    };

    const handleButton = () => {
        handleButtonClick(),
            onPress()
    }

    return (
        <TouchableOpacity style={[styles.main, style, { borderColor: isClicked ? '#6B39BD' : 'transparent' }]} onPress={() => handleButton()}>

            <View style={{
                width: WP('70'),
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
                marginHorizontal: 5


            }}>
                <View style={{
                    height: HP('5'),
                    width: WP('10'),
                    marginHorizontal: 10

                }}>
                    <Image
                        style={{
                            resizeMode: 'contain',
                            // flex: 1,

                            height: HP('5'),
                            width: WP('10'),
                            // marginHorizontal: 10
                        }}
                        source={source}
                    />
                </View>
                <Text style={{ color: 'grey', fontSize: 17, marginLeft: 5 }}>{name}</Text>
            </View>

        </TouchableOpacity>
    );
};

export default Topic;

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#FFf',
        borderRadius: 20,
        justifyContent: 'space-between',
        width: "95%",
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 1
        // paddingHorizontal: 20,

    },
    textContainer: {
        color: 'gray',
        fontSize: 20,
        fontWeight: '300',
        paddingVertical: 20,
    },
});
