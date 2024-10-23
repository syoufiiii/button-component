import Button from "./component/Button";

const App = () => (
  <div
    className="container"
    style={{ backgroundColor: "#ddd", padding: "20px" }}
  >
    <h2>黒ボタン</h2>
    <Button label="編集" iconLeft={<span>🖉</span>} variant="black" />
    <Button label="非活性状態" isDisabled variant="black" />
    <Button label="ローディング中" isLoading variant="black" />
    <Button
      label="リンクボタン"
      href="https://example.com"
      target="_blank"
      variant="black"
    />

    <h2>白ボタン</h2>
    <Button label="編集" iconLeft={<span>🖉</span>} variant="white" />
    <Button label="非活性状態" isDisabled variant="white" />
    <Button label="ローディング中" isLoading variant="white" />
    <Button
      label="リンクボタン"
      href="https://example.com"
      target="_blank"
      variant="white"
    />

    <h2>枠付き白ボタン</h2>
    <Button label="編集" iconLeft={<span>🖉</span>} variant="outlined" />
    <Button label="非活性状態" isDisabled variant="outlined" />
    <Button label="ローディング中" isLoading variant="outlined" />
    <Button
      label="リンクボタン"
      href="https://example.com"
      target="_blank"
      variant="outlined"
    />
  </div>
);

export default App;
