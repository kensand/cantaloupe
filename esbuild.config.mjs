import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["dist/tsc-out/index.js"],
  bundle: true,
  sourcemap: true,
  format: "esm",
  minify: true,
  platform: "browser",
  outfile: "dist/esm/index.js",
});

await esbuild.build({
  entryPoints: ["dist/tsc-out/index.js"],
  bundle: true,
  sourcemap: true,
  format: "cjs",
  minify: true,
  platform: "node",
  outfile: "dist/cjs/index.js",
});
