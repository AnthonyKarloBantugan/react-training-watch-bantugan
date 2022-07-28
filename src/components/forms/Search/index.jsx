import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import RTIcon from "../../atoms/RtIcon";

const Search = ({ placeholder, size, width, type, variant }) => {
	return (
		<InputGroup>
			<InputLeftElement
				pointerEvents="none"
				children={<RTIcon icon={FiSearch} size="30" />}
			/>
			<Input
				type={type}
				placeholder={placeholder}
				size={size}
				width={width}
				variant={variant}
				borderRadius="30px"
			/>
		</InputGroup>
	);
};

export default Search;
