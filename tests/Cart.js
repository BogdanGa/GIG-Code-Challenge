import { Selector } from 'testcafe';

fixture`New Fixture`
    .page`http://automationpractice.com/index.php`;

test('New Test 1', async t => {
    await t
        .typeText(Selector('#search_query_top'), 'bls')
        .pressKey('backspace')
        .typeText(Selector('#search_query_top'), 'ack dress')
        .pressKey('enter')
        .click(Selector('.button.ajax_add_to_cart_button.btn.btn-default[title="Add to cart"][data-id-product="5"]').find('span').withText('Add to cart'))
        .click(Selector('.cross[title="Close window"]'))
        .click(Selector('.button.ajax_add_to_cart_button.btn.btn-default[title="Add to cart"][data-id-product="4"]').find('span').withText('Add to cart'))
        .click(Selector('.cross[title="Close window"]'))
        .click(Selector('a').withText('Cart 2 Products'))
        .click(Selector('#cart_quantity_up_4_16_0_0').find('.icon-plus'))
        .click(Selector('[title="Delete"].cart_quantity_delete').find('.icon-trash'))
        .click(Selector('#center_column').find('span').withText('Proceed to checkout'));
});