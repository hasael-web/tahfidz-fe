import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/molekuls/Header";
import { ArrowBackIcon, AddIcon } from "@chakra-ui/icons";
import ButtonCustom from "../../components/atoms/ButtonCustom";
import { Flex } from "@chakra-ui/react";
import InfoProfile from "../../components/atoms/InfoProfile";

const SiswaRaporTahfidz = () => {
  let { id } = useParams();
  const router = useNavigate();

  console.log(id);

  return (
    <>
      <Header title="UJIAN HAFALAN">
        <ButtonCustom
          icon={<ArrowBackIcon __css={{ marginRight: "6px" }} w={3} h={3} />}
          title="Kembali"
          onClick={() => router("/rapor-tahfidz/kelola-hafalan")}
          type="outline"
        />
      </Header>
      <Flex mt={8} justifyContent="space-between" alignItems="center" gap={4}>
        <Flex borderLeft="4px solid #0D6EFD" direction="column">
          <InfoProfile
            title="Nama Siswa"
            value="Muhammad Fauzan"
            isLine={false}
          />
          <InfoProfile
            title="Nama Halaqoh"
            value="Muhammad Fauzan"
            isLine={false}
          />
          <InfoProfile
            title="Tahun Ajaran"
            value="TA 2023-2024 GANJIL"
            isLine={false}
          />
          <InfoProfile
            title="Nama Guru"
            value="Muhammad Fauzan"
            isLine={false}
          />
        </Flex>
        <ButtonCustom
          icon={<AddIcon __css={{ marginRight: "6px" }} w={3} h={3} />}
          title="Tambah Ujian Baru"
          onClick={() => {}}
        />
      </Flex>
    </>
  );
};

export default SiswaRaporTahfidz;
