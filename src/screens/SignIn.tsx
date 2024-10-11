import { VStack, Text, Image, Center, Heading } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import Button from "@components/Button";

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
          <Input placeholder="Senha" autoCapitalize="none" secureTextEntry />
          <Button title="Acessar" />
        </Center>

        <Center flex={1} justifyContent="flex-end" mt="$4">
          <Text color="$gray100" fontSize={"$sm"} mb="$3" fontFamily="$body">
            Ainda não tem acesso?
          </Text>

          <Button title="Criar conta" variant="outline"/>
        </Center>
      </VStack>
    </VStack>
  );
}
