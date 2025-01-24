import {
  Text as NativeText,
  type TextProps as NativeTextProps,
} from "react-native";

import { StyleSheet, type UnistylesVariants } from "react-native-unistyles";

type CommonProps = UnistylesVariants<typeof styles>;

export type TextProps = NativeTextProps & CommonProps;

export function Text({ style, size = "md", ...rest }: TextProps) {
  styles.useVariants({ size });

  return <NativeText style={[styles.text, style]} {...rest} />;
}

const styles = StyleSheet.create({
  text: {
    color: "gray",
    variants: {
      size: {
        lg: {
          fontSize: 24,
        },
        md: {
          fontSize: 16,
        },
        sm: {
          fontSize: 12,
        },
      },
    },
  },
});
