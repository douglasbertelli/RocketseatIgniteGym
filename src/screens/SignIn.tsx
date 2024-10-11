import { VStack, Text, Image, Center, Heading } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";

export default function SignIn() {
  return (
    <VStack flex={1} bg={"$gray700"} alignItems="center">
      <Image
        w={"$full"}
        h={624}
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt={"Pessoas treinando"}
        position={"absolute"}
      />

      <VStack flex={1} padding={"$6"} pb={"$16"} w={"$full"}>
        <Center my={"$24"} gap={"$3"}>
          <Logo />
          <Text color="$gray100">Treine seu corpo e sua mente.</Text>
        </Center>

        <Center gap={"$3"}>
          <Heading color="$gray100">Acesse sua conta</Heading>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            placeholder="Senha"
            secureTextEntry
          />
        </Center>
      </VStack>
    </VStack>
  );
}
