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
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { movieInterface, movieSchema, Result } from "../schemas/movies.schema";
import { useMutation, useQueryClient } from "react-query";
import { myWatchList } from "../apiinstance/getMovies";
interface MovieProps {
  movie: Result;
}
function MovieBox(props: MovieProps) {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm<movieInterface>({
    mode: "onChange",
    resolver: yupResolver(movieSchema),
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const {
    movie: { poster_path, title, overview },
  } = props;
  const onsubmitHandle = (data: movieInterface) => {
    console.log("data", data);
    mutation.mutate(data);
  };
  const mutation = useMutation(myWatchList, {
    onSuccess: () => {
      // queryClient.refetchQueries("moviewatchlistdata");
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
        marginLeft="200px"
        width="50%"
        onClick={onOpen}
      >
        more details
      </Button>
      <form>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader {...register("title")}>{title}</ModalHeader>
            <ModalCloseButton />
            <Image
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              width={100}
              marginLeft="150px"
              alt="loading..."
              {...register("imgurl")}
            />
            <ModalBody {...register("overview")}>{overview}</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type="submit" onClick={handleSubmit(onsubmitHandle)}>
                Add to watchlist
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
    </>
  );
}

export default MovieBox;
