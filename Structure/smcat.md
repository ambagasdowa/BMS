---
title: "Status of the Project Inventory"
author: "baizabal.jesus@gmail.com"
author: " あるべると へすす"
extensions:
  - image_ueberzug
  - qrcode
  - render
styles:
  style: solarized-dark
  table:
    column_spacing: 15
  margin:
    top: 3
    bottom: 0
  padding:
    top: 3
    bottom: 3
---

## Structure of BMS

> Flow Diagram

### SMCAT

```smcat-16
eat   [color="#008800"],
sleep [color="blue" active],
meow  [color="red"],
play  [color="purple"];

sleep -> meow  [color="red"]            : wake up;
meow  -> meow  [color="red"]            : no response from human;
meow  -> eat   [color="#008800"]        : human gives food;
meow  -> play  [color="purple"]         : human gives toy;
play  -> sleep [color="blue"]           : tired or bored;
eat   -> sleep [color="blue" width=3.5] : belly full;
```
