import { useNavigate, useParams } from "react-router-dom";
import Header from "../../../components/molekuls/Header";
import ButtonCustom from "../../../components/atoms/ButtonCustom";
import { Icon, ArrowBackIcon } from "@chakra-ui/icons";
import BoxInputLayout from "../../../components/molekuls/BoxInputLayout";
import { Text, Grid, Flex, Switch, useStatStyles } from "@chakra-ui/react";
import InputCustom from "../../../components/atoms/InputCustom";
import SelectCustom from "../../../components/atoms/SelectCustom";
import { IoIosSearch } from "react-icons/io";
import BadgeCustom from "../../../components/atoms/BadgeCustom";
import { useHalaqohValidationToUpdate } from "../../../lib/validation/halaqohValidation";
import { useAuth } from "../../../contexts/AuthContext";
import { useEffect, useState } from "react";

import { getAllGuru, getAllSiswa } from "../../../lib/api/users";
import { getAllTahunAjaran } from "../../../lib/api/tahun-ajaran";
import { Controller } from "react-hook-form";
import Select from "react-select";
import { getOneHalaqoh } from "../../../lib/api/halaqoh";

const EditKelompokHalaqoh = () => {
  const router = useNavigate();
  const { id } = useParams();
  const idParam = parseInt(id);

  const [dataHalaqoh, setDataHalaqoh] = useState();
  const [dataTahunAjaran, setDataTahunAjaran] = useState();
  const [dataGuru, setDataGuru] = useState();
  const [dataSiswa, setDataSiswa] = useState();
  const [loading, setLoading] = useState();

  const { control, handleSubmit, watch } = useHalaqohValidationToUpdate();

  useEffect(() => {
    const fecthingHalaqoh = async () => {
      try {
        // get all tahun ajaran
        const tahunAjaran = await getAllTahunAjaran();
        setDataTahunAjaran(tahunAjaran.data);

        // get one halaqoh
        const oneHalaqoh = await getOneHalaqoh(idParam);
        setDataHalaqoh(oneHalaqoh.data.halaqoh);

        // get all guru
        const allGuru = await getAllGuru();
        setDataGuru(allGuru.users);

        // get all siswa
        const response = await getAllSiswa();
        setDataSiswa(response.users);
      } catch (error) {
        console.log(error);
      }
    };

    fecthingHalaqoh();
  }, []);

  // TODO : Halaqoh Submit to UPDATE API

  const handleUpdateHalaqoh = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const option = dataSiswa?.map((item) => {
    return {
      label: item.profile.nama_lengkap,
      value: item.id,
    };
  });

  let defaultSiswa = [];

  if (dataHalaqoh !== undefined) {
    // dataHalaqoh.siswa.map((i) => {
    //   // const object = {
    //   //   label: i.nama_lengkap,
    //   //   value: i.siswaId,
    //   // };
    //   const object = {
    //     label: "1",
    //     value: "test1",
    //   };
    //   defaultSiswa.push(object);
    // });

    const object = {
      label: "test 1",
      value: "1",
    };

    defaultSiswa.push(object);
  }

  // //
  // console.log(selectDefaultSiswa);
  console.log(defaultSiswa);

  return (
    <>
      <Header title="EDIT KELOMPOK HALAQOH">
        <ButtonCustom
          icon={<ArrowBackIcon __css={{ marginRight: "6px" }} w={3} h={3} />}
          title="Kembali"
          onClick={() => router("/halaqoh/kelompok-halaqoh")}
          type="outline"
        />
      </Header>
      <BoxInputLayout title="Edit Kelompok Halaqoh Baru">
        <Text fontSize="14px" color="#6C757D">
          Silahkan ubah data di bawah untuk mengedit kelompok halaqoh
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" mt={8} gap="16px">
          <Controller
            control={control}
            name="nama_halaqoh"
            render={({ field, fieldState }) => (
              <InputCustom
                typeInput="text"
                defaultValue={dataHalaqoh?.nama_halaqoh}
                placeholder="Nama Halaqoh"
                label="Nama Halaqoh"
                name="nama_halaqoh"
                errorText={fieldState.error?.message}
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="tahun_ajaran"
            render={({ field, fieldState }) => (
              <SelectCustom
                label="Tahun Ajaran"
                placeholder="Tahun Ajaran"
                errorText={fieldState.error?.message}
                {...field}
                name="tahun_ajaran"
                options={dataTahunAjaran?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nama_tahun_ajaran}
                  </option>
                ))}
              />
            )}
          />

          <Controller
            control={control}
            name="guruId"
            render={({ field, fieldState }) => (
              <SelectCustom
                label="Nama Guru"
                placeholder="Nama Guru"
                errorText={fieldState.error?.message}
                {...field}
                name="guruId"
                options={dataGuru?.map((item) => (
                  <option
                    key={item.id}
                    value={item?.profile?.id}
                    selected={item?.profile?.id === dataHalaqoh?.guru.id}>
                    {item?.profile?.nama_lengkap}
                  </option>
                ))}
              />
            )}
          />
        </Grid>

        <Controller
          name="siswaIds"
          control={control}
          render={({ field, fieldState }) =>
            defaultSiswa.length > 0 && (
              <InputCustom
                label="Nama Anggota"
                placeholder="Nama Anggota"
                errorText={fieldState.error?.message}
                name="nama_anggota"
                notInputForm={
                  <Select
                    name="siswaIds"
                    closeMenuOnSelect={false}
                    onChange={(select) => {
                      const value = select.map((i) => i.value);
                      field.onChange(value);
                    }}
                    isMulti
                    defaultValue={defaultSiswa}
                    placeholder="Cari Siswa"
                    options={option}
                  />
                }
                rightAddon={<Icon as={IoIosSearch} fontSize="20px" />}
                helper="Pilih minimal satu siswa"
              />
            )
          }
        />

        <Flex flexWrap="wrap" gap={4}>
          <BadgeCustom title="Nama Siswa 1" />
          <BadgeCustom title="Nama Siswa 1" />
        </Flex>
        <Flex justifyContent="space-between" mt="12px" gap={4}>
          <Flex flexDirection="column" gap="1px">
            <Text fontSize="16px" fontWeight={600} color="#000">
              Status
            </Text>
            <Text fontSize="14px" color="#000">
              Anda dapat memilih ingin mengaktifkan atau menonaktifkan
            </Text>
          </Flex>
          <Controller
            control={control}
            name="status"
            render={({ field }) => (
              <Switch
                {...field}
                color="#0D6EFD"
                onChange={(e) => field.onChange(e.target.checkVisibility)}
                name="status"
              />
            )}
          />
        </Flex>
        <Flex justifyContent="flex-end" gap={4} alignItems="center" mt={12}>
          <ButtonCustom
            title="Batal"
            type="outline"
            color="#DC3545"
            borderColor="#DC3545"
            _hover={{ bgColor: "#DC3545", color: "white" }}
            w="100px"
            bgColor="transparent"
          />
          <ButtonCustom
            onClick={handleSubmit(handleUpdateHalaqoh, (err) =>
              console.log(err)
            )}
            title="Edit"
            typeButton={"submit"}
            _hover={{ opacity: "0.8" }}
            bgColor="#0B5ED7"
            color="#FFF"
          />
        </Flex>
      </BoxInputLayout>
    </>
  );
};

export default EditKelompokHalaqoh;
