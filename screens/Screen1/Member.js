import React from 'react';
import {
    VStack,
    HStack,
    Text,
    Avatar,
    AvatarGroup,
} from "native-base";

import { MEMBER } from "../../utils/screen1/member";

export default function Member() {
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