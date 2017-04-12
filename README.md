# Fun with USB joysticks

This uses the [node-joystick](https://github.com/JayBeavers/node-joystick) library by Jay Beavers.

the joystick library reads directly from `/dev/input/js0` so it's doubtful it works outside of Linux.  YMMV.  If you break it you get to keep both pieces.

Plug in your USB joystick, run `npm i ; node index.js`, move the joystick around, and watch the cursors move.

Screenshot:
<pre>
Axis 0: [-----------------------------------------0-------------------------------------------------------------------------------]
Axis 1: [--------------------------0----------------------------------------------------------------------------------------------]
Axis 2: [--------------------------------------------------------------------------------------------0----------------------------]
Axis 3: [-------------------------------------------------------------------------0-----------------------------------------------]
Axis 4: [------------------------------------------------------------0------------------------------------------------------------]
Axis 5: [------------------------------------------------------------0------------------------------------------------------------]




Button 0: [0000]
Button 1: [----]
Button 2: [----]
Button 3: [0000]
Button 4: [----]
Button 5: [----]
Button 6: [----]

</pre>
