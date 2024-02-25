import React from "react";
import { render } from "@testing-library/react-native";
import PlayerCard from "../PlayerCard";

describe("PlayerCard component", () => {
  const mockPlayer = {
    display_name: "John Doe",
    date_of_birth: "1990-05-15",
    image_path: "https://example.com/player.jpg",
    nationality: {
      image_path: "https://example.com/flag.png",
    },
    position: {
      name: "Forward",
    },
  };

  test("renders correctly with provided player data", () => {
    const { getByText } = render(<PlayerCard player={mockPlayer} />);

    expect(getByText("John Doe")).toBeTruthy();

    expect(getByText("Forward")).toBeTruthy();

    expect(getByText("34 Years")).toBeTruthy();
  });

  test("handles missing player position gracefully", () => {
    const playerWithoutPosition = { ...mockPlayer, position: null };
    const { getByText } = render(<PlayerCard player={playerWithoutPosition} />);

    expect(getByText("N/A")).toBeTruthy();
  });
});
