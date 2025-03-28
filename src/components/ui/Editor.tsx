import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  Bold,
  ClassicEditor,
  Essentials,
  Heading,
  Image,
  Italic,
  Link,
  List,
  Mention,
  Paragraph,
  SourceEditing,
  Undo,
  PasteFromOffice,
  GeneralHtmlSupport, // ✅ Import GeneralHtmlSupport Plugin
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

interface IEditor {
  data?: string;
  className?: string;
}

const Editor = ({ data, className }: IEditor) => {
  return (
    <div className={className} style={{ overflow: "auto" }}>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar: {
            items: [
              "sourceEditing",
              "heading",
              "undo",
              "redo",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "image",
            ],
          },
          extraPlugins: [PasteFromOffice], // ✅ Enable GHS Plugin
          plugins: [
            Bold,
            Essentials,
            Italic,
            Mention,
            Paragraph,
            Undo,
            SourceEditing,
            Link,
            Heading,
            List,
            Image,
            PasteFromOffice,
            // GeneralHtmlSupport, // ✅ Siguraduhin na kasama sa `plugins` array
          ],
        }}
        data={data ? data : ""}
      />
    </div>
  );
};

export default Editor;
