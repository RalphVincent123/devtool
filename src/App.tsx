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
    | "en"
    | "de"
    | "ru"
    | "contentReleaseEN"
    | "es"
    | "zh"
    | "ar"
    | "fr"
    | "tr"
    | "pt"
    | "ja"
    | "IT"
    | "hi"
    | "th"
  >("en");

  const languageOptions = [
    { value: "contentReleaseEN", label: "Content Release Validation" },
    { value: "en", label: "English" },
    { value: "de", label: "German" },
    { value: "ru", label: "Russian" },
    { value: "es", label: "Spanish" },
    { value: "zh", label: "Chinese" },
    { value: "ar", label: "Arabic" },
    { value: "fr", label: "French (Fr)" },
    { value: "tr", label: "Turkey (tr)" },
    { value: "pt", label: "Portuguese" },
    { value: "ja", label: "Japanese" },
    { value: "IT", label: "italy" },
    { value: "hi", label: "India" },
    { value: "th", label: "Thailand" },
  ] as const;

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
        {languageOptions.map(({ value, label }) => (
          <label key={value} className="mr-4">
            <input
              type="radio"
              name="language"
              value={value}
              checked={lang === value}
              onChange={() => setLang(value)}
            />
            {label}
          </label>
        ))}
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
