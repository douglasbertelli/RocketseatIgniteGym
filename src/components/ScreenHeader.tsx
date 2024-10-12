import { Heading, VStack, Center } from "@gluestack-ui/themed";
import HistoryCard from "./HistoryCard";

type Props = {
  title: string;
};

export default function ScreenHeader({ title }: Props) {
  return (
    <Center bg="$gray500" w={"$full"} pb={"$6"} pt={"$16"}>
      <Heading color="$gray100" fontSize={"$xl"}>
        {title}
      </Heading>
    </Center>
  );
}
