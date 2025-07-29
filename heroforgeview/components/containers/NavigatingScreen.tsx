import { useRouter } from "expo-router";
import { ComponentProps, PropsWithChildren } from "react";
import FormPage from "./FormPage";

export default function NavigationScreen(
  props: {
    route: Parameters<ReturnType<typeof useRouter>["push"]>[0];
  } & PropsWithChildren &
    Omit<ComponentProps<typeof FormPage>, "onSubmit">
) {
  const { route, children, ...rest } = props;
  const router = useRouter();
  const onSubmitFunc = (value: any) => {
    router.push(route);
  };
  return (
    <FormPage {...rest} onSubmit={onSubmitFunc}>
      {children}
    </FormPage>
  );
}
