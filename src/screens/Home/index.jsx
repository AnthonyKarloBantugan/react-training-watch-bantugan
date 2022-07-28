import { Box, Container, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Card from "../../components/molecules/Card";
import Navbar from "../../components/molecules/Navbar";

const Home = ({ products }) => {
	return (
		<Box minH="100vh">
			<Navbar />
			<Container>
				<Text fontSize="2.25rem" fontWeight="700">
					Find your suitable watch now
				</Text>
				<Grid
					templateColumns="repeat(2, 1fr)"
					gap="20px"
					paddingBlock="10px"
				>
					{products.map((product) => (
						<Card
							name={product.name}
							url={product.imgUrl}
							subtitle={product.series}
							price={product.price}
							bgColor={product.bgColor}
							id={product.id}
							key={product.id}
						/>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Home;
