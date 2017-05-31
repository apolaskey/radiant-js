import test from 'ava';

test('foo will run', t => {
    t.pass();
});

test('moo will also run', t => {
    t.pass();
});

test.only('boo will run but not exclusively', t => {
    t.pass();
});

// Won't run, no title
test(t => {
    t.fail();
});

// Won't run, no explicit title
test(t => {
    t.fail();
});
