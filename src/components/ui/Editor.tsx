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
        data={data ? data : ""}
      />
    </div>
  );
};

export default Editor;
