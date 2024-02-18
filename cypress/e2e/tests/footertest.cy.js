import { footerLocators } from '../locators/footerlocator.js';
import { footerTestData } from '../data/footertestdata.js';
import { globalSetup } from '../utils/utilities.js';

describe('Test footer section @web', () => {
  beforeEach(() => {
    globalSetup();
  });
  it('Verify contact us links section from footer. @web', () => {
    cy.get(footerLocators.contactusLocator.get_helpLocator).click();
    cy.url().should('include', footerTestData.contactus_data.gethelp);
    cy.get(footerLocators.contactusLocator.media_centreLocator).click();
    cy.url().should('include', footerTestData.contactus_data.media_centre);
    cy.get(footerLocators.contactusLocator.supporter_and_corporate_contactLocator).click();
    cy.url().should('include', footerTestData.contactus_data.supporter_and_corporate_contact);
    cy.get(footerLocators.contactusLocator.shop_finderLocator).click();
    cy.url().should('include', footerTestData.contactus_data.shop_finder);
  });
  it('Verify contact us links section from footer. @web', () => {
    cy.get(footerLocators.get_involvedLocator.support_usLocator).click();
    cy.url().should('include', footerTestData.getinvolved_data.support_us);
    cy.get(footerLocators.get_involvedLocator.donateLocator).click();
    cy.url().should('include', footerTestData.getinvolved_data.donate);
    cy.get(footerLocators.get_involvedLocator.campaignLocator).click();
    cy.url().should('include', footerTestData.getinvolved_data.campaign);
    cy.get(footerLocators.get_involvedLocator.volunteerLocator).click();
    cy.url().should('include', footerTestData.getinvolved_data.volunteer);
    cy.get(footerLocators.get_involvedLocator.jobsLocator).click();
    cy.url().should('include', footerTestData.getinvolved_data.jobs);
    cy.get(footerLocators.get_involvedLocator.trainingLocator).click();
    cy.url().should('include', footerTestData.getinvolved_data.training);
  });
  it('Verify contact us links section from footer. @web', () => {
    cy.get(footerLocators.about_shelterLocator.what_we_doLocator).click();
    cy.url().should('include', footerTestData.about_shelter_data.whatwedo);
    cy.get(footerLocators.about_shelterLocator.how_we_make_a_differenceLocator).click();
    cy.url().should('include', footerTestData.about_shelter_data.how_we_make_a_difference);
    cy.get(footerLocators.about_shelterLocator.our_strategyLocator).click();
    cy.url().should('include', footerTestData.about_shelter_data.Our_strategy);
    cy.get(footerLocators.about_shelterLocator.modern_slaveryLocator).click();
    cy.url().should('include', footerTestData.about_shelter_data.Modern_Slavery_Statement);
    cy.get(footerLocators.about_shelterLocator.how_we_spend_your_moneyLocator).click();
    cy.url().should('include', footerTestData.about_shelter_data.How_we_spend_your_money);
    cy.get(footerLocators.about_shelterLocator.our_peopleLocator).click();
    cy.url().should('include', footerTestData.about_shelter_data.Our_people);
  });
  it('Verify contact us links section from footer. @web', () => {
    cy.get(footerLocators.preferencesLocator.supporter_faqsLocator).click();
    cy.url().should('include', footerTestData.Preferences_data.Supporter_FAQs);
    cy.get(footerLocators.preferencesLocator.disclaimer_and_copyrightLocator).click();
    cy.url().should('include', footerTestData.Preferences_data.Disclaimer_and_copyright);
    cy.get(footerLocators.preferencesLocator.privacyLocator).click();
    cy.url().should('include', footerTestData.Preferences_data.Privacy);
    cy.get(footerLocators.preferencesLocator.cookiesLocator).click();
    cy.url().should('include', footerTestData.Preferences_data.Cookies);
    cy.get(footerLocators.preferencesLocator.accessbilityLocator).click();
    cy.url().should('include', footerTestData.Preferences_data.Accessibility);
  });
});
