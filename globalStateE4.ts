import { IniMap } from "./ini";

const GLOBAL_STATE = "_GLOBAL_STATE";
const LEVEL = "_LEVEL";
const HZ = "_HZ";
const LEVEL_2 = "_LEVEL_2";
const HZ_2 = "_HZ_2";
const LFO_SELECT = "_LFO_SELECT";

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
ini.set(enc.id ?? enc.sec, "discrete", "2");
ini.set(enc.id ?? enc.sec, "encoder", "E2.1");
ini.set(enc.id ?? enc.sec, "color", LFO_SELECT);
ini.set(enc.id ?? enc.sec, "output", LFO_SELECT);

// level fader for LFO 1
const fader = ini.setSection("motorfader");
ini.set(fader.id ?? fader.sec, "fader", "1");
ini.set(fader.id ?? fader.sec, "select", LFO_SELECT);
ini.set(fader.id ?? fader.sec, "selectat", "1");
ini.set(fader.id ?? fader.sec, "output", LEVEL);

// hz fader for LFO 1
const fader1 = ini.setSection("motorfader");
ini.set(fader1.id ?? fader1.sec, "fader", "1");
ini.set(fader1.id ?? fader1.sec, "select", LFO_SELECT);
ini.set(fader1.id ?? fader1.sec, "selectat", "1");
ini.set(fader1.id ?? fader1.sec, "output", HZ);

// Add second LFO
const lfo2 = ini.setSection("lfo");
ini.set(lfo2.id ?? lfo2.sec, "sawtooth", "O2");
ini.set(lfo2.id ?? lfo2.sec, "level", LEVEL_2);
ini.set(lfo2.id ?? lfo2.sec, "hz", `${HZ_2} * 100`);

// level fader for LFO 2
const fader2 = ini.setSection("motorfader");
ini.set(fader2.id ?? fader2.sec, "fader", "1");
ini.set(fader2.id ?? fader2.sec, "select", LFO_SELECT);
ini.set(fader2.id ?? fader2.sec, "selectat", "2");
ini.set(fader2.id ?? fader2.sec, "output", LEVEL_2);

// hz fader for LFO 2
const fader3 = ini.setSection("motorfader");
ini.set(fader3.id ?? fader3.sec, "fader", "1");
ini.set(fader3.id ?? fader3.sec, "select", LFO_SELECT);
ini.set(fader3.id ?? fader3.sec, "selectat", "2");
ini.set(fader3.id ?? fader3.sec, "output", HZ_2);

console.log(ini.toString());
