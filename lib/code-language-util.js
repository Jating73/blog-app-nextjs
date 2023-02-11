export function detectLanguage(lang) {
  switch (lang) {
    case "js":
      lang = "javascript";
      break;
    case "css":
      lang = "css";
      break;
    case "dart":
      lang = "dart";
      break;
    case "docker":
      lang = "docker";
      break;
    case "ejs":
      lang = "ejs";
      break;
    case "graphql":
      lang = "graphql";
      break;
    case "handlerbars":
      lang = "handlerbars";
      break;
    case "java":
      lang = "java";
      break;
    case "typescript":
      lang = "typescript";
      break;
    default:
      lang = "javascipt";
      break;
  }
  return lang;
}
