import React from "react";
import { render } from "@testing-library/react-native";
import MatchCard from "../MatchCard";

describe("MatchCard component", () => {
  const mockProps = {
    teamOneName: "Team A",
    teamOneLogo: "https://example.com/logoA.png",
    teamTwoName: "Team B",
    teamTwoLogo: "https://example.com/logoB.png",
    time: "2024-02-25 15:30:00",
  };

  test("renders correctly with provided props", () => {
    const { getByText } = render(<MatchCard {...mockProps} />);

    expect(getByText("Team A")).toBeTruthy();
    expect(getByText("Team B")).toBeTruthy();

    expect(getByText("VS")).toBeTruthy();

    expect(getByText("2/25/2024")).toBeTruthy();

    expect(getByText(/(\d{1,2}):(\d{2}) (AM|PM)/)).toBeTruthy();
  });
});
