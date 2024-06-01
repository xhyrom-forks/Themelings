import { DiffEnum, type Diff, type OutDiffs } from "./types";

// mock data for "bun run update:test"
export default {
  semantic: new Map([
    [
      "MOCK_COLOR_SAMPLE_1",
      {
        change: DiffEnum.Added,
        cur: "#7ee7f7",
      },
    ],
    [
      "MOCK_COLOR_SAMPLE_2",
      {
        change: DiffEnum.Changed,
        old: "#7ee7f7",
        cur: "#d4d7fc",
      },
    ],
    [
      "MOCK_COLOR_SAMPLE_3",
      {
        change: DiffEnum.Removed,
        old: "#58f39c",
      },
    ],
  ]),
  raw: undefined,
  icons: new Map([
    [
      "FirstMockIcon",
      {
        change: DiffEnum.Added,
        cur: "a6fc9796178044928e3baf36a9c1fe36",
        curFile: "src/canvas/mock/FirstMockIcon.png",
      },
    ],
    [
      "SecondMockIcon",
      {
        change: DiffEnum.Changed,
        old: "7f4b50062477443eb64e3b91fd86f16d",
        oldFile: "src/canvas/mock/SecondMockIcon.png",
        cur: "2b11ebebd07b49ff826a2dc753b343fa",
        curFile: "src/canvas/mock/SecondMockIconNew.png",
      },
    ],
    [
      "ThirdMockIcon",
      {
        change: DiffEnum.Removed,
        old: "1fcaec06b9d64d88b62234cb3f33de39",
        oldFile: "src/canvas/mock/ThirdMockIcon.png",
      },
    ],
  ]),
  code: undefined,
} satisfies OutDiffs;