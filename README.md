# ssl-info

CLI wrapper over [Node SSL Checker](https://github.com/dyaa/ssl-checker).

## Features

* Print to console JSON response or specific value (daysRemaining, valid, validFrom, validTo, validFor).


## Install

```bash
sudo npm  -g install @art-ws/ssl-info

# Check installation
ssl-info --help
ssl-info --version
```

## Examples

```bash

ssl-info google.com
ssl-info google.com daysRemaining
```
