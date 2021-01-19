import React from 'react';
import { SafeAreaView } from 'react-native';

import { VStack } from "native-base";

import TopHeader from "./TopHeader";
import Calender from "./Calender";
import Member from "./Member";
import Content from "./Content";

export default function Index() {
    return (
        <SafeAreaView>
            <VStack minHeight={'100%'} p={2} pt={3} bg={"bg.100"}>
                <TopHeader />
                <Calender />
                <Member />
                <Content />
            </VStack>
        </SafeAreaView>
    );
}