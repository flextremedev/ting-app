import glamorous from 'glamorous-native';
import { Content, NativeBase } from 'native-base';
import { brandBlue, white } from '../../StyleGuide';

type Props = {
    blue?: boolean;
} & NativeBase.Content;

export const Container = glamorous(Content)<Props>(({ blue }) => ({
    backgroundColor: blue ? brandBlue : white,
}));
