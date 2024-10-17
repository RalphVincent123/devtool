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
} from "ckeditor5";
// import { SlashCommand } from "ckeditor5-premium-features";

import "ckeditor5/ckeditor5.css";

const Editor = () => {
  return (
    <div style={{ width: "60%", height: "30%", overflow: "auto" }}>
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
          ],
        }}
      />
    </div>
  );
};

export default Editor;
