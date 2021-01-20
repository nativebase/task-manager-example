import React from 'react';
import {
    VStack,
    HStack,
    Text,
    Avatar,
    AvatarGroup,
} from "native-base";

import { MEMBER } from "./dummyData/member";

export default function Member() {
    return (
        <VStack flex={2}>
            <Text color={"white"} fontWeight={'bold'} fontSize={16} pb={4}>Members</Text>
            <HStack alignItems={'center'} >
                <AvatarGroup size="lg"
                    position={'relative'}
                    max={4}
                    border={'none'}>
                    {
                        MEMBER.map((item, idx) => (
                            <Avatar
                                key={idx}
                                name={item.name}
                                source={{
                                    uri: item.uri
                                }}
                            />
                        ))
                    }
                </AvatarGroup>
            </HStack>
        </VStack>
    );
}