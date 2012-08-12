/**
 * rapedia-check checks if an artist has a wiki entry on rapedia.de
 *
 * API:
 *
 *     hasEntry(string: artist, callback):boolean
 *
 *        where callback is
 *
 *            function (object:error, boolean: entry)
 *
 *        and error has a msg property.
 */
var check = require("./lib/check.js");

this.hasEntry = function hasEntry (artist, callback) {

    check.hasEntry(artist, callback);
};
