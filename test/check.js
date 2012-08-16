var test  = require("tap").test;
var check = require("../").hasEntry;

test("Edgar Wasser has an entry", function (t) {
    check("Edgar Wasser", function (error, entry) {
        t.ok(entry, "Edgar Wasser");
    });
    check("edgar Wasser", function (error, entry) {
        t.ok(entry, "edgar Wasser");
    });
    check("edgar wasser", function (error, entry) {
        t.ok(entry, "edgar wasser" + entry);
        t.end();
    });
});

test("unknown foobar has no entry", function (t) {
    check("unknown foobar", function (error, entry) {
        t.notOk(entry, "unknown foobar");
        t.end();
    });
});
