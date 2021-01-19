import React from 'react';
import { HStack, Icon, Text } from "native-base";


export default function Time() {
    return (
        <HStack justifyContent={"space-between"} alignItems={'center'} pb={5}>
            <HStack alignItems={'center'} pb={10}>
                <Icon type="AntDesign"
                    name="clockcircleo"
                    color="white"
                    size={6}
                />
                <Text color={'white'} pl={3} fontWeight={600} fontSize={16}>09:00 - 12:00 AM</Text>
            </HStack>
            <HStack pb={10} alignItems={'center'}>
                <Icon type="Entypo"
                    name="calendar"
                    color="white"
                    size={6}
                />
                <Text color={'white'} pl={3} fontWeight={600} fontSize={16}>21 Nov 2020</Text>
            </HStack>
        </HStack>
    );
}