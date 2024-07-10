import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonAward extends Schema.Component {
  collectionName: 'components_common_awards';
  info: {
    displayName: 'award';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CommonButtons extends Schema.Component {
  collectionName: 'components_common_buttons';
  info: {
    displayName: 'buttons';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    variant: Attribute.String;
  };
}

export interface CommonContentFooterItem extends Schema.Component {
  collectionName: 'components_common_content_footer_items';
  info: {
    displayName: 'ContentFooterItem';
    description: '';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface CommonContentFooter extends Schema.Component {
  collectionName: 'components_common_content_footers';
  info: {
    displayName: 'ContentFooter';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Component<'common.content-footer-item', true>;
  };
}

export interface CommonDropdownItem extends Schema.Component {
  collectionName: 'components_common_dropdown_items';
  info: {
    displayName: 'DropdownItem';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    text: Attribute.String;
  };
}

export interface CommonDropdown extends Schema.Component {
  collectionName: 'components_common_dropdowns';
  info: {
    displayName: 'dropdown';
  };
  attributes: {
    text: Attribute.String;
    dropdownItems: Attribute.Component<'common.dropdown-item', true>;
  };
}

export interface CommonStep extends Schema.Component {
  collectionName: 'components_common_steps';
  info: {
    displayName: 'step';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    buttonText: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeAboutUs extends Schema.Component {
  collectionName: 'components_home_aboutuses';
  info: {
    displayName: 'AboutUs';
    description: '';
  };
  attributes: {
    slogan: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeAwards extends Schema.Component {
  collectionName: 'components_home_awards';
  info: {
    displayName: 'Awards';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    awards: Attribute.Component<'common.award', true>;
  };
}

export interface HomeBusinessPhilosophy extends Schema.Component {
  collectionName: 'components_home_business_philosophies';
  info: {
    displayName: 'BusinessPhilosophy';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    largeParagraph: Attribute.String;
    smallParagraph: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    largeParagraph2: Attribute.RichText;
    dasdsa: Attribute.Blocks;
  };
}

export interface HomeExpertTeam extends Schema.Component {
  collectionName: 'components_home_expert_teams';
  info: {
    displayName: 'ExpertTeam';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface HomeMarketingAgencyOverview extends Schema.Component {
  collectionName: 'components_home_marketing_agency_overviews';
  info: {
    displayName: 'marketingAgencyOverview';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading1: Attribute.String;
    subheading2: Attribute.String;
    subheading3: Attribute.String;
    bgImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgImageMobile: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeOurTeam extends Schema.Component {
  collectionName: 'components_home_our_teams';
  info: {
    displayName: 'ourTeam';
  };
  attributes: {
    mainTitle: Attribute.String;
    mainTitleSpan: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomePartnershipOverview extends Schema.Component {
  collectionName: 'components_home_partnership_overviews';
  info: {
    displayName: 'PartnershipOverview';
  };
  attributes: {
    heading: Attribute.String;
    largeParagraph: Attribute.String;
    smallParagraph: Attribute.String;
    mainImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image1: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomePromo extends Schema.Component {
  collectionName: 'components_home_promos';
  info: {
    displayName: 'Promo';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    inputPlaceholder: Attribute.String;
    strategyButtonText: Attribute.String;
    phoneButtonText: Attribute.String;
    buttonText: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeStatistics extends Schema.Component {
  collectionName: 'components_home_statistics';
  info: {
    displayName: 'Statistics';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.String;
    organizationsText: Attribute.String;
    images: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface HomeWorkflowSteps extends Schema.Component {
  collectionName: 'components_home_workflow_steps';
  info: {
    displayName: 'WorkflowSteps';
  };
  attributes: {
    completed: Attribute.Integer;
    description: Attribute.String;
    title: Attribute.String;
    steps: Attribute.Component<'common.step', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.award': CommonAward;
      'common.buttons': CommonButtons;
      'common.content-footer-item': CommonContentFooterItem;
      'common.content-footer': CommonContentFooter;
      'common.dropdown-item': CommonDropdownItem;
      'common.dropdown': CommonDropdown;
      'common.step': CommonStep;
      'home.about-us': HomeAboutUs;
      'home.awards': HomeAwards;
      'home.business-philosophy': HomeBusinessPhilosophy;
      'home.expert-team': HomeExpertTeam;
      'home.marketing-agency-overview': HomeMarketingAgencyOverview;
      'home.our-team': HomeOurTeam;
      'home.partnership-overview': HomePartnershipOverview;
      'home.promo': HomePromo;
      'home.statistics': HomeStatistics;
      'home.workflow-steps': HomeWorkflowSteps;
    }
  }
}
