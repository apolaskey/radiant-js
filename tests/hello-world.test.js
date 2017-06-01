import test from 'ava';

test('foo will run', t => {
    t.pass();
});

test('moo will also run', t => {
    t.pass();
});

// Won't run, no title
test('Should not fail no title', t => {
    t.fail();
});
