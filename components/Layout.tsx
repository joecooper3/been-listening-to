import { AnimateSharedLayout } from "framer-motion";

export default function Layout({ children }) {
  return <AnimateSharedLayout>{children}</AnimateSharedLayout>;
}
