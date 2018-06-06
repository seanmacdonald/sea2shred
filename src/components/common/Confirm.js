import React from 'react'; 
import { Text, View, Modal } from 'react-native'; 
import { CardSection } from './CardSection';
import { Button } from './Button'; 

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { containerStyle, textStyle, cardSectionStyle } = styles; 

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    {/*Note that by not adding () onto the end of onAccept
                    we are not calling the method right away. Rather, we are 
                    passing a refference to the method because we are telling 
                    another part of the program that it may want to call this
                    method. Also note that we did not need to bind this method, 
                    we just want to simply call the function..*/}
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1, 
        fontSize: 18,
        textAlign: 'center', 
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1, 
        justifyContent: 'center'


    }
};

export { Confirm }; 
