import {VStack, Text, Image, Center} from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"

export default function SignIn() {
	return (
		<VStack flex={1} bg={'$gray700'} alignItems="center">
			<Image
				w={"$full"}
				h={624}
				source={BackgroundImg}
				defaultSource={BackgroundImg}
				alt={'Pessoas treinando'}
				position={'absolute'}
			/>
			<Center my={'$24'} gap={'$3'}>
				<Logo/>
				<Text>
					Olá mundo...
				</Text>
			</Center>
		</VStack>
	)
}
