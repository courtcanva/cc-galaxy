import React, { useState } from "react";
import {
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import SignUpInfoPage from "./SignUpInfoPage";
import SignUpCompanyInfo from "./SignUpCompanyInfo";
import SignUpPersonalInfo from "./SignUpPersonalInfo";

const SignUpForm = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(-1); // isDisabled could be 0, 1, 2

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
    <Flex width="34vw" alignItems="center" justifyContent="center" flexDir="column" margin="6vw">
      <Image boxSize="6.5vw" alt="dashboard-logo-192x192" src="dashboard-logo-192x192.png" />
      <Text margin="1vh" fontSize="24px" color="brand.secondary">
        CourtCanva
      </Text>
      <Text margin="1vh" fontSize="16px" fontWeight="400">
        Register with CourtCanva as our franchisee
      </Text>
      <Tabs
        isFitted
        width="34vw"
        marginTop="2.5vh"
        align="center"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList border="hidden" marginBottom="2vh" width="31vw">
          <Tab
            _selected={{ borderColor: "#49B785", color: "#2B6CB0" }}
            borderColor="rgba(54, 73, 93, 0.43)"
            color="rgba(43, 108, 176, 0.7)"
            margin="0vw 0.5vw"
          >
            Step 1
          </Tab>
          <Tab
            _selected={{ borderColor: "#49B785", color: "#2B6CB0" }}
            borderColor="rgba(54, 73, 93, 0.43)"
            color="rgba(43, 108, 176, 0.7)"
            margin="0vw 0.5vw"
          >
            Step 2
          </Tab>
          <Tab
            _selected={{ borderColor: "#49B785", color: "#2B6CB0" }}
            borderColor="rgba(54, 73, 93, 0.43)"
            color="rgba(43, 108, 176, 0.7)"
            margin="0vw 0.5vw"
          >
            Step 3
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUpInfoPage
              buttonStatus={(isDisabled: number): number | void => setIsDisabled(isDisabled)}
            />
          </TabPanel>
          <TabPanel>
            <SignUpCompanyInfo
              buttonStatus={(isDisabled: number): number | void => setIsDisabled(isDisabled)}
            />
          </TabPanel>
          <TabPanel>
            <SignUpPersonalInfo
              buttonStatus={(isDisabled: number): number | void => setIsDisabled(isDisabled)}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex direction="row" gap="1vw" alignItems="center" justifyContent="center">
        {tabIndex === 0 ? (
          <Button
            width="32vw"
            color="white"
            backgroundColor="#48BB78"
            disabled={isDisabled === 0 ? false : true}
            onClick={handleNextButton}
          >
            Next
          </Button>
        ) : (
          <>
            <Button
              width="15.5vw"
              color="white"
              backgroundColor="#48BB78"
              onClick={handleBackButton}
            >
              Back
            </Button>
            <Button
              width="15.5vw"
              color="white"
              backgroundColor="rgba(54, 73, 93, 1)"
              disabled={isDisabled === 0 ? false : true}
              onClick={handleNextButton}
            >
              Next
            </Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};
export default SignUpForm;
