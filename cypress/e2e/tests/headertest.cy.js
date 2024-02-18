/// <reference types="cypress" />
import { globalSetup, clickHousingAdviceCheveron } from '../utils/utilities.js';
import { headerLocators } from '../locators/headerlocators.js';
import { headerTestData } from '../data/headertestdata.js';

const {
  housingAdviceSubMenuLocators,
  housingAdvcieSubMenu,
  shelterHomeLogoLocator,
  housingAdviceLocator,
  getHelpLocator,
  supportusLocator,
  shopLocator,
  whatweDoLocator,
  professionalResourcesLocator,
  donateButtonLocator,
} = headerLocators;

const {
  subMenuData,
  housingAdvicePage,
  getHelpPage,
  supportusPage,
  shopPage,
  whatWeDoPage,
  professionalPage,
  donatePage,
} = headerTestData;

let baseUrl;

describe('Test housing advice submenu. @web', () => {
  beforeEach(() => {
    globalSetup();
    baseUrl = cy.url();
    cy.log(baseUrl);
  });

  beforeEach(() => {
    clickHousingAdviceCheveron();
  });

  it('Verify header click on housing advice submenu.', () => {
    cy.get(housingAdviceSubMenuLocators).should('be.visible');
    clickHousingAdviceCheveron();
    cy.get(housingAdviceSubMenuLocators).should('be.hidden');
  });
  it('Verify housing advice submenu item {homelessness}.', () => {
    cy.get(housingAdvcieSubMenu.homelessnessLocator).click();
    cy.url().should('include', subMenuData.homelessnessPage);
  });
  it('Verify housing advice submenu item {tenancydeposits}.', () => {
    cy.get(housingAdvcieSubMenu.tenancydepositsLocator).click();
    cy.url().should('include', subMenuData.tennacyDepositePage);
  });
  it('Verify housing advice submenu item {councilhousing}.', () => {
    cy.get(housingAdvcieSubMenu.councilhousingLocator).click();
    cy.url().should('include', subMenuData.councilHousingAssociationPage);
  });
  it('Verify housing advice submenu item {repairs}.', () => {
    cy.get(housingAdvcieSubMenu.repairsLocator).click();
    cy.url().should('include', subMenuData.repairsPage);
  });
  it('Verify housing advice submenu item {Private renting}.', () => {
    cy.get(housingAdvcieSubMenu.privateRentingLocator).click();
    cy.url().should('include', subMenuData.privateRentingPage);
  });
  it('Verify housing advice submenu item {Benifits and money problems}.', () => {
    cy.get(housingAdvcieSubMenu.benifitisandMoneyLocator).click();
    cy.url().should('include', subMenuData.benefitsPage);
  });
  it('Verify housing advice submenu item {Eviction}.', () => {
    cy.get(housingAdvcieSubMenu.evictionLocator).click();
    cy.url().should('include', subMenuData.evictionPage);
  });
  it('Verify housing advice submenu item {Mortgage repossession}.', () => {
    cy.get(housingAdvcieSubMenu.mortgageRepossessionLocator).click();
    cy.url().should('include', subMenuData.mortgageRepossessionPage);
  });
});

describe('Test header menu @web', () => {
  beforeEach(() => {
    globalSetup();
    baseUrl = cy.url();
  });

  it('Verify links in header navigate to expected paths. {Shelter logo}', () => {
    cy.get(shelterHomeLogoLocator).click();
    cy.url().should('include', 'https://england.shelter.org.uk/');
  });
  it('Verify link in header navigate to expected paths. {Housing advice}', () => {
    cy.get(housingAdviceLocator).click();
    cy.url().should('include', housingAdvicePage);
  });
  it('Verify link in header navigate to expected paths. {Get help}', () => {
    cy.get(getHelpLocator).click();
    cy.url().should('include', getHelpPage);
  });
  it('Verify link in header navigate to expected paths. {Support us}', () => {
    cy.get(supportusLocator).click();
    cy.url().should('include', supportusPage);
  });
  it('Verify link in header navigate to expected paths. {Shop}', () => {
    cy.get(shopLocator).click();
    cy.url().should('include', shopPage);
  });
  it('Verify link in header navigate to expected paths. {What we do}', () => {
    cy.get(whatweDoLocator).click();
    cy.url().should('include', whatWeDoPage);
  });
  it('Verify link in header navigate to expected paths. {Professionals}', () => {
    cy.get(professionalResourcesLocator).click();
    cy.url().should('include', professionalPage);
  });
  it('Verify link in header navigate to expected paths. {Donate}', () => {
    cy.get(donateButtonLocator).click();
    cy.url().should('include', donatePage);
  });
});
