# Example Sequencer Output

This document shows the standard output of the sequencer with tempo control implementation.

```ini
# LABELS: master=18
[p2b8]
[e4]
[m4]
[encoder]
encoder=E2.1
button=_LAYER_SWITCH
color=_LAYER_STATE_1 * 0.6
mode=6
discrete=2
snapforce=1
output=_CURRENT_LAYER
[motorfader]
fader=1
notches=10
outputscale=9
snapforce=0.8
output=_BPM_HUNDREDS
select=_LAYER_STATE_1
selectat=21
[motorfader]
fader=2
notches=10
outputscale=9
snapforce=0.8
output=_BPM_TENS
select=_LAYER_STATE_2
selectat=22
[motorfader]
fader=3
notches=10
outputscale=9
snapforce=0.8
output=_BPM_ONES
select=_LAYER_STATE_3
selectat=23
[math]
input1=_BPM_HUNDREDS * 100
input2=_BPM_TENS * 10
sum=_BPM_PARTIAL
[math]
input1=_BPM_PARTIAL
input2=_BPM_ONES
sum=_TOTAL_BPM
[switch]
position=_CURRENT_LAYER
input1=_LAYER_SWITCH
input2=21
output=_LAYER_STATE_1
[switch]
position=_CURRENT_LAYER
input1=_LAYER_SWITCH
input2=22
output=_LAYER_STATE_2
[switch]
position=_CURRENT_LAYER
input1=_LAYER_SWITCH
input2=23
output=_LAYER_STATE_3
[lfo]
hz=_TOTAL_BPM / 60
waveform=0
level=1
bipolar=0
square=_INTERNAL_CLOCK
[buttongroup]
button1=B1.1
button2=B1.2
button3=B1.3
button4=B1.4
led1=L1.1
led2=L1.2
led3=L1.3
led4=L1.4
value1=0
value2=1
value3=2
value4=3
maxactive=1
minactive=1
startbutton=1
output=_SELECTED_TRACK
[motoquencer]
clock=_INTERNAL_CLOCK
firstfader=1
numfaders=4
numsteps=4
select=_SELECTED_TRACK
selectat=11
cv=O1
gate=G1
fadermode=0
buttonmode=0
cvbase=0
cvrange=1
quantize=2
[motoquencer]
clock=_INTERNAL_CLOCK
firstfader=1
numfaders=4
numsteps=4
select=_SELECTED_TRACK
selectat=12
cv=O2
gate=G2
fadermode=0
buttonmode=0
cvbase=0
cvrange=1
quantize=2
[motoquencer]
clock=_INTERNAL_CLOCK
firstfader=1
numfaders=4
numsteps=4
select=_SELECTED_TRACK
selectat=13
cv=O3
gate=G3
fadermode=0
buttonmode=0
cvbase=0
cvrange=1
quantize=2
[motoquencer]
clock=_INTERNAL_CLOCK
firstfader=1
numfaders=4
numsteps=4
select=_SELECTED_TRACK
selectat=14
cv=O4
gate=G4
fadermode=0
buttonmode=0
cvbase=0
cvrange=1
quantize=2
```

## Layer Selection Values
- Step layer: All `_LAYER_STATE_*` outputs = 11 (activates faders 11-14)
- Tempo layer: 
  - `_LAYER_STATE_1 = 21` (activates first fader for hundreds)
  - `_LAYER_STATE_2 = 22` (activates second fader for tens)
  - `_LAYER_STATE_3 = 23` (activates third fader for ones)

## Implementation Details
- Each fader has a dedicated switch circuit for selection
- Encoder color uses first layer state (`_LAYER_STATE_1 * 0.6`)
  - Blue (0.6) in tempo layer
  - Red (0) in step layer
- BPM calculation combines fader values:
  - `_BPM_HUNDREDS * 100 + _BPM_TENS * 10 + _BPM_ONES`
  - Result in `_TOTAL_BPM` used for LFO clock
- Layer switching controlled by encoder E2.1
  - Two discrete positions for step/tempo layers
  - Circular mode for easy toggling
  - Switch circuits use encoder button state for selection
  - No invalid parameters used (follows DROID manual specs)
