import { ref, type Ref } from "vue";

type TypeThemeIcon = "🌙" | "☀️";

type TypeTheme = {
  theme: Ref<TypeThemeIcon>;
  toggleTheme: () => void;
};

export default function useTheme(): TypeTheme {
  const theme = ref<TypeThemeIcon>("🌙");

  const toggleTheme = (): void => {
    const htmlElement: DOMTokenList = document.documentElement.classList;

    if (htmlElement.contains("dark")) {
      htmlElement.remove("dark");
      theme.value = "🌙";
    } else {
      htmlElement.add("dark");
      theme.value = "☀️";
    }
  };

  return {
    theme,
    toggleTheme,
  };
}
