import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { ProtectedPage, UnProtectedPage } from "./AuthGuard";
import DataSiswa from "../pages/master/DataSiswa";
import DataGuru from "../pages/master/DataGuru";
import DataOperator from "../pages/master/DataOperator";
import DataTahunAjaran from "../pages/master/DataTahunAjaran";
import DataSekolah from "../pages/master/DataSekolah";
import KelompokHalaqoh from "../pages/halaqoh/KelompokHalaqoh";
import AbsensiSiswa from "../pages/halaqoh/AbsensiSiswa";
// import AbsensiGuru from "../pages/halaqoh/AbsensiGuru";
import TambahSiswa from "../pages/master/DataSiswa/Tambah";
import EditSiswa from "../pages/master/DataSiswa/Edit";
import DetailSiswa from "../pages/master/DataSiswa/Detail";
import TambahGuru from "../pages/master/DataGuru/Tambah";
import EditGuru from "../pages/master/DataGuru/Edit";
import DetailGuru from "../pages/master/DataGuru/Detail";
import TambahOperator from "../pages/master/DataOperator/Tambah";
import EditOperator from "../pages/master/DataOperator/Edit";
import DetailOperator from "../pages/master/DataOperator/Detail";
import TambahTahunAjaran from "../pages/master/DataTahunAjaran/Tambah";
import EditTahunAjaran from "../pages/master/DataTahunAjaran/Edit";
import TambahKelompokHalaqoh from "../pages/halaqoh/KelompokHalaqoh/Tambah";
import EditKelompokHalaqoh from "../pages/halaqoh/KelompokHalaqoh/Edit";
import DetailKelompokHalaqoh from "../pages/halaqoh/KelompokHalaqoh/Detail";
import UjianHafalan from "../pages/UjianHafalan";
import HafalanBaru from "../pages/hafalan/HafalanBaru";
import Murojaah from "../pages/hafalan/Murojaah";
import RaporTahfidz from "../pages/RaporTahfidz";

function RoutePage() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <UnProtectedPage>
            <Login />
          </UnProtectedPage>
        }
      />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedPage>
            <Dashboard />
          </ProtectedPage>
        }
      />

      {/* Master Data */}
      {/* Data Siswa */}
      <Route
        path="/master-data/data-siswa"
        element={
          <ProtectedPage>
            <DataSiswa />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-siswa/tambah-data-siswa"
        element={
          <ProtectedPage>
            <TambahSiswa />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-siswa/edit-data-siswa"
        element={
          <ProtectedPage>
            <EditSiswa />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-siswa/detail-data-siswa"
        element={
          <ProtectedPage>
            <DetailSiswa />
          </ProtectedPage>
        }
      />

      {/* Data Guru */}
      <Route
        path="/master-data/data-guru"
        element={
          <ProtectedPage>
            <DataGuru />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-guru/tambah-data-guru"
        element={
          <ProtectedPage>
            <TambahGuru />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-guru/edit-data-guru"
        element={
          <ProtectedPage>
            <EditGuru />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-guru/detail-data-guru"
        element={
          <ProtectedPage>
            <DetailGuru />
          </ProtectedPage>
        }
      />

      {/* Data Operator */}
      <Route
        path="/master-data/data-operator"
        element={
          <ProtectedPage>
            <DataOperator />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-operator/tambah-data-operator"
        element={
          <ProtectedPage>
            <TambahOperator />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-operator/edit-data-operator"
        element={
          <ProtectedPage>
            <EditOperator />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-operator/detail-data-operator"
        element={
          <ProtectedPage>
            <DetailOperator />
          </ProtectedPage>
        }
      />

      {/* Data Tahun Ajaran */}
      <Route
        path="/master-data/data-tahun-ajaran"
        element={
          <ProtectedPage>
            <DataTahunAjaran />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-tahun-ajaran/tambah-data-tahun-ajaran"
        element={
          <ProtectedPage>
            <TambahTahunAjaran />
          </ProtectedPage>
        }
      />
      <Route
        path="/master-data/data-tahun-ajaran/edit-data-tahun-ajaran"
        element={
          <ProtectedPage>
            <EditTahunAjaran />
          </ProtectedPage>
        }
      />

      {/* Data Sekolah */}
      <Route
        path="/master-data/data-sekolah"
        element={
          <ProtectedPage>
            <DataSekolah />
          </ProtectedPage>
        }
      />

      {/* Halaqoh */}
      {/* Kelompok Halaqoh */}
      <Route
        path="/halaqoh/kelompok-halaqoh"
        element={
          <ProtectedPage>
            <KelompokHalaqoh />
          </ProtectedPage>
        }
      />
      <Route
        path="/halaqoh/kelompok-halaqoh/tambah-kelompok-halaqoh"
        element={
          <ProtectedPage>
            <TambahKelompokHalaqoh />
          </ProtectedPage>
        }
      />
      <Route
        path="/halaqoh/kelompok-halaqoh/edit-kelompok-halaqoh"
        element={
          <ProtectedPage>
            <EditKelompokHalaqoh />
          </ProtectedPage>
        }
      />
      <Route
        path="/halaqoh/kelompok-halaqoh/detail-kelompok-halaqoh"
        element={
          <ProtectedPage>
            <DetailKelompokHalaqoh />
          </ProtectedPage>
        }
      />

      {/* Absensi Siswa */}
      <Route
        path="/halaqoh/absensi-siswa"
        element={
          <ProtectedPage>
            <AbsensiSiswa />
          </ProtectedPage>
        }
      />

      {/* Hafalan  */}
      <Route
        path="/hafalan/hafalan-baru-(sabq)"
        element={
          <ProtectedPage>
            <HafalanBaru />
          </ProtectedPage>
        }
      />
      <Route
        path="/hafalan/muroja’ah-(manzil)"
        element={
          <ProtectedPage>
            <Murojaah />
          </ProtectedPage>
        }
      />

      {/* Ujian Hafalan */}
      <Route
        path="/ujian-hafalan"
        element={
          <ProtectedPage>
            <UjianHafalan />
          </ProtectedPage>
        }
      />

      {/* Rapor Tahfizd */}
      <Route
        path="/rapor-tahfidz"
        element={
          <ProtectedPage>
            <RaporTahfidz />
          </ProtectedPage>
        }
      />
    </Routes>
  );
}

export default RoutePage;
