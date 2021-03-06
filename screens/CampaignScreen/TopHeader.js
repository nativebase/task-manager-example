import React from 'react';
import {
    HStack,
    Icon,
    Text,
} from "native-base";

const HEADER_TEXT = 'Write Campaign brief'

export default function TopHeader() {
    return (
        <HStack
            alignItems={"center"}
            justifyContent={"space-between"}
            height={50}
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