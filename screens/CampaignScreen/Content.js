import React from 'react';
import { Box } from "native-base";
import { Dimensions, Platform } from 'react-native';

import ContentHeader from './contentheader';
import Member from './Member';
import Time from './Time';
import Paragraph from './Paragraph';

const DEVICE_HEIGHT = Dimensions.get('screen').height

export default function Content() {
    return (
        <Box
            border={'#333166'}
            bg={'bg.500'}
            minHeight={Platform.OS === 'ios' ? DEVICE_HEIGHT - 300 : DEVICE_HEIGHT - 230}
            flex={1}
            mt={5}
            borderRadius={10}
            p={5}
        >
            <ContentHeader />
            <Member />
            <Time />
            <Paragraph />
        </Box >
    );
}