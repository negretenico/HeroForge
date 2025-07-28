import React, { ComponentProps, PropsWithChildren } from "react";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import NativePage from "@/components/containers/NativePage";
import Pill from "../Pill";
import { TouchableOpacity, Text } from "react-native";
import { ThemedView } from "../ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
type FormProps = Pick<
  ComponentProps<typeof Formik>,
  "initialValues" | "validationSchema" | "onSubmit"
> &
  PropsWithChildren;
export default function FormPage(props: FormProps) {
  const { children, ...rest } = props;
  const textColor = useThemeColor({}, "text");

  return (
    <NativePage>
      <Formik {...rest}>
        {({ handleSubmit }: any) => (
          <>
            {children}

            <Pill>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={{ color: textColor, fontWeight: "bold" }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </Pill>
          </>
        )}
      </Formik>
    </NativePage>
  );
}
