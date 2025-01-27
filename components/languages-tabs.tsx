import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Languages = "typescript" | "javascript";

type LanguageTabsProps = {
  tabs: Array<{
    language: Languages;
    code: string;
  }>;
};

export function LanguagesTabs({ tabs }: LanguageTabsProps) {
  return (
    <Tabs defaultValue="javascript" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        {tabs.map(({ language }) => (
          <TabsTrigger
            key={language}
            value={language}
            className="cursor-pointer"
          >
            {language.charAt(0).toUpperCase() + language.slice(1)}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map(({ language, code }) => (
        <TabsContent key={language} value={language}>
          <pre className="rounded-lg bg-slate-950 p-4">
            <code className="text-sm text-slate-50">{code}</code>
          </pre>
        </TabsContent>
      ))}
    </Tabs>
  );
}
