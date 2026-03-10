const chokidar = require("chokidar");
const { exec } = require("child_process");

function build() {
  console.log("Rebuilding resume...");
  exec("npm run resume", (err, stdout, stderr) => {
    console.log(stdout);
    if (stderr) console.error(stderr);
  });
}

chokidar.watch("resume.json").on("change", () => {
  build();
});

build();