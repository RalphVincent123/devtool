export const getMappedUrl = (
  oldUrls: string[],
  newUrls: string[],
  html: string
) => {
  let updatedHtml = html;

  oldUrls.forEach((url, index) => {
    const newUrl = newUrls[index]; // Get the corresponding new URL
    const regex = new RegExp(`href="${url}"`, "g");

    updatedHtml = updatedHtml.replace(
      regex,
      `href="${newUrl.replace("www.allaboutvision.com", "")}"`
    );
  });

  return updatedHtml.replace(
    /<(h[1-3])>\s*<strong>(.*?)<\/strong>\s*<\/\1>/g,
    "<$1>$2</$1>"
  );
};
