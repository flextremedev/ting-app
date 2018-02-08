import * as React from 'react';
import glamorous from 'glamorous-native';

export const Logo = () => (
    <StyledLogo
        source={require('../assets/ting_300x200.png')}
        resizeMode="contain"
    />
);

const StyledLogo = glamorous.image({
    width: 240,
    marginTop: 48,
    marginBottom: '20%',
    alignSelf: 'center',
});
