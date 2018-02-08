import glamorous from 'glamorous-native';
import { Input, Item, NativeBase } from 'native-base';
import { white, underlineGrey } from '../../StyleGuide';
import * as React from 'react';
type Props = NativeBase.Input;
const StyledItem = glamorous(Item)({
    width: 240,
    height: 33,
});

const StyledInput = glamorous(Input)({
    color: white,
});

export const Textbox = (props: Props) => {
    return (
        <StyledItem>
            <StyledInput placeholderTextColor={underlineGrey} {...props} />
        </StyledItem>
    );
};
