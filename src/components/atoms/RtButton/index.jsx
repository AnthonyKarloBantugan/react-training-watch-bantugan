import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const RtButton = ({ children, event }) => {
	return (
		<Button
			w="100%"
			h="70px"
			colorScheme="purple"
			onClick={event}
			fontSize="1.25rem"
		>
			{children}
		</Button>
	);
};

export default RtButton;
