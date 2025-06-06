import { useEffect, useState } from "react";
import Editor from "./components/ui/Editor";
import { Label } from "./components/ui/label";
// import { Textarea } from "./components/ui/Textarea";
import urlsMapping from "./constants";
import { getMappedUrl } from "./logic";

const App = () => {
  const [inputHtml, setInputHtml] = useState("");
  const [outputHtml, setOutputHtml] = useState("");
  const [lang, setLang] = useState<
    "en" | "de" | "ru" | "contentReleaseEN" | "es" | "zh" | "ar"
  >("en");

  useEffect(() => {
    if (urlsMapping[lang]) {
      const mappedValue = getMappedUrl(
        urlsMapping[lang].oldUrls,
        urlsMapping[lang].newUrls,
        inputHtml
      );
      setOutputHtml(mappedValue);
    }
  }, [lang, inputHtml]);

  return (
    <main className="w-screen h-screen p-10 flex flex-col justify-center">
      <h2 className="flex justify-center">Language Selection</h2>
      <div className="flex justify-center mb-4">
        <label htmlFor="mr-4" style={{ paddingRight: 10 }}>
          <input
            type="radio"
            name="language"
            value="contentReleaseEN"
            checked={lang === "contentReleaseEN"}
            onChange={() => setLang("contentReleaseEN")}
          />
          Content Release Validation
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="language"
            value="en"
            checked={lang === "en"}
            onChange={() => setLang("en")}
          />
          English
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="language"
            value="de"
            checked={lang === "de"}
            onChange={() => setLang("de")}
          />
          German
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="language"
            value="ru"
            checked={lang === "ru"}
            onChange={() => setLang("ru")}
          />
          Russian
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="language"
            value="es"
            checked={lang === "es"}
            onChange={() => setLang("es")}
          />
          Spanish
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="language"
            value="zh"
            checked={lang === "zh"}
            onChange={() => setLang("zh")}
          />
          Chinese
        </label>
        <label className="mr-4">
          <input
            type="radio"
            name="language"
            value="ar"
            checked={lang === "ar"}
            onChange={() => setLang("ar")}
          />
          Arabic
        </label>
      </div>
      <div className="flex justify-around w-full h-full">
        <div className="w-[50%] h-full">
          <Label className="block mb-2 w-full">Editor:</Label>
          {/* <Editor className="h-full w-full" /> */}
          <Editor
            className="h-full w-full"
            data={inputHtml}
            onChange={setInputHtml}
          />
        </div>

        {/* <div className="w-[32%] h-full">
          <Label htmlFor="input" className="block mb-2">
            Input:
          </Label>
          <Textarea
            className="h-full w-full"
            value={inputHtml}
            onChange={(e) => setInputHtml(e.target.value)}
            id="input"
          />
        </div> */}

        <div className="w-[45%] h-full">
          <Label htmlFor="output" className="block mb-2">
            Output:
          </Label>
          <Editor data={outputHtml} className="h-full w-full" />
        </div>
      </div>
    </main>
  );
};

export default App;
