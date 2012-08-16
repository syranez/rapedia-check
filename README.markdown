# rapedia-check

rapedia-check checks if an artist has an entry on rapedia.de

[![build status](https://secure.travis-ci.org/syranez/rapedia-check.png)](http://travis-ci.org/syranez/rapedia-check)

## Installation

`npm install rapedia-check`

... or to install the package globally:

`npm install -g rapedia-check`

## Usage

    var rapedia = request("rapedia-check");

    rapedia.hasEntry("edgar wasser", function (error, entry) {

        if (error) {
            console.error("Upps: " + error.msg);
            return;
        }

        if (entry) {
            console.info("Edgar Wasser has an entry!");
        } else {
            console.info("Edgar Wasser has no entry. WTF! /o\");
        }
    });

## methods

### hasEntry(artist, callback)

Retrieves the page of `artist` and calls `callback` with the result.

`callback` is

    function (error, entry)

with error as an object with an msg property or null and entry a boolean.

## Version scheme

The version scheme is this:

    {major-release}.{feature-release}.{bugfixes/maintaining}

 - Major release part

Changes that make your app crash if you update without modifying your code. The major release version is usally bumped if code structure changes happened, or something really exciting has happened. It breaks your stuff.

If you are using this module as dependency in live production apps, DO NOT wildcard this.

 - Feature release part

Introduces new features, that may work or not. You usually WANT this on development systems, but you DO NOT want this wildcarded in live production environments.

 - Bugfixes / maintaining part

Will be bumped everytime a bug is fixed or maintaining stuff (=all that does not break code, e. g. cosmetic code changes, comment stuff) has happend. You usually DO WANT bugs fixed on all your systems. Nothing is intended to break.

----------

If  you are unsure what to use:

 - Use __fixed__ version, e. g. 1.2.3, if you do not want any changes (fixes, features)
 - Use __bugfix channel__, e. g. ~1.2.3, if you just want bugfixes.
 - Use __feature channel__, e. g. 1. ** . **, if you want new features and can tolerate bugs.
 - Use __bleeding edge channel__ if you do not care about downtimes, breaks and bugs. You, Sir, are My best friend. Issue Tracker is open and I will answer your mails for sure.

If you are still not sure, use a fixed version.

## License

(The MIT License)

Copyright (c) 2012 Michael Nowack &lt;syranez@minaga-church.de&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
