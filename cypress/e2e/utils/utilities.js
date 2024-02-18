
export const globalSetup = () => {
    const cookies = require('../cookies.json');
    cy.visit('https://england.shelter.org.uk/');
    cy.get('#ccc-notify-accept').click();
  };
  

export const tearDown = async function (page) {
  page.context().close();
  page.close();
};
export const formattedDate = (() => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
})();

export const handleNewtab = async function (page) {
  const [newPage] = await Promise.all([page.waitForEvent('popup')]);
  return newPage;
};

export const clickHousingAdviceCheveron = () => {
    const housingAdviceChevronSelector = "#gatsby-focus-wrapper header button[data-headerbutton$='housing_advice_chevron']";
    cy.get(housingAdviceChevronSelector).click();
  };
  

export const evaluateBackgroudColor = async function (element) {
  return element.evaluate((el) => getComputedStyle(el).backgroundColor);
};

export const validateDonateNavigation = async function (
  page,
  donateAmounBtn,
  shopingList,
  donateButton,
  iraiserDonateAmount
) {
  const dabtn = page.locator(donateAmounBtn);
  const spList = page.locator(shopingList);
  const dnBtn = page.locator(donateButton);
  const iraiserAmount = page.locator(iraiserDonateAmount);

  const orignalColor20pd = await dabtn.evaluate(
    (el) => getComputedStyle(el).backgroundColor
  );
  await dabtn.click();
  const clickColor20pd = await evaluateBackgroudColor(dabtn);
  expect(orignalColor20pd).not.toEqual(clickColor20pd);

  const DonateAmount = await dabtn.textContent();
  await expect(spList).toContainText(DonateAmount);

  const orignalColorDBT = await evaluateBackgroudColor(dnBtn);
  await dnBtn.hover();
  const hoverColorDBT = await evaluateBackgroudColor(dnBtn);
  expect(orignalColorDBT).not.toEqual(hoverColorDBT);

  await dnBtn.click();
  await expect(iraiserAmount).toContainText(DonateAmount);
};
