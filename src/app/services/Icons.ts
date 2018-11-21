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
  }
}

