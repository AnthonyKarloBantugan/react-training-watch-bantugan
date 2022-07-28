import { Box, Container, Square } from "@chakra-ui/react";
import { HiOutlineMenuAlt1, HiSearch } from "react-icons/hi";
import Search from "../../forms/Search";
import RTIcon from "../../atoms/RtIcon";

const Navbar = () => {
	return (
		<Box>
			<Container
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				paddingBlock="20px"
			>
				<Square>
					<RTIcon icon={HiOutlineMenuAlt1} size="30" />
				</Square>
				<Box>
					<Search
						placeholder={`Search Product`}
						variant="outline"
						size="lg"
						width="auto"
						type="search"
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default Navbar;
