import React, { useState } from "react";
import { 
  Tab, 
  Tabs, 
  TabList,  
  TabPanels, 
  TabPanel, 
  Button, 
  Flex,
  Stack,
  Image,
  Text} from "@chakra-ui/react";
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
    if (tabIndex < 2){
      setTabIndex(tabIndex+1);
    }
  };

  const handleBackButton = () => {
    if (tabIndex > 0){
      setTabIndex(tabIndex-1);
    }
  };

  return (
    <Flex alignItems="center" justifyContent="center" flexDir="column" margin="6vw">
      <Image boxSize="6.5vw" alt="dashboard-logo-192x192" src="dashboard-logo-192x192.png" />
      <Text margin="1vh" fontSize="24px" color="brand.secondary">
        CourtCanva
      </Text>
      <Text margin="1vh" fontSize="16px" fontWeight="400">
        Register with CourtCanva as our franchisee
      </Text>
      <Tabs marginTop="2.5vh" align='center' index={tabIndex} onChange={handleTabsChange}>
        <TabList marginBottom="2vh">
          <Tab>Step 1</Tab>
          <Tab>Step 2</Tab>
          <Tab>Step 3</Tab>
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
      <Stack direction='row' spacing={4} alignItems="center" justifyContent="center" >
        {tabIndex === 0 ? (
        <Button
          colorScheme='green'
          disabled={isDisabled===0?false:true}
          onClick={handleNextButton}
        >Next
        </Button>) : (
        <><Button 
        colorScheme='green'
        onClick={handleBackButton}
        >Back</Button>
        <Button
        colorScheme='gray'
        disabled={isDisabled===0?false:true}
        onClick={handleNextButton}
        >Next
        </Button></>) }
      </Stack>
    </Flex>
  );
};
export default SignUpForm;
