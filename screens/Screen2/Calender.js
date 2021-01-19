import React from 'react';

import {
    Box,
    HStack,
    Text,
} from "native-base";

import { CALENDER_LIST } from "../../utils/screen2/calender";

export default function Calender() {
    return (
        <HStack space={2} pb={10}>
            {
                CALENDER_LIST.map(item => (
                    <Box key={item.date} bg={item.isSelected ? "#6B63FF" : "bg.200"}
                        borderRadius={10}
                        shadow={1}
                        h={70} w={70}
                        justifyContent={'center'}
                        alignItems={'center'}
                        color="white"
                        fontWeight={'bold'}
                    >
                        <Text>{item.day}</Text>
                        <Text fontSize={20}>{item.date}</Text>
                    </Box>
                ))
            }
        </HStack>
    );
}