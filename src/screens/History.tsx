import React, { useState } from "react";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import ScreenHeader from "@components/ScreenHeader";
import HistoryCard from "@components/HistoryCard";
import { SectionList } from "react-native";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "30.08.24",
      data: ["Puxada Frontal", "Remada Unilateral"],
    },
    {
      title: "31.08.24",
      data: ["Puxada Frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section }) => (
          <Heading
            fontFamily="$heading"
            color="$gray200"
            fontSize={"$md"}
            mt={"$2"}
            mb="$3"
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 16 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text textAlign="center" color="$white">
            Não há exercicíos registrados no momento. Vamos fazer exercicíos
            hoje?
          </Text>
        )}
      />
    </VStack>
  );
}
