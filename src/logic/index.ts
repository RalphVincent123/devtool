export const getMappedUrl = (
  oldUrls: string[],
  newUrls: string[],
  html: string
) => {
  let updatedHtml = html;

  oldUrls.forEach((url, index) => {
    const newUrl = newUrls[index]; // Get the corresponding new URL
    const regex = new RegExp(`href="${url}"`, "g");

    updatedHtml = updatedHtml
      .replace(regex, `href="${newUrl.replace("www.allaboutvision.com", "")}"`)
      .replace(/<(h[1-3])>\s*<strong>(.*?)<\/strong>\s*<\/\1>/g, "<$1>$2</$1>");
  });

  return updatedHtml;
};

// let updatedHtmlString = htmlString;

// // Replace each old URL with the corresponding new URL
// oldUrls.forEach((oldUrl, index) => {
//   const newUrl = newUrls[index]; // Get the corresponding new URL
//   const regex = new RegExp(`href="${oldUrl}"`, "g");

//   // Replace only if the old URL matches; otherwise, leave it unchanged
//   updatedHtmlString = updatedHtmlString.replace(
//     regex,
//     `href="${newUrl.replace("www.allaboutvision.com", "")}"`
//   );
// });
