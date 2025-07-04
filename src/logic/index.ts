// export const getMappedUrl = (
//   oldUrls: string[],
//   newUrls: string[],
//   html: string
// ) => {
//   let updatedHtml = html;

//   oldUrls.forEach((url, index) => {
//     const newUrl = newUrls[index]; // Get the corresponding new URL
//     const regex = new RegExp(`href="${url}"`, "g");

//     updatedHtml = updatedHtml.replace(
//       regex,
//       `href="${newUrl.replace("www.allaboutvision.com", "")}"`
//     );
//   });

//   // Remove <strong> inside <h1>-<h3> and clean spaces
//   updatedHtml = updatedHtml.replace(
//     /<(h[1-3])>\s*<strong>(.*?)<\/strong>\s*<\/\1>/g,
//     "<$1>$2</$1>"
//   );

//   // Remove unnecessary spacing around tags
//   // updatedHtml = updatedHtml.replace(/\s*(<\/?\w+>)\s*/g, "$1 ");

//   // Remove &nbsp; (Replace with a normal space or remove completely)
//   updatedHtml = updatedHtml.replace(/&nbsp;/g, " "); // Replace with space

//   // Remove empty tags (Tags with only spaces or are completely empty)
//   updatedHtml = updatedHtml.replace(/<(\w+)[^>]*>\s*<\/\1>/g, "");

//   return updatedHtml;
// };

export const getMappedUrl = (
  oldUrls: string[],
  newUrls: string[],
  html: string
): string => {
  let updatedHtml = html;

  oldUrls.forEach((oldUrl, index) => {
    const newUrl = newUrls[index];

    // Handle both encoded and decoded versions of the old URL
    const candidates = [oldUrl, decodeURIComponent(oldUrl), encodeURI(decodeURIComponent(oldUrl))];

    candidates.forEach((variant) => {
      const escapedVariant = variant.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&"); // Escape for regex
      const regex = new RegExp(`href="${escapedVariant}"`, "g");

         updatedHtml = updatedHtml.replace(
      regex,
      `href="${newUrl.replace("www.allaboutvision.com", "")}"`
    );
    });
  });

  // Clean up <strong> inside heading tags
  updatedHtml = updatedHtml.replace(
    /<(h[1-3])>\s*<strong>(.*?)<\/strong>\s*<\/\1>/g,
    "<$1>$2</$1>"
  );

  // Replace non-breaking spaces with regular spaces
  updatedHtml = updatedHtml.replace(/&nbsp;/g, " ");

  // Remove empty tags (whitespace-only or truly empty)
  updatedHtml = updatedHtml.replace(/<(\w+)[^>]*>\s*<\/\1>/g, "");

  return updatedHtml;
};
