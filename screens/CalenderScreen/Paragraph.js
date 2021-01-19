import React from 'react';
import { VStack, Text, Box, Icon } from "native-base";

export default function Paragraph() {
    return (
        <VStack>
            <Text color={'white'} fontSize={18} pb={5}>
                There are many benefits to a joint design and development system.
                Not only does it bring benefits to the design team, but it also
                brings benefits to engineering teams.
            </Text>
            <Text color={'white'} fontSize={18} pb={5}>
                It makes sure that our
                experiences have a consistent look and feel, not just in our design
                specs, but in production
            </Text>
            <Box alignItems={'flex-end'} >
                <Icon type="Ionicons"
                    name="add-circle-sharp"
                    color="#6B63FF"
                    size={12}
                />
            </Box>
        </VStack>
    );
}