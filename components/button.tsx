import {
  Pressable,
  type PressableProps,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";

import { Text } from "./text";

type CommonProps = UnistylesVariants<typeof styles>;

export type ButtonProps = Omit<PressableProps, "style" | "children"> &
  CommonProps & {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
  };

export function Button({ style, disabled, children, ...rest }: ButtonProps) {
  styles.useVariants({
    disabled,
  });

  return (
    <Pressable style={[styles.button, style]} disabled={disabled} {...rest}>
      <Text size="lg" style={styles.buttonLabel}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    backgroundColor: "green",
    padding: 4,
    variants: {
      disabled: {
        true: {
          backgroundColor: "yellow",
        },
      },
    },
  },
  buttonLabel: {
    color: "white",
    variants: {
      disabled: {
        true: {
          color: "black",
        },
      },
    },
  },
});
