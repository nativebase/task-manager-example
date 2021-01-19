import React from 'react';
import { Box } from "native-base";

import ContentHeader from './contentheader';
import Member from './Member';
import Time from './Time';
import Paragraph from './Paragraph';

export default function Content() {
    return (
        <Box
            border={'#333166'}
            bg={'#202129'}
            minHeight={600}
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