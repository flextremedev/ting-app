import * as React from 'react';
import glamorous from 'glamorous-native';
import { ListItem, Text, NativeBase, Icon, Right, Body } from 'native-base';
import { TouchableOpacity, TouchableOpacityProperties } from 'react-native';
type Props = { content: string; touchable?: boolean } & NativeBase.ListItem;

export class ListEntry extends React.Component<Props> {
    render() {
        const { content, touchable, ...props } = this.props;
        return touchable ? (
            <ListItem icon {...props}>
                <Body>
                    <Text>{content}</Text>
                </Body>

                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        ) : (
            <ListItem {...props}>
                <Text>{content}</Text>
            </ListItem>
        );
    }
}
