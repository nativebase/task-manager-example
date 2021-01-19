import React from 'react';
import { HStack, Icon, Text, Box } from "native-base";

const CONTENT_HEADER_TEXT = "Write Campaign brief"

export default function ContentHeader() {
    return (
        <HStack justifyContent={"space-between"} pb={10}>
            <HStack >
                <Box h={10} w={10} bg={'bg.200'} justifyContent={"center"} alignItems={'center'} borderRadius={5}>
                    <Icon type="Entypo"
                        name="calendar"
                        color="#BE64F9"
                        size={6}
                    />
                </Box>
                <Text color={"white"} fontSize={24} fontWeight={'700'} ml={2}>{CONTENT_HEADER_TEXT}</Text>
            </HStack>

            <Icon type="Entypo"
                name="dots-three-vertical"
                color="white"
                size={4}
            />
        </HStack>
    );
}