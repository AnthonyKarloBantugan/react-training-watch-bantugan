import { Box, Text, Image, Container } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Card = ({ name, url, subtitle, price, bgColor, id }) => {
	return (
		<Box
			maxW="100%"
			borderWidth="1px"
			borderRadius="14px"
			overflow="hidden"
			display="flex"
			flexDirection="column"
			as={Link}
			to={`/${id}`}
		>
			<Container flexGrow="1" padding="8px">
				<Box bg={bgColor} borderRadius="14px">
					<Image src={url} objectFit="cover" boxSize="200px" />
				</Box>
			</Container>
			<Container flexGrow="1">
				<Text fontWeight="600">{name}</Text>
				<Text color="#9095A6" fontSize="0.875rem">
					{subtitle}
				</Text>
				<Text
					color="#5B41FF"
					fontWeight="500"
					fontFamily="Poppins, sans-serif"
					padding="20px 0 5px 0"
				>
					${price}
				</Text>
			</Container>
		</Box>
	);
};

export default Card;
