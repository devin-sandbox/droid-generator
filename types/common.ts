/**
 * Common parameter types used across DROID circuits
 */

/** Gate/Trigger input parameter (0/1) */
export type GateInput = string;

/** CV input parameter (voltage values) */
export type CVInput = string;

/** Enumerated value parameter (mode selections) */
export type EnumInput = string;

/** Boolean flag parameter (enable/disable features) */
export type BooleanInput = string;

/** Numeric range parameter (min/max bounds) */
export type RangeInput = string;

/** Common input parameter types */
export type InputType = 'gate' | 'cv' | 'enum' | 'boolean' | 'range';

/** Common output parameter types */
export type OutputType = 'gate' | 'cv' | 'trigger';
