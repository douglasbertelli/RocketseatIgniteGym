import {
  VStack,
  Text,
  Image,
  Center,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import Button from "@components/Button";

export default function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
    >
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

          <Center gap={"$2"}>
            <Heading color="$gray100" pb="$3">Crie sua conta</Heading>
            <Input placeholder="Nome"/>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" autoCapitalize="none" secureTextEntry />
            <Input placeholder="Confirmar senha" autoCapitalize="none" secureTextEntry />
            <Button title="Criar e acessar" />
          </Center>

          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Button title="Voltar para o login" variant="outline" />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
