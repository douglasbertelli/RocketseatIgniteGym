import React, { useState } from "react";
import { FlatList, Heading, HStack, VStack, Text } from "@gluestack-ui/themed";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [exercises, setExercises] = useState([
    "Puxada Frontal",
    "Remada Curvada",
    "Remana Unilateral",
    "2",
    "4",
    "5",
  ]);
  const [groups, setGroups] = useState([
    "Costas",
    "Biceps",
    "Tríceps",
    "Ombro",
    "Perna",
  ]);
  const [groupSelected, setGroupSelected] = useState(groups[0]);

  /* Navegação entre telas:  */
  const navigation = useNavigation<AppNavigatorRoutesProps>()


  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        style={{ marginVertical: 30, minHeight: 44, maxHeight: 44 }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
      />

      <VStack flex={1} px="$4">
        <HStack justifyContent="space-between" mb="$5" alignItems="center">
          <Heading color="$gray200" fontSize={"$md"} fontFamily="$heading">
            Exercicíos
          </Heading>
          <Text color="$gray200" fontSize={"$sm"} fontFamily="$body">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={() => <ExerciseCard onPress={handleOpenExerciseDetails} />}
        />
      </VStack>
    </VStack>
  );
}
