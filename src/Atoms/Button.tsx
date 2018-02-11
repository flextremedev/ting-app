import glamorous from 'glamorous-native';
import { Button as NativeButton, NativeBase, Text } from 'native-base';
import { brandGreen } from '../../StyleGuide';
import * as React from 'react';
type Props = {
    name: string;
} & NativeBase.Button;

const ButtonContainer = glamorous(NativeButton)({
    backgroundColor: brandGreen,
    width: 280,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
});

export const Button = ({ name, ...props }: Props) => {
    return (
        <ButtonContainer {...props}>
            <Text>{name}</Text>
        </ButtonContainer>
    );
};
