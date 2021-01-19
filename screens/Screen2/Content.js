import React from 'react';
import { Dimensions, ScrollView } from 'react-native';

import {
    Box,
    VStack,
    Text,
    Icon,
    Progress
} from "native-base";

import { CONTENT_DATA } from "../../utils/screen2/content";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Content() {
    return (
        <ScrollView>
            <Box >
                <Box w={'100%'} justifyContent="space-between" flexDirection={'row'} flexWrap={'wrap'} >
                    {
                        CONTENT_DATA.map((item, idx) => (
                            <Box key={idx} bg="#302F2F" w={(SCREEN_WIDTH / 2) - 20} h={240} borderRadius={15} color={"white"} mb={10} p={3}>
                                <VStack>
                                    <Box bg={"bg.300"} w={10} mt={2} h={10} justifyContent={"center"} alignItems={'center'}
                                        borderRadius={5} mb={4} >
                                        <Icon type={item.iconType}
                                            name={item.iconName}
                                            color={item.iconColor}
                                            size={6}
                                        />
                                    </Box>
                                    <Box color={"white"} fontWeight={"bold"} fontSize={18} mb={10} >
                                        {item.des}
                                    </Box>
                                    <Text color={'white'} fontWeight={700} mb={2}>{item.indicatorValue}%</Text>
                                    <Progress
                                        size="lg"
                                        colorScheme="#39357A"
                                        mb={4}
                                        value={item.indicatorValue}
                                        rounded="50" />

                                </VStack>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </ScrollView >
    );
}