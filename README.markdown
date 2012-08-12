# rapedia-check

rapedia-check checks if an artist has an entry on rapedia.de

## methods

var rapediaCheck = require("rapedia-check");

### hasEntry(artist, callback)

Retrieves the page of `artist` and calls `callback` with the result.

`callback` is

    function (error, entry)

with error as an object with an msg property or null and entry a boolean.

## LICENSE

MIT
