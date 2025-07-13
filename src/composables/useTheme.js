import { ref } from "vue";

export default function useTheme() {
  const theme = ref("🌙");

  const toggleTheme = () => {
    const htmlElement = document.documentElement.classList;

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
