interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'Car simulator',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read organization information'],
  ownerAbilities: [
    'Manage user information',
    'Manage organization information',
    "Edit owner's personal details",
    'Manage database schema',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/cf22f0ca-617c-47c2-90a7-02a9dcb7b67c',
};
