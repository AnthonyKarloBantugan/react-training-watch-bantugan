import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Box,
	Container,
	Text,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import RTIcon from "../../components/atoms/RtIcon";
import RtImage from "../../components/atoms/RtImage";
import RtButton from "../../components/atoms/RtButton";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
	const { productId } = useParams();
	const [product, setProduct] = useState({});
	const [added, setAdded] = useState(false);
	useEffect(() => {
		setProduct(products.filter((item) => item.id == productId));
	}, [products, productId]);

	function handleClick() {
		setAdded(!added);
	}

	return (
		product.length && (
			<Box minH="100vh">
				<Container paddingBlock="20px">
					<Box bg="#fbfbfe">
						<Container>
							<Link to="/">
								<RTIcon icon={AiOutlineArrowLeft} size="30" />
							</Link>
							<RtImage url={product[0].imgUrl} />
						</Container>
					</Box>
					<Box pt="20px">
						<Container>
							<Box display="flex">
								<Box flexGrow="1">
									<Text fontSize="20px" fontWeight="700">
										{product[0].name}
									</Text>
									<Text color="#9095A6" fontSize="12px">
										{product[0].series}
									</Text>
								</Box>
								<Box>
									<Text
										fontFamily="Poppins, sans-serif"
										fontSize="1.5rem"
										color="#5B41FF"
										fontWeight="500"
									>
										${product[0].price}
									</Text>
								</Box>
							</Box>

							<Box display="flex" paddingBlock="30px">
								<Tabs colorScheme="purple">
									<TabList>
										<Tab>Details</Tab>
										<Tab>Reviews</Tab>
									</TabList>
									<TabPanels>
										<TabPanel>
											<Text
												fontSize="14px"
												color="#9095A6"
												lineHeight="1.375rem"
												letterSpacing="1.2px"
											>
												{product[0].desc}
											</Text>
										</TabPanel>
										<TabPanel>
											<Text
												fontSize="14px"
												color="#9095A6"
												lineHeight="1.375rem"
												letterSpacing="1.2px"
											>
												Lorem ipsum dolor sit amet
												consectetur adipisicing elit.
												Obcaecati eum odio reprehenderit
												fuga, nostrum omnis harum autem
												nam nobis quia aliquam eaque
												atque ad aspernatur voluptates
												est, rem fugit commodi.
											</Text>
										</TabPanel>
									</TabPanels>
								</Tabs>
							</Box>

							<Box paddingTop="30px">
								{added ? (
									<RtButton event={handleClick}>
										Remove to Cart
									</RtButton>
								) : (
									<RtButton event={handleClick}>
										Add to Cart
									</RtButton>
								)}
							</Box>
						</Container>
					</Box>
				</Container>
			</Box>
		)
	);
};

export default ProductDetail;
