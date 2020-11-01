import {Selector} from 'testcafe';

const developerName = 'Warren Carvajal'

fixture `Getting started`
  .page `http://devexpress.github.io/testcafe/example`
  .beforeEach(async b => {
    await b.maximizeWindow();
  })

test('my first test', async t => {
  const pageTitle = Selector('h1');
  await t.expect(pageTitle.innerText).eql('Example');
});

test('should type into developer name', async t => {
  await t.typeText('#developer-name', developerName);
  const inputValue = Selector('#developer-name').value;
  await t.expect(inputValue).eql(developerName);
});

test('should send review', async t => {
  await t
    .typeText('#developer-name', developerName)
    .click('#tried-test-cafe')
    .drag('#slider', 150, 0)
    .typeText('#comments', 'awesome framework')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText).eql(`Thank you, ${developerName}!`);
});