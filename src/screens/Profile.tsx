import React, { useState } from 'react';
import ScreenHeader from '@components/ScreenHeader';

import { Center, Heading, Text, VStack } from '@gluestack-ui/themed'
import { ScrollView, TouchableOpacity } from 'react-native';

import { Button } from '@components/Button';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';

import * as ImagePicker from 'expo-image-picker'

export function Profile() {
  const [userPhoto, setUserPhoto] = useState('https:github.com/douglasbertelli.png')

  async function handleUserPhotoSelect() {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      /* Tipo de arquivo */
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      /* Qualidade da imagem */
      quality: 1,
      /* Enquadramento */
      aspect: [4,4],
      /* Pré Editor de imagem */
      allowsEditing: true,
    })

    /* Se o usuário cancelar a seleção da imagem, mata a função aqui. */
    if(photoSelected.canceled) {
      return
    }

    /* Enviando para o estado a imagem que foi selecionada. */
    setUserPhoto(photoSelected.assets[0].uri)

  }

  return (
    <VStack flex={1}>
      <ScreenHeader
        title='Profile'
      />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 36
        }}
      >

        <Center mt={'$6'} px={'$6'}>
          <UserPhoto
            source={{
              uri: userPhoto
            }}
            alt='Foto de perfil do usuário'
            size='lg'
          />

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text color='$green500' fontFamily='$heading' fontSize={'$md'} mt={'$2'} mb={'$8'}>Alterar foto</Text>
          </TouchableOpacity>

          <Center gap={'$3'} width={'$full'}>
            <Input
              placeholder='Nome'
              bgColor='$gray600'
            />
            <Input
              value='douglasbertellioliveira@gmail.com'
              bgColor='$gray600'
              isReadOnly
            />
          </Center>

          <Heading alignSelf='flex-start' fontFamily='$heading' color='$gray200' mt={'$12'} mb={'$2'}>
            Alterar senha
          </Heading>

          <Center width={'$full'} gap={'$4'}>
            <Input
              placeholder='Senha antiga'
              bgColor='$gray600'
              secureTextEntry
            />

            <Input
              placeholder='Senha nova'
              bgColor='$gray600'
              secureTextEntry
            />

            <Input
              placeholder='Confirme a nova senha'
              bgColor='$gray600'
              secureTextEntry
            />

            <Button title='Atualizar' />
          </Center>

        </Center>

      </ScrollView>
    </VStack>
  );
}
