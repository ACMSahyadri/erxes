import * as Factory from 'factory.ts';
import {
  ICustomer,
  ICustomerLinks,
  IVisitorContact
} from 'modules/customers/types';
import { companyFactory } from '../companies';
import { integrationFactory } from '../settings/integration';
import { tagFactory } from '../tags';
import { userFactory } from '../user';

export const customerLinksFactory = Factory.Sync.makeFactory<ICustomerLinks>({
  website: 'website',
  facebook: 'facebook',
  twitter: 'twitter',
  linkedIn: 'linkedIn',
  youtube: 'youtube',
  github: 'github'
});

export const visitorContactFactory = Factory.Sync.makeFactory<IVisitorContact>({
  email: 'dulamaa@yahoo.com',
  phone: '99889988'
});

export const customerFactory = Factory.Sync.makeFactory<ICustomer>({
  _id: '1',
  owner: userFactory.build({ _id: '12' }),
  integration: integrationFactory.build({ _id: '21' }),
  getTags: [tagFactory.build({ _id: '6' })],
  companies: [companyFactory.build({ _id: '' })],

  // ICustomerDocs
  firstName: 'string',
  lastName: 'string',
  sex: 1,
  phones: ['88888888'],
  primaryPhone: 'string',
  primaryEmail: 'string',
  emails: ['erxes@gmail.com'],
  avatar: 'string',
  isUser: true,
  ownerId: 'string',
  position: 'string',
  location: {
    userAgent: 'string',
    country: 'string',
    countryCode: 'string',
    remoteAddress: 'string',
    hostname: 'string',
    language: 'string'
  },
  department: 'string',
  leadStatus: 'string',
  lifecycleState: 'string',
  hasAuthority: 'string',
  description: 'string',
  doNotDisturb: 'string',
  links: customerLinksFactory.build({ facebook: 'facebook' }),
  customFieldsData: { customFieldIds: 'any' },
  visitorContactInfo: visitorContactFactory.build({
    email: 'dulamaa@yahoo.com',
    phone: '99889988'
  }),
  code: 'string'
});
