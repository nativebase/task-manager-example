import React from 'react';
import { VStack } from "native-base";
import { SafeAreaView } from 'react-native';

import TopHeader from "./TopHeader";
import Content from "./Content";

export default function Home() {
    return (
        <SafeAreaView>
            <VStack minHeight={'100%'} p={2} pt={3} bg={"#181822"}>
                <TopHeader />
                <Content />
            </VStack>
        </SafeAreaView>
    );
}