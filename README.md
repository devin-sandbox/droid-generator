# droid-generator

A TypeScript-based generator for DROID patches, supporting various circuit configurations and modular synthesis features.

## Features

- **Circuit Generation**: Create complex DROID patches with type-safe circuit configurations
- **Multi-Track Sequencing**: Support for up to 4 tracks with shared fader controls
- **Layer Management**: Switch between different control layers (e.g., step sequencing and tempo control)
- **Dynamic BPM Control**: Precise tempo control using digit-based fader input
- **Type Safety**: TypeScript interfaces ensuring valid DROID configurations

## Installation

```bash
bun install
```

## Usage

Generate a sequencer patch:
```bash
bun run src/cli/sequencer.ts [num_tracks] [initial_layer]
```

Example:
```bash
bun run src/cli/sequencer.ts 4 tempo  # 4-track sequencer starting in tempo layer
```

## Documentation

### Circuits
- [Sequencer](docs/example-output/sequencer.md): Multi-track sequencer with tempo control
  - Layer switching between step and tempo modes
  - BPM control using digit-based faders
  - Track selection with button group
  - Shared fader controls across tracks

## Development

This project uses [Bun](https://bun.sh) as its JavaScript/TypeScript runtime. All circuit configurations strictly follow the DROID manual specifications.

### Type Definitions
Circuit type definitions are located in the `types` directory:
- Base circuit interfaces in `types/base.ts`
- Common types in `types/common.ts`
- Circuit-specific types in `types/circuits/` (organized by category)
- All types strictly follow DROID manual specifications
