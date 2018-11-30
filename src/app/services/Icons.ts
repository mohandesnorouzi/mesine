export class Icons {
  constructor() {
  }

  icons(matIconRegistry: any, domSanitizer: any) {
    // for adding icon but for custom icon , first go in icon.svg file then remove "fill:" in last of tag
    matIconRegistry.addSvgIcon(
      'menu',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/menu.svg')
    );
    matIconRegistry.addSvgIcon(
      'foodMenu',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/foodMenu.svg')
    );
    matIconRegistry.addSvgIcon(
      'mainFood',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/mainFood.svg')
    );
    matIconRegistry.addSvgIcon(
      'starter',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/starter.svg')
    );
    matIconRegistry.addSvgIcon(
      'drink',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/drink.svg')
    );
    matIconRegistry.addSvgIcon(
      'salad',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/salad.svg')
    );
    matIconRegistry.addSvgIcon(
      'dessert',
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/dessert.svg')
    );
  }
}

