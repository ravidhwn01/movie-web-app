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
import { useMutation, useQuery, useQueryClient } from "react-query";
import { markWatchedMovie } from "../apiinstance/getMovies";
import {
  MovieInterface,
  Result,
  WatchListItem,
} from "../schemas/movies.schema";
interface MovieProps {
  movie: WatchListItem;
}
function WatchlistBox(props: MovieProps) {
  const queryClient = useQueryClient();
  const {
    movie: { title, overview, imgUrl, isWatched, id },
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const markWatchedHandle = async () => {
    markWatchedMutation.mutate(id);
    // markWatchedMutation.mutate();
  };

  const markWatchedMutation = useMutation(markWatchedMovie, {
    onSettled: () => {
      onClose();
    },
  });

  return (
    <>
      <Box>
        <Image marginLeft="140px" src={imgUrl} alt="" />
      </Box>

      <Button
        marginBottom={3}
        mt={4}
        marginLeft="170px"
        width="50%"
        onClick={onOpen}
      >
        more details
      </Button>
      <form>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            <Image
              src={imgUrl}
              width={100}
              marginLeft="150px"
              alt="loading..."
            />
            <ModalBody>{overview}</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              {!isWatched && (
                <Button type="submit" onClick={markWatchedHandle}>
                  ✅
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
}

export default WatchlistBox;
