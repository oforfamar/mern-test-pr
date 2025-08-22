import type { Config } from "@react-router/dev/config";

export default {
  ssr: true, // Enable server-side rendering to support action functions
  basename: "/",
} satisfies Config;
