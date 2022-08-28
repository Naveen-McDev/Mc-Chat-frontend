import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../context/ChatProvider";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
    const { user, selectedChat, setSelectedChat } = ChatState();
  return <>{
    selectedChat ? (<></>) : (
        <Box display='flex' alignItems='center' justifyContent='center' h='100%'>
            <Text fontSize='3xl' pd={3} fontFamily='Work sans'>
                Click on the user to start chatting
            </Text>
        </Box>
    )
  }</>;
};

export default SingleChat;
