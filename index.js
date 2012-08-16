/**
 * rapedia-check checks if an artist has a wiki entry on rapedia.de
 *
 */
var check = require("wiki-check");

this.hasEntry = function hasEntry (artist, callback) {

    check.hasEntry({
        "wiki": "http://rapedia.de/wiki/",
        "name": artist
    }, callback);
};
