import * as React from 'react';
import { AddonFooter, AppLayout, AppLayoutBody, AppLayoutHeader, AppLayoutMain, Flex } from '@bitrise/bitkit';
import dataAtIds from '../../dataAtIds.json';
import AppBeam from './AppBeam';
import FilterSection from '../Filters/FilterSection';

export default function App() {
  return (
    <AppLayout backgroundColor="white" data-insights-at-id={dataAtIds.RootApp}>
      <AppLayoutHeader>
        <AppBeam></AppBeam>
      </AppLayoutHeader>
      <AppLayoutBody>
        <FilterSection></FilterSection>
      </AppLayoutBody>
      <Flex paddingVertical="x16">
        <AddonFooter addonName="Insights" />
      </Flex>
    </AppLayout>
  );
}
