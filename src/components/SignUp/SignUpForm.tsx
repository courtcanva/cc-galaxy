import React, { useState } from "react";
import HeaderLayout from "../../layouts/HeaderLayout";
import {
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Button,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import SignUpFirstStep from "./SignUpFirstStep";
import SignUpCompanyInfo from "./SignUpCompanyInfo";
import SignUpPersonalInfo from "./SignUpPersonalInfo";

const SignUpForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const labelStyles = {
    mt: "-3.5",
    ml: "-2.5",
    fontSize: "sm",
  };

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const handleNextButton = () => {
    if (tabIndex < 2) {
      setTabIndex(tabIndex + 1);
    }
  };

  const handleBackButton = () => {
    if (tabIndex > 0) {
      setTabIndex(tabIndex - 1);
    }
  };

  return (
    <Flex>
      <Flex flexDir="column" alignItems="center">
        <Image boxSize="64px" alt="dashboard-logo-192x192" src="dashboard-logo-192x192.png" />
        <Text marginTop="10px" color="brand.secondary">
          CourtCanva
        </Text>
      </Flex>
      <Flex flexDir="column" alignItems="center">
        <Text lineHeight="24px" fontSize="16px" fontWeight="400">
          Register with CourtCanva as our franchisee
        </Text>
      </Flex>
      <Tabs align="center" index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>Step 1</Tab>
          <Tab>Step 2</Tab>
          <Tab>Step 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUpFirstStep
              buttonStatus={(isDisabled: boolean): boolean | void => setIsDisabled(isDisabled)}
            />
          </TabPanel>
          <TabPanel>
            <SignUpCompanyInfo
              buttonStatus={(isDisabled: boolean): boolean | void => setIsDisabled(isDisabled)}
            />
          </TabPanel>
          <TabPanel>
            <SignUpPersonalInfo
              buttonStatus={(isDisabled: boolean): boolean | void => setIsDisabled(isDisabled)}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Stack direction="row" spacing={4} align="center">
        {tabIndex === 0 ? (
          <Button colorScheme="green" disabled={isDisabled} onClick={handleNextButton}>
            Next
          </Button>
        ) : (
          <>
            <Button colorScheme="green" onClick={handleBackButton}>
              Back
            </Button>
            <Button colorScheme="gray" disabled={isDisabled} onClick={handleNextButton}>
              Next
            </Button>
          </>
        )}
      </Stack>
    </Flex>
  );
};
export default SignUpForm;
