// Header test Locators
export const headerLocators = {
  housingAdviceSubMenuLocators: '#subMenuUl',
  housingAdvcieSubMenu: {
    homelessnessLocator:
        '#subMenuUl > :nth-child(1)',
    tenancydepositsLocator:
        "#subMenuUl a[data-headerlink='housing-advice_tenancy-deposits']",
    councilhousingLocator:
        "#subMenuUl a[data-headerlink='housing-advice_council-housing']",
    repairsLocator: "#subMenuUl a[data-headerlink='housing-advice_repairs']",
    privateRentingLocator:
        "#subMenuUl a[data-headerlink='housing-advice_private-renting']",
    benifitisandMoneyLocator:
        "#subMenuUl a[data-headerlink='housing-advice_benefits-and-money-problems']",
    evictionLocator:
        "#gatsby-focus-wrapper header nav #subMenuUl a[data-headerlink='housing-advice_eviction']",
    mortgageRepossessionLocator:
        "#gatsby-focus-wrapper header nav #subMenuUl a[data-headerlink$='housing-advice_mortgage-repossession']",
  },
  shelterHomeLogoLocator: '#gatsby-focus-wrapper > header > div > div > a > picture > img',
  housingAdviceLocator:
      "#gatsby-focus-wrapper header nav a[ data-headerlink='housing_advice']",
  getHelpLocator:
      "#gatsby-focus-wrapper header nav a[data-headerlink='get_help']",
  supportusLocator:
      "#gatsby-focus-wrapper header nav a[data-headerlink='support_us']",
  shopLocator: "#gatsby-focus-wrapper header nav a[data-headerlink='shops']",
  whatweDoLocator:
      "#gatsby-focus-wrapper header nav a[data-headerlink='what_we_do']",
  professionalResourcesLocator:
      "#gatsby-focus-wrapper header nav a[data-headerlink$='professional_resources']",
  donateButtonLocator:
      "#gatsby-focus-wrapper header a[data-headerlink$='donate']",
};
