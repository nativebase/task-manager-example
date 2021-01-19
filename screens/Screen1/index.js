import React from 'react';
import { SafeAreaView, Dimensions } from 'react-native';

import {
    Box,
    HStack,
    Text,
    VStack,
} from "native-base";

import TopHeader from "./TopHeader";
import Content from "./Content";


export default function Index() {
    return (
        <SafeAreaView>
            <VStack minHeight={'100%'} p={2} pt={3} bg={"bg.100"}>
                <TopHeader />
                <Content />

            </VStack>
        </SafeAreaView>
    );
}