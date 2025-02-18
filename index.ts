import { IniMap } from "./ini";
import type { BunFile } from "bun";

const ini = new IniMap();

const raw = await Bun.file("./patches/1.ini").text();
const config = ini.parse(raw);
await Bun.write("./gen/1.1.ini", config.toString());
