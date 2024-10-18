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
      <div className="flex justify-around w-full h-full">
        <div className="w-[32%] h-full">
          <Label className="block mb-2 w-full">Editor:</Label>
          <Editor className="h-full w-full" />
        </div>

        <div className="w-[32%] h-full">
          <Label htmlFor="input" className="block mb-2">
            Input:
          </Label>
          <Textarea
            className="h-full w-full"
            onChange={(e) => setInputHtml(e.target.value)}
            id="input"
          />
        </div>

        <div className="w-[32%] h-full">
          <Label htmlFor="output" className="block mb-2">
            Output:
          </Label>
          {/* <Textarea
            className="h-[85%]"
            value={mappedValue}
            onChange={() => {}}
            id="output"
          /> */}
          <Editor data={mappedValue} className="h-full w-full" />
        </div>
      </div>
    </main>
  );
};

export default App;
