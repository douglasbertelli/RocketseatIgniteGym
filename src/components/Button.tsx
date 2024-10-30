import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof GluestackButton> & {
  title: string;
  variant?: "solid" | "outline";
  isLoading?: boolean;
};

export function Button({
  title,
  variant = "solid",
  isLoading = false,
  ...rest
}: Props) {
  return (
    <GluestackButton
      w={"$full"}
      h={"$14"}
      bg={variant === "outline" ? "transparent" : "$green700"}
      borderWidth={variant === "outline" ? "$1" : "$0"}
      borderColor="$green500"
      rounded={"$md"}
      $active-bg={variant === "outline" ? "$gray500" : "$green500"}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <Text color="$white" fontSize={"$md"} fontFamily="$heading">
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
