import { useState } from "react";
import Editor from "./components/ui/Editor";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/Textarea";
import { newUrls, oldUrls } from "./constants";
import { getMappedUrl } from "./logic";

const App = () => {
  const [inputHtml, setInputHtml] = useState("");

  const mappedValue = getMappedUrl(oldUrls, newUrls, inputHtml);

  return (
    <main className="w-screen h-screen p-10 flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
        <Editor />
        <div className="w-[60%] h-[30%]">
          <Label htmlFor="input" className="block mb-2">
            Input:
          </Label>
          <Textarea
            className="h-[85%]"
            onChange={(e) => setInputHtml(e.target.value)}
            id="input"
          />
        </div>

        <div className="w-[60%] h-[30%]">
          <Label htmlFor="output" className="block mb-2">
            Output:
          </Label>
          <Textarea
            className="h-[85%]"
            value={mappedValue}
            onChange={() => {}}
            id="output"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
