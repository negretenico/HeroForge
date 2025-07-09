const fs = require("fs");
const path = require("path");

function writeFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
  console.log(`✅ Wrote file to ${filePath}`);
}

function main() {
  const androidJson = process.env.GOOGLE_SERVICES_JSON;
  const iosPlist = process.env.GOOGLE_SERVICE_INFO_PLIST;

  if (androidJson) {
    writeFile("android/app/google-services.json", androidJson);
  }

  if (iosPlist) {
    writeFile("ios/GoogleService-Info.plist", iosPlist);
  }
}

main();
