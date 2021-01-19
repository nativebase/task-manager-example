import React from 'react';
import {
    VStack,
    HStack,
    Text,
    Avatar,
    AvatarGroup,
    Box,
    Icon,
    View
} from "native-base";

import { MEMBER } from "../../utils/screen2/member";

export default function Calender() {
    return (
        <VStack pb={10}>
            <Text color={"white"} fontWeight={'bold'} fontSize={16} pb={4}>Members</Text>
            <HStack alignItems={'center'} >
                <AvatarGroup size="lg"
                    position={'relative'}
                    zIndex={999}
                    max={4}
                    border={'none'}>
                    {
                        MEMBER.map(item => (
                            <Avatar
                                key={item.uri}
                                name={item.name}
                                source={{
                                    uri: item.uri
                                }}
                            />
                        ))
                    }
                </AvatarGroup>

                {/* <Box position={'relative'}
                    left={-15}
                >
                    <Icon type="AntDesign"
                        name="pluscircleo"
                        color="#4A44A7"
                        size={16}
                        bg={'#39357A'}
                    />
                </Box> */}
            </HStack>
        </VStack>
    );
}