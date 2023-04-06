import styled from "styled-components";

const STATUS_COLORS = {
  green: "green-300",
  red: "red-300",
  gray: "gray-300",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Container = styled.div<StatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
`;
