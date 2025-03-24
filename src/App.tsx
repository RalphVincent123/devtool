import { useEffect, useState } from "react";
import Editor from "./components/ui/Editor";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/Textarea";
import urlsMapping from "./constants";
import { getMappedUrl } from "./logic";

const App = () => {
  const [inputHtml, setInputHtml] = useState("");
  const [lang, setLang] = useState<"en" | "de" | "ru">("en");

  const mappedValue = getMappedUrl(
    urlsMapping[lang].oldUrls,
    urlsMapping[lang].newUrls,
    inputHtml
  );

  useEffect(() => {
    setLang(window.location.href.split("/").at(-1) as "en" | "de" | "ru");
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.location.href = "/en";
    }
  }, []);

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
