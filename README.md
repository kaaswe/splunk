# splunk
Splunk

SSL Certifcate Checker - Python3 code and Splunk 8.1 compatible

-Install app on SH

-Install add-on at every host to check. Update inputs.conf to match your index.

# DataSourceChecker
Keep track of all your datasources combined of hosts and sourctype with unique settings to alert on individual level, alert silent or suppress, alert with different methods for different datasources. All in a simple lookup table. A big screen alert console and a filter based admin GUI to do all configuration.

Install the .tgz by the GUI on a SH. Wait until the scheduled search has run to build the first lookup table or force it.

Upgrade: from version x < 1.3.0
Run this search once after the upgrade to extend the lookup with the new fields, then also run the built-in backup.

| inputlookup tools_history_datasource.csv | eval cluster="0" | outputlookup append=f tools_history_datasource.csv

# INIT
This app consists of 2 main areas:

-Inventory of indexes with technical owners stored in a lookup file, with graphical interface to add, uppdate and remove content.

-A license calculation part that calculates license usage every day, for hosts, souretypes and indexes and store it to a summary index.
