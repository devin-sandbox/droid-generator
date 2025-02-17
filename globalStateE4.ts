import { IniMap } from "./ini";

const GLOBAL_STATE = "_GLOBAL_STATE";
const LEVEL = "_LEVEL";
const HZ = "_HZ";

const ini = new IniMap();

ini.setComment("# LABELS: master=18");

ini.setSection("p2b8");
ini.setSection("e4");
ini.setSection("m4");

const lfo = ini.setSection("lfo");
ini.set(lfo.id ?? lfo.sec, "sawtooth", "O1");
ini.set(lfo.id ?? lfo.sec, "level", LEVEL);
ini.set(lfo.id ?? lfo.sec, "hz", `${HZ} * 100`);

const enc = ini.setSection("encoder");
ini.set(enc.id ?? enc.sec, "discrete", "3");
ini.set(enc.id ?? enc.sec, "encoder", "E2.1");
ini.set(enc.id ?? enc.sec, "color", GLOBAL_STATE);
ini.set(enc.id ?? enc.sec, "output", GLOBAL_STATE);

// level fader
const fader = ini.setSection("motorfader");
ini.set(fader.id ?? fader.sec, "fader", "1");
ini.set(fader.id ?? fader.sec, "select", GLOBAL_STATE);
ini.set(fader.id ?? fader.sec, "selectat", "1");
ini.set(fader.id ?? fader.sec, "output", LEVEL);

// hz fader
const fader1 = ini.setSection("motorfader");
ini.set(fader1.id ?? fader.sec, "fader", "1");
ini.set(fader1.id ?? fader.sec, "select", GLOBAL_STATE);
ini.set(fader1.id ?? fader.sec, "selectat", "2");
ini.set(fader1.id ?? fader.sec, "output", HZ);

console.log(ini.toString());
