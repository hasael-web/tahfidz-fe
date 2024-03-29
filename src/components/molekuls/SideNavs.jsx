/* eslint-disable react/prop-types */
import { Box, Image, Link, Text, Flex } from "@chakra-ui/react";
import Logo from "../../assets/logo.png";
import LogoNoText from "../../assets/logo_notext.png";
import DashboardIcon from "../../assets/icons/dashboard.png";
import MasterDataIcon from "../../assets/icons/master-data.png";
import HalaqohIcon from "../../assets/icons/halaqoh.png";
import HafalanIcon from "../../assets/icons/hafalan.png";
import UjianHafalanIcon from "../../assets/icons/ujian_hafalan.png";
import RaporHafalanIcon from "../../assets/icons/rapor_tahfidz.png";
import { SideNavWithArrow } from "../atoms/SideNav";
import { nav } from "../../constans/nav";
import UjianHafalanWhite from "../../assets/icons/ujian_hafalan_white.png";
import RaportTahfidzWhite from "../../assets/icons/rapor_tahfidz_white.png";
import { Link as RouterLink } from "react-router-dom";

const SideNavs = ({ isShow }) => {
   return (
      <>
         <Box
            maxW="18rem"
            h="100vh"
            overflowY="auto"
            overflowX="hidden"
            paddingX={8}
            paddingY="24px"
            __css={{
               backgroundColor: "#F8F9FA",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
            position="fixed"
         >
            {/* Hamburger */}

            <Image
               objectFit="cover"
               width={isShow ? "100%" : "6rem"}
               marginBottom="1rem"
               src={!isShow ? LogoNoText : Logo}
               alt="logo"
            />
            <Flex w="100%" flexDirection="column">
               <Link
                  w="100%"
                  as={RouterLink}
                  to="/dashboard"
                  padding={2}
                  _hover={{ textDecoration: "none" }}
               >
                  <Flex alignItems="center" gap={2}>
                     <Image
                        src={DashboardIcon}
                        w="16px"
                        h="16px"
                        alt="dashboard"
                     />
                     <Text fontSize="15px" textAlign="left" opacity="0.5">
                        Dashboard
                     </Text>
                  </Flex>
               </Link>

               {/* Master Data */}
               <Text padding={2} textAlign="left" fontSize="12px" opacity="0.5">
                  MASTER
               </Text>
               <SideNavWithArrow
                  icon={MasterDataIcon}
                  title="Master Data"
                  listNav={nav.masterData}
               />

               {/* Halaqoh */}
               <Text padding={2} textAlign="left" fontSize="12px" opacity="0.5">
                  MANAJEMEN HALAQOH
               </Text>
               <SideNavWithArrow
                  icon={HalaqohIcon}
                  title="Halaqoh"
                  listNav={nav.halaqoh}
               />

               {/* KBM */}
               <Text padding={2} textAlign="left" fontSize="12px" opacity="0.5">
                  MANAJEMEN KBM/TASMI’
               </Text>
               <SideNavWithArrow
                  icon={HafalanIcon}
                  title="Hafalan"
                  listNav={nav.hafalan}
               />
               <SideNavWithArrow
                  singleLink
                  icon={UjianHafalanIcon}
                  title="Ujian Hafalan"
                  singleLinkTo={nav.ujian_hafalan}
                  IconSingle={UjianHafalanWhite}
               />

               {/*  MANAJEMEN REKAPITULASI DATAM */}
               <Text padding={2} textAlign="left" fontSize="12px" opacity="0.5">
                  MANAJEMEN REKAPITULASI DATA
               </Text>
               <SideNavWithArrow
                  singleLink
                  IconSingle={RaportTahfidzWhite}
                  icon={RaporHafalanIcon}
                  title="Rapor Tahfidz"
                  singleLinkTo={nav.rapor_tahfidz}
               />
            </Flex>
         </Box>
      </>
   );
};

export default SideNavs;
