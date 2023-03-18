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
import React, { FC } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { MovieInterface, movieSchema, Result } from "../schemas/movies.schema";
import { useMutation, useQueryClient } from "react-query";
import { myWatchList } from "../apiinstance/getMovies";
interface MovieProps {
  movie: Result;
}
export const MovieBox: FC<MovieProps> = ({ movie }) => {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const { poster_path, title, overview } = movie;
  const onsubmitHandle = () => {
    console.log(movie);
    mutation.mutate({
      ...movie,
      imgUrl: `https://image.tmdb.org/t/p/w300/${poster_path}`,
      title: movie.title || movie.name,
    } as any);
  };
  const mutation = useMutation(myWatchList, {
    onSuccess: () => {
      onClose();
    },
  });
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
        marginLeft="170px"
        width="50%"
        onClick={onOpen}
        colorScheme="green"
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
              <Button type="submit" onClick={onsubmitHandle}>
                Add to watchlist
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
};

export default MovieBox;
