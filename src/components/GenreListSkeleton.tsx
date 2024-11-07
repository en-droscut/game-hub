import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <Skeleton height="32px" />
    </ListItem>
  );
};

export default GenreListSkeleton;
