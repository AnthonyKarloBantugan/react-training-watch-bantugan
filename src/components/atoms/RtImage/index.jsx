import { Image } from "@chakra-ui/react";

const RtImage = ({ url, alt }) => {
	return <Image src={url} alt={alt} />;
};

export default RtImage;
