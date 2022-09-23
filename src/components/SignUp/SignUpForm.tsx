import React, { useState } from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import SignUpFirstStep from "./SignUpFirstStep";

const SignUpForm = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTabIndex(parseInt(e.target.value, 10));
  };

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <HeaderLayout>
      <Box>
        <input
          type="range"
          min="0"
          max="2"
          value={tabIndex}
          onChange={handleSliderChange}
          disabled={true}
        />
        <Tabs index={tabIndex} onChange={handleTabsChange}>
          {/* <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList> */}
          <TabPanels>
            <TabPanel>
              <SignUpFirstStep
                signUpStatus={(index: number): number | void => setTabIndex(index)}
              />
            </TabPanel>
            <TabPanel>
              <p>Yeah yeah. What's up?</p>
            </TabPanel>
            <TabPanel>
              <p>Oh, hello there.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </HeaderLayout>
  );
};
export default SignUpForm;
