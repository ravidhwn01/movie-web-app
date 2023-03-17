import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Result } from "../schemas/movies.schema";
interface MovieProps {
  movie: Result;
}
function MovieBox(props: MovieProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const {
    movie: { poster_path, title, overview },
  } = props;

  return (
    <>
      <Box>
        <Image
          marginLeft="140px"
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt=""
        />
      </Box>

      <Button
        marginBottom={3}
        mt={4}
        marginLeft="140px"
        width="50%"
        onClick={onOpen}
      >
        more details
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <Image
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            width={100}
            marginLeft="150px"
            alt="loading..."
          />
          <ModalBody>{overview}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Add to watchlist</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MovieBox;
