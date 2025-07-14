import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Absolute path to global "downloads" folder
const downloadsDir = path.resolve(__dirname, "../../downloads");

// ✅ Ensure folder exists only once
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

export default downloadsDir;
