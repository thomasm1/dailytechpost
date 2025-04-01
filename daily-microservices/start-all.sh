#!/bin/bash
cd r-event-bus && npm i && npm run start &
echo "Running Bus"
cd r-event-handler && npm i && npm run start &
echo "Running Handler"
cd r-users && npm i && npm run start &
echo "Running Users"
cd r-posts && npm i && npm run start &
echo "Running Posts"
cd r-comments && npm i && npm run start &
echo "Running Comments"
cd r-moderation && npm i && npm run start &
echo "Running Moderation"
  
### Notes:
#### to find/end processes: ps aux | grep "node_1" 
### Shortcut [beware]
"""
kill $(ps aux | grep '[n]ode' | awk '{print $2}')
"""

