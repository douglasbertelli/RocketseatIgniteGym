import React from "react";
import { Text, Heading, HStack, VStack, Icon } from "@gluestack-ui/themed";
import { LogOut } from "lucide-react-native";

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="$gray500" pt="$12" pb="$4" px="$4" alignItems="center" gap="$2" justifyContent="space-between">
      <UserPhoto
        source={{ uri: "https://github.com/douglasbertelli.png" }}
        alt="Imagem do usuário"
        w="$16"
        h="$16"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize={"$sm"}>
          Olá,
        </Text>
        <Heading color="$gray100" fontSize={"$md"}>
          Douglas B. Oliveira
        </Heading>
      </VStack>

      <Icon as={LogOut} color="$gray200" size="xl"/>
    </HStack>
  );
}
