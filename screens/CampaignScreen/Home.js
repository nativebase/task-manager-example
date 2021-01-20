import React from 'react';
import { VStack } from "native-base";
import { SafeAreaView } from 'react-native';

import TopHeader from "./TopHeader";
import Content from "./Content";

export default function Home() {
    return (
        <SafeAreaView flex={1}>
            <VStack
                flex={1}
                p={2} pt={3}
                bg={"bg.400"}
            >
                <TopHeader />
                <Content />
            </VStack>
        </SafeAreaView>
    );
}