import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("ボタンがクリックされたとき、onClickが呼ばれる", () => {
  const handleClick = jest.fn();
  render(<Button label="テスト" onClick={handleClick} />);

  fireEvent.click(screen.getByText("テスト"));
  expect(handleClick).toHaveBeenCalled();
});

test("ロード中のとき、Loading...が表示される", () => {
  render(<Button label="テスト" isLoading />);
  expect(screen.getByText(/Loading/)).toBeInTheDocument();
});
