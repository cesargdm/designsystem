import React from 'react';

import markdown from './README.mdx';

import Breadcrumb from '.';
import BreadcrumbHome from '../BreadcrumbHome';
import BreadcrumbItem from '../BreadcrumbItem';
import breadcrumbTwig from './Breadcrumb.twig';

export default {
  title: 'Components/Navigations/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { BreadcrumbHome, BreadcrumbItem },
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
    twig: breadcrumbTwig
  },
};

export const BreadcrumbRegular = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem>
      <a href="/#">
        <BreadcrumbHome />
      </a>
    </BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
    <BreadcrumbItem disableLink>Breadcrumb 3</BreadcrumbItem>
  </Breadcrumb>
);
