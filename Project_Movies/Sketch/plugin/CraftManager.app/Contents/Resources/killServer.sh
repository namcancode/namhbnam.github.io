
/bin/kill $(ps aux | grep 'CraftManager.app/Contents/Resources/server.py' | grep '/usr/bin/python' | awk '{print $2}')
