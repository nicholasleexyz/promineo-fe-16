export const cells = [...Array(81).keys()];

export const blocks = [...Array(9).keys()].map((i) =>
  [...Array(9).keys()].map(
    (j) =>
      cells[Math.floor(j / 3) * 9 + (j % 3) + i * 3 + Math.floor(i / 3) * 18]
  )
);