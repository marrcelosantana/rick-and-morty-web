import { Container } from "./styles";

interface StatusCircleProps {
  color: "green" | "red" | "gray";
}

export function StatusCircle({ color }: StatusCircleProps) {
  return <Container statusColor={color} />;
}
