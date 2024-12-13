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
import {Button} from "@components/Button";
import {Input} from "@components/Input";

import {useNavigation} from "@react-navigation/native";

import {useForm, Controller} from "react-hook-form"
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup'

type FormDataForms = {
	name: string;
	email: string;
	password: string;
	password_confirm: string;
}

// Validação dos dados do formulário, utilizando o Yup.
const signUpSchema = yup.object({
	name: yup.string().required("Informe o nome"),
	email: yup.string().required("Informe o email").email("E-mail inválido"),
	password: yup.string().required("Informe a senha").min(6, "A senha deve ter pelo menos 6 dígitos."),
	password_confirm: yup.string().required("Informe a senha").oneOf([yup.ref("password"), ""], "As senhas são diferentes."),
})

export default function SignUp() {
	// Navegação
	const navigation = useNavigation();

	// Formulário: Controle do formulário com React Hook Form.
	const {control, handleSubmit, formState: {errors}} = useForm<FormDataForms>({
		resolver: yupResolver(signUpSchema),
	});

	// Volta para a tela anterior.
	function handleGoBack() {
		navigation.goBack();
	}

	// Enviado os dados para a API.
	function handleSingUp(data: FormDataForms) {
		console.log(data);
	}

	return (
		<ScrollView
			contentContainerStyle={{flexGrow: 1}}
			showsHorizontalScrollIndicator={false}
		>
			<VStack flex={1} alignItems="center">
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
						<Logo/>
						<Text color="$gray100">Treine seu corpo e sua mente.</Text>
					</Center>

					<Center gap={"$2"}>
						<Heading color="$gray100" pb="$3">
							Crie sua conta
						</Heading>

						<Controller
							control={control}
							name={"name"}
							render={({field: {onChange, value}}) => (
								<Input
									placeholder="Nome"
									onChangeText={onChange}
									value={value}
									errorMessage={errors.name?.message}
								/>
							)}
						/>

						<Controller
							control={control}
							name={"email"}
							render={({field: {onChange, value}}) => (
								<Input
									placeholder="E-mail"
									keyboardType="email-address"
									autoCapitalize="none"
									onChangeText={onChange}
									value={value}
									errorMessage={errors.email?.message}
								/>
							)}
						/>

						<Controller
							control={control}
							name={"password"}
							render={({field: {onChange, value}}) => (
								<Input
									placeholder="Senha"
									autoCapitalize="none"
									secureTextEntry
									onChangeText={onChange}
									value={value}
									errorMessage={errors.password?.message}
								/>
							)}
						/>

						<Controller
							control={control}
							name={"password_confirm"}
							render={({field: {onChange, value}}) => (
								<Input
									placeholder="Confirme a senha"
									autoCapitalize="none"
									secureTextEntry
									onChangeText={onChange}
									value={value}
									onSubmitEditing={handleSubmit(handleSingUp)}
									returnKeyType={"send"}
									errorMessage={errors.password_confirm?.message}
								/>
							)}
						/>


						<Button
							title="Criar e acessar"
							onPress={handleSubmit(handleSingUp)}
						/>
					</Center>

					<Center flex={1} justifyContent="flex-end" mt="$4">
						<Button
							title="Voltar para o login"
							variant="outline"
							onPress={handleGoBack}
						/>
					</Center>
				</VStack>
			</VStack>
		</ScrollView>
	);
}
