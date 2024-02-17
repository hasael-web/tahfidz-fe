import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
   nama_halaqoh: yup.string().required("Nama halaqah wajib di isi "),
   tahun_ajaran: yup.string().required("Tahun ajaran wajib diisi!"),
   guruId: yup.string().required("Nama guru wajib di isi"),
   siswaIds: yup.array().of(yup.number()).required("Siswa wajib di isi"),
   status: yup.boolean(),
});

export const useHalaqohValidation = () => {
   const initialValues = {
      nama_halaqoh: "",
      passtahun_ajaranword: null,
      guruId: null,
      siswaIds: null,
      status: false,
   };

   return useForm({
      defaultValues: initialValues,
      resolver: yupResolver(schema),
      mode: "all",
   });
};


const schemaToUpdate = yup.object({
   nama_halaqoh: yup.string(),
   tahun_ajaran: yup.string(),
   guruId: yup.string(),
   siswaIds: yup.array().of(yup.number()),
   status: yup.boolean()
})

export const useHalaqohValidationToUpdate = () => {
   // const initialValues = {
   //    nama_halaqoh: "",
   //    passtahun_ajaranword: null,
   //    guruId: null,
   //    status: false,
   // }

   return useForm({
      resolver: yupResolver(schemaToUpdate),
      mode: "all"
   })
}