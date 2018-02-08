import glamorous from 'glamorous-native';
import { Button as NativeButton, NativeBase, Text } from 'native-base';
import { brandGreen } from '../../StyleGuide';
import * as React from 'react';
type Props = {
    name: string;
} & NativeBase.Button;

const ButtonContainer = glamorous(NativeButton)({
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
});

export const LightButton = ({ name, ...props }: Props) => {
    return (
        <ButtonContainer {...props}>
            <Text style={{ fontSize: 14 }}>{name}</Text>
        </ButtonContainer>
    );
};
