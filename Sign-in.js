import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `http://automationpractice.com/index.php`;

test('New Test', async t => {
    await t
        .click(Selector('a').withText('Sign in'))
        .typeText(Selector('#email'), 'testeamail@test.com')
        .typeText(Selector('#passwd'), 'test')
        .click(Selector('span').withText('Sign in'));
});