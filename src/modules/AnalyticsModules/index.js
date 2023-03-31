import * as React from 'react';
import TabPanel from './components/TabPanel';
import Box from '@mui/material/Box';
import VerticalTabs from './components/Tabs';
import AbcXyzModule from './modules/AbcXyzModule'; 
import MainModule from './modules/MainModule';
import DebtModule from './modules/DebtModule';
import RemainModule from './modules/RemainModule';
import LeadModule from './modules/LeadModule';
import ExpenseModule from './modules/ExpenseModule';

export default function AnalyticsModules() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: '#ebf0ed', display: 'flex', height: 'calc(100vh - 64px)' }}
    >
    <VerticalTabs value={value} func={handleChange}/>
      <TabPanel value={value} index={0}>
        <MainModule />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExpenseModule />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RemainModule />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AbcXyzModule />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <DebtModule />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <LeadModule />
      </TabPanel>
    </Box>
  );
}