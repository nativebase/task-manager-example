import React from 'react';
import {
    HStack,
    Icon,
    Text,
} from "native-base";

const HEADER_TEXT = 'Calender';

export default function TopHeader({ navigation }) {
    return (
        <HStack
            alignItems={"center"}
            pb={10}
            justifyContent={"space-between"}
        >
            <Icon type="AntDesign"
                name="arrowleft"
                color="white"
                size={8}
            />
            <Text width="100%"
                fontSize={20}
                fontWeight={'bold'}
                color="white"
            >
                {HEADER_TEXT}
            </Text>
            <Text width="100%"
                fontSize={20}
                fontWeight={'bold'}
                color="white"
            >
            </Text>
        </HStack>
    );
}