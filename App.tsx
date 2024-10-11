import {StatusBar} from 'react-native'

import {GluestackUIProvider, Text, View, Center} from "@gluestack-ui/themed";
import {config} from "./config/gluestack-ui.config"

import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import Loading from "@components/Loading";
import SignIn from "@screens/SignIn";

export default function App() {

	/* Carregando as fontes */
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold
	})

	return (
		<GluestackUIProvider config={config}>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>

			{
				fontsLoaded ? (
					/*<Center flex={1} bg="$gray700">
						<Text color='$white'>
							Construindo app com react native...
						</Text>
					</Center>*/

					<SignIn/>

				) : (
					<Loading/>
				)
			}
		</GluestackUIProvider>
	);
}

