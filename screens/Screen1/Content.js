import React from 'react';
import { Dimensions } from 'react-native';

import {
    Box
} from "native-base";

const SCREEEN_HEIGHT = Dimensions.get('screen').height

export default function Content() {
    return (
        <Box
            border={'#333166'}
            h={550}
            borderRadius={5}
        >
        </Box>
    );
}