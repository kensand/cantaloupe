import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["dist/tsc-out/index.js"],
  bundle: true,
  sourcemap: true,
  minify: true,
  platform: "browser",
  outfile: "dist/esm/index.js",
});

await esbuild.build({
  entryPoints: ["dist/tsc-out/index.js"],
  bundle: true,
  sourcemap: true,
  minify: true,
  platform: "node",
  outfile: "dist/cjs/index.js",
});
