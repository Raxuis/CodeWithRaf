import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "@/components/callout";
import { LanguagesTabs } from "@/components/languages-tabs";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  LanguagesTabs,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
