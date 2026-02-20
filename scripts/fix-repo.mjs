import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const packagesDir = path.join(root, "packages");

const repo = {
  type: "git",
  url: "https://github.com/shopl/shoplflow",
};

for (const dir of fs.readdirSync(packagesDir)) {
  const pkgJsonPath = path.join(packagesDir, dir, "package.json");
  if (!fs.existsSync(pkgJsonPath)) continue;

  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8"));

  // ✅ repository가 없거나 url이 비어있으면 고쳐준다
  const nextRepo =
    typeof pkg.repository === "object"
      ? { ...pkg.repository }
      : { ...repo };

  nextRepo.url = repo.url;
  nextRepo.type ??= repo.type;
  nextRepo.directory = `packages/${dir}`;

  pkg.repository = nextRepo;
  pkg.homepage ??= "https://github.com/shopl/shoplflow#readme";
  pkg.bugs ??= { url: "https://github.com/shopl/shoplflow/issues" };

  fs.writeFileSync(pkgJsonPath, JSON.stringify(pkg, null, 2) + "\n");
  console.log("updated:", pkg.name ?? dir);
}
