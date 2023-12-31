export enum Routes {
  INDEX = 'index',
  ABOUT = 'about',
  SERVICES = 'services',
  CONTACT = 'contact',
  MAGAZINE = 'magazine',
  PROJECTS = 'projects',
  DIVCIBAR = 'divcibar',
  HERO = 'hero',
  SITFORM = 'sitform',
  LA_SCINTILLA = 'la-scintilla',
  POLIGIN = 'poligin',
  OZZY = 'ozzy',
  NOVAK = 'novak',
  SERBIA_OPEN = 'serbia-open'
}

export const routes = {
  sr: {
    [Routes.INDEX]: '/',
    [Routes.ABOUT]: '/o-nama',
    [Routes.SERVICES]: '/usluge',
    [Routes.CONTACT]: '/kontakt',
    [Routes.MAGAZINE]: '/magazin',
    [Routes.PROJECTS]: '/projekti',
    [Routes.DIVCIBAR]: '/projekti/divcibar',
    [Routes.HERO]: '/projekti/hero',
    [Routes.SITFORM]: '/projekti/sitform',
    [Routes.LA_SCINTILLA]: '/projekti/la-scintilla',
    [Routes.POLIGIN]: '/projekti/poligin',
    [Routes.OZZY]: '/projekti/ozzy',
    [Routes.NOVAK]: '/projekti/novak',
    [Routes.SERBIA_OPEN]: '/projekti/serbia-open'
  },
  en: {
    [Routes.INDEX]: '/en',
    [Routes.ABOUT]: '/en/about',
    [Routes.SERVICES]: '/en/services',
    [Routes.CONTACT]: '/en/contact',
    [Routes.MAGAZINE]: '/en/magazine',
    [Routes.PROJECTS]: '/en/projects',
    [Routes.DIVCIBAR]: '/en/projects/divcibar',
    [Routes.HERO]: '/en/projects/hero',
    [Routes.SITFORM]: '/en/projects/sitform',
    [Routes.LA_SCINTILLA]: '/en/projects/la-scintilla',
    [Routes.POLIGIN]: '/en/projects/poligin',
    [Routes.OZZY]: '/en/projects/ozzy',
    [Routes.NOVAK]: '/en/projects/novak',
    [Routes.SERBIA_OPEN]: '/en/projects/serbia-open'
  }
}
