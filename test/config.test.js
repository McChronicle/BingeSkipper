
const fs = require("fs");

test("check version number format", () => {
    const manifestContent = fs.readFileSync("./src/manifest.json");
    const json = JSON.parse(manifestContent);
    const version = json["version"];
    const versionSplit = version.split(".");

    expect(versionSplit[0]).toBe("" + parseInt(versionSplit[0]));
    expect(versionSplit[1]).toBe("" + parseInt(versionSplit[1]));
    expect(versionSplit[2]).toBe("" + parseInt(versionSplit[2]));
});
