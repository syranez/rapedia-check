/**
 * makes a request to a rapedia-entry.
 *
 */

var request = require("request");

/**
 * uri to rapedia wiki
 *
 * @var string
 * @access private
 * @final
 */
var uri = "http://rapedia.de/wiki/";

/**
 * sanitizes an artist name.
 *
 * e. g. "Edgar Wasser" => "Edgar_Wasser"
 * e. g. "edgar wasser" => "Edgar_Wasser"
 *
 * makes the first char of a word upper case and substitutes all spaces with _
 *
 * @return string
 * @access public
 * @final
 */
function sanitizeArtist (artist) {

    var parts     = artist.split(" ");
    var sanitized = "";

    var length = parts.length;
    for (var i = 0; i <= length - 2; i += 1) {
        sanitized = parts[i][0].toUpperCase() + parts[i].substr(1) + "_";
    }
    sanitized += parts[length - 1][0].toUpperCase() + parts[length - 1].substr(1);

    return sanitized;
}

/**
 * checks if rapedia has an entry for <artist>.
 *
 * @param string artist name of artist
 * @returns boolean
 * @access public
 * @final
 */
this.hasEntry = function (artist, callback) {

    if (   typeof artist == "undefined"
        || artist.length === 0) {

        callback({
            "msg": "No artist given."
        });

        return;
    }

    request(uri + sanitizeArtist(artist), function (error, response, body) {

        if (response.statusCode === 404) {
            callback(null, false);
            return;
        }

        callback(null, true);
    });
};
