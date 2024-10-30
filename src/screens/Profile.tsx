import React from 'react';
import { Center, Heading, Text, VStack } from '@gluestack-ui/themed'
import ScreenHeader from '@components/ScreenHeader';
import { ScrollView, TouchableOpacity } from 'react-native';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import Button from '@components/Button';

export function Profile() {
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
              uri: 'https:github.com/douglasbertelli.png'
            }}
            alt='Foto de perfil do usuário'
            size='lg'
          />

          <TouchableOpacity>
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

            <Button title='Atualizar'/>
          </Center>

        </Center>

      </ScrollView>
    </VStack>
  );
}
